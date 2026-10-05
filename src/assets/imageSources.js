const optimizedImages = import.meta.glob(
  "./optimized/**/*.{webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export function getResponsiveImages(imageKey) {
  const basePath = `./optimized/${imageKey}`;

  return {
    avif: {
      480: optimizedImages[`${basePath}-480.avif`],
      768: optimizedImages[`${basePath}-768.avif`],
      1200: optimizedImages[`${basePath}-1200.avif`],
      2000: optimizedImages[`${basePath}-2000.avif`],
    },

    webp: {
      480: optimizedImages[`${basePath}-480.webp`],
      768: optimizedImages[`${basePath}-768.webp`],
      1200: optimizedImages[`${basePath}-1200.webp`],
      2000: optimizedImages[`${basePath}-2000.webp`],
    },
  };
}

export function getViewerImage(imageKey) { 
  const images = getResponsiveImages(imageKey); 
  
  return { 
    avif: images.avif[2000], 
    webp: images.webp[2000], 
  }; 
}