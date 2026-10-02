import React from 'react'

function ImageGallery({ images, onImageClick }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5">
      {images.map((image, index) => {
        const isFeatured = image.featured;

        return (
          <button
            key={image.src}
            type="button"
            onClick={() => onImageClick(index)}
            className={
              isFeatured
                ? "group col-span-2 overflow-hidden rounded-xl text-left"
                : "group overflow-hidden rounded-xl text-left"
            }
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </button>
        );
      })}
    </div>
  );
}

export default ImageGallery;