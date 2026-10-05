import { getResponsiveImages } from "../assets/imageSources";

function ResponsiveImage({
  imageKey,
  alt = "",
  className = "",
  sizes = "100vw",
  loading = "lazy",
  fetchPriority = "auto",
}) {
  const images =
    getResponsiveImages(imageKey);

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`
          ${images.avif[480]} 480w,
          ${images.avif[768]} 768w,
          ${images.avif[1200]} 1200w,
          ${images.avif[2000]} 2000w
        `}
        sizes={sizes}
      />

      <source
        type="image/webp"
        srcSet={`
          ${images.webp[480]} 480w,
          ${images.webp[768]} 768w,
          ${images.webp[1200]} 1200w,
          ${images.webp[2000]} 2000w
        `}
        sizes={sizes}
      />

      <img
        src={images.webp[1200]}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}

export default ResponsiveImage;