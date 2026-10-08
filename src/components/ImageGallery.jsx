import React from "react";
import ResponsiveImage from "./ResponsiveImage";

function ImageGallery({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5">
      {images.map((image, index) => {
        const isFeatured = image.featured;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onImageClick(index)}
            className={`
              group
              relative
              overflow-hidden
              rounded-xl
              text-left

              ${
                isFeatured
                  ? "col-span-2"
                  : "col-span-1"
              }
            `}
          >
            <ResponsiveImage
              imageKey={image.imageKey}
              alt={image.alt}
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index < 2 ? "high" : "auto"}
              sizes={
                isFeatured
                  ? "100vw"
                  : "(max-width: 640px) 50vw, 50vw"
              }
              className={`
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.03]

                ${
                  isFeatured
                    ? "aspect-[16/9]"
                    : "aspect-[4/3]"
                }
              `}
            />

            {/* Hover overlay */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/0
                opacity-0
                transition-all
                duration-300
                group-hover:bg-black/20
                group-hover:opacity-100
              "
            >
              <span
                className="
                  rounded-full
                  bg-black/40
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white
                  backdrop-blur-sm
                "
              >
                View
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ImageGallery;