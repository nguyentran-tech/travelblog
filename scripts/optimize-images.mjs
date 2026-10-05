import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const ASSETS_DIR = path.resolve("src/assets");

const OPTIMIZED_DIR = path.join(
  ASSETS_DIR,
  "optimized"
);

const SUPPORTED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
];

const IMAGE_WIDTHS = [
  480,
  768,
  1200,
  2000,
];

/**
 * Find all original image files.
 * The optimized folder is intentionally skipped.
 */
async function getImageFiles(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name
    );

    // Never scan the optimized folder
    if (
      entry.isDirectory() &&
      entry.name === "optimized"
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      const nestedFiles =
        await getImageFiles(fullPath);

      files.push(...nestedFiles);

      continue;
    }

    const extension =
      path.extname(entry.name).toLowerCase();

    if (
      SUPPORTED_EXTENSIONS.includes(extension)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Check whether a file exists.
 */
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check whether an optimized file is newer
 * than the original image.
 */
async function isUpToDate(
  sourcePath,
  outputPath
) {
  if (!(await fileExists(outputPath))) {
    return false;
  }

  const sourceStats =
    await fs.stat(sourcePath);

  const outputStats =
    await fs.stat(outputPath);

  return (
    outputStats.mtimeMs >=
    sourceStats.mtimeMs
  );
}

/**
 * Generate responsive WebP and AVIF
 * versions for one source image.
 */
async function optimizeImage(sourcePath) {
  const relativePath =
    path.relative(
      ASSETS_DIR,
      sourcePath
    );

  const parsedPath =
    path.parse(relativePath);

  const outputDirectory =
    path.join(
      OPTIMIZED_DIR,
      parsedPath.dir
    );

  await fs.mkdir(
    outputDirectory,
    {
      recursive: true,
    }
  );

  let updated = false;

  for (const width of IMAGE_WIDTHS) {
    const webpPath =
      path.join(
        outputDirectory,
        `${parsedPath.name}-${width}.webp`
      );

    const avifPath =
      path.join(
        outputDirectory,
        `${parsedPath.name}-${width}.avif`
      );

    const webpUpToDate =
      await isUpToDate(
        sourcePath,
        webpPath
      );

    const avifUpToDate =
      await isUpToDate(
        sourcePath,
        avifPath
      );

    // Generate WebP if missing or outdated
    if (!webpUpToDate) {
      await sharp(sourcePath)
        .resize({
          width,
          withoutEnlargement: true,
        })
        .webp({
          quality: 82,
        })
        .toFile(webpPath);

      updated = true;
    }

    // Generate AVIF if missing or outdated
    if (!avifUpToDate) {
      await sharp(sourcePath)
        .resize({
          width,
          withoutEnlargement: true,
        })
        .avif({
          quality: 65,
        })
        .toFile(avifPath);

      updated = true;
    }
  }

  if (updated) {
    console.log(
      `↻ Updated: ${relativePath}`
    );

    return "updated";
  }

  console.log(
    `✓ Unchanged: ${relativePath}`
  );

  return "skipped";
}

/**
 * Find all generated WebP and AVIF files.
 */
async function getOptimizedFiles(
  directory
) {
  if (!(await fileExists(directory))) {
    return [];
  }

  const entries = await fs.readdir(
    directory,
    {
      withFileTypes: true,
    }
  );

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name
    );

    if (entry.isDirectory()) {
      const nestedFiles =
        await getOptimizedFiles(
          fullPath
        );

      files.push(...nestedFiles);

      continue;
    }

    if (
      /\.(webp|avif)$/i.test(
        entry.name
      )
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Remove optimized files that should no longer exist in the original folders.
 */
async function cleanupOptimizedFiles(
  sourceFiles
) {
  const optimizedFiles =
    await getOptimizedFiles(
      OPTIMIZED_DIR
    );
    
  const expectedFiles = new Set();

  for (const sourceFile of sourceFiles) {
    const relativePath =
      path.relative(
        ASSETS_DIR,
        sourceFile
      );

    const parsedPath =
      path.parse(relativePath);

    for (const width of IMAGE_WIDTHS) {
      expectedFiles.add(
        path.normalize(
          path.join(
            parsedPath.dir,
            `${parsedPath.name}-${width}.webp`
          )
        )
      );

      expectedFiles.add(
        path.normalize(
          path.join(
            parsedPath.dir,
            `${parsedPath.name}-${width}.avif`
          )
        )
      );
    }
  }

  let removed = 0;

  for (const optimizedFile of optimizedFiles) {
    const relativePath =
      path.normalize(
        path.relative(
          OPTIMIZED_DIR,
          optimizedFile
        )
      );

    if (!expectedFiles.has(relativePath)) {
      await fs.unlink(
        optimizedFile
      );

      console.log(
        `− Removed: ${path.relative(
          OPTIMIZED_DIR,
          optimizedFile
        )}`
      );

      removed++;
    }
  }

  return removed;
}

/**
 * Main optimization process.
 */
async function main() {
  console.log(
    "\nStarting image optimization...\n"
  );

  const sourceFiles =
    await getImageFiles(
      ASSETS_DIR
    );

  console.log(
    `Found ${sourceFiles.length} source images.\n`
  );

  let updated = 0;
  let skipped = 0;

  /**
   * Process new and changed images.
   * Unchanged images are skipped.
   */
  for (const image of sourceFiles) {
    const result =
      await optimizeImage(image);

    if (result === "updated") {
      updated++;
    } else {
      skipped++;
    }
  }

  /**
   * Remove deleted images and
   * old/legacy optimized files.
   */
  const removed =
    await cleanupOptimizedFiles(
      sourceFiles
    );

  console.log(
    "\n--------------------------"
  );

  console.log(
    `Updated: ${updated}`
  );

  console.log(
    `Skipped: ${skipped}`
  );

  console.log(
    `Removed: ${removed}`
  );

  console.log(
    "--------------------------"
  );

  console.log(
    "\nImage optimization complete!\n"
  );
}

main().catch((error) => {
  console.error(
    "\nImage optimization failed:"
  );

  console.error(error);

  process.exit(1);
});