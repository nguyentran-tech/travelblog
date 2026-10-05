import React, { useEffect, useState } from "react";
import { getViewerImage, getResponsiveImages } from "../assets/imageSources";

function PhotoViewer({
  images,
  initialIndex,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const [direction, setDirection] = useState("next");

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const currentImage = images[currentIndex];

  /*
   * Get the optimized high-resolution
   * image for the current photo.
   */
  const viewerImage =
    getViewerImage(
      currentImage.imageKey
    );

  /*
   * Navigate to next photo
   */
  const goNext = () => {
    setDirection("next");
    setIsImageLoaded(false);

    setCurrentIndex((index) =>
      index === images.length - 1
        ? 0
        : index + 1
    );
  };

  /*
   * Navigate to previous photo
   */
  const goPrevious = () => {
    setDirection("previous");
    setIsImageLoaded(false);

    setCurrentIndex((index) =>
      index === 0
        ? images.length - 1
        : index - 1
    );
  };

  /*
   * Keyboard controls
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    currentIndex,
    images.length,
  ]);

  /*
   * Prevent background page from scrolling
   */
  useEffect(() => {
    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, []);

  /*
  * Preload only the next photo.
  *
  * We use the 1200px version here because this is
  * only a preparation for the user's next action.
  *
  * The current photo still uses the full 2000px version.
  */
  useEffect(() => {
    const nextIndex =
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;

    const nextImage = images[nextIndex];

    if (!nextImage?.imageKey) {
      return;
    }

    const optimized =
      getResponsiveImages(
        nextImage.imageKey
      );

    const img = new Image();

    img.src = optimized.webp[1200];
  }, [currentIndex, images]);

  /*
   * Touch swipe
   */
  const handleTouchStart = (event) => {
    event.currentTarget.dataset.startX =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const startX = Number(
      event.currentTarget.dataset.startX
    );

    const endX =
      event.changedTouches[0].clientX;

    const difference =
      startX - endX;

    if (
      Math.abs(difference) < 50
    ) {
      return;
    }

    if (difference > 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/95
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          z-30
          flex
          items-center
          justify-between
          px-5
          py-5
          sm:px-8
        "
      >
        <p className="text-xs tracking-[0.15em] text-white/50">
          {String(
            currentIndex + 1
          ).padStart(2, "0")}
          {" / "}
          {String(
            images.length
          ).padStart(2, "0")}
        </p>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-2xl
            text-white/80
            transition-colors
            hover:bg-white/20
            hover:text-white
          "
        >
          ×
        </button>
      </div>

      {/* ========================= */}
      {/* PREVIOUS BUTTON */}
      {/* ========================= */}

      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous photo"
        className="
          absolute
          left-5
          top-1/2
          z-30
          hidden
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-xl
          text-white/80
          transition-all
          hover:bg-white/20
          hover:text-white
          md:flex
        "
      >
        ←
      </button>

      {/* ========================= */}
      {/* NEXT BUTTON */}
      {/* ========================= */}

      <button
        type="button"
        onClick={goNext}
        aria-label="Next photo"
        className="
          absolute
          right-5
          top-1/2
          z-30
          hidden
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-xl
          text-white/80
          transition-all
          hover:bg-white/20
          hover:text-white
          md:flex
        "
      >
        →
      </button>

      {/* ========================= */}
      {/* IMAGE AREA */}
      {/* ========================= */}

      <div
        className="
          absolute
          inset-0
          z-20
          flex
          items-center
          justify-center
          px-5
          pb-28
          pt-20
          sm:px-16
          sm:pb-24
        "
        onTouchStart={
          handleTouchStart
        }
        onTouchEnd={
          handleTouchEnd
        }
      >
        <picture
          key={currentImage.imageKey}
          className="contents"
        >
          <source
            type="image/avif"
            srcSet={
              viewerImage.avif
            }
          />

          <img
            src={viewerImage.webp}
            alt={currentImage.alt}
            draggable="false"
            onLoad={() =>
              setIsImageLoaded(true)
            }
            className={`
              max-h-full
              max-w-full
              select-none
              object-contain
              transition-all
              duration-300
              ease-out

              ${
                isImageLoaded
                  ? "scale-100 opacity-100"
                  : "scale-[0.98] opacity-0"
              }

              ${
                direction === "next"
                  ? "animate-photo-next"
                  : "animate-photo-previous"
              }
            `}
          />
        </picture>
      </div>

      {/* ========================= */}
      {/* CAPTION */}
      {/* ========================= */}

      {currentImage.caption && (
        <div
          className="
            absolute
            bottom-16
            left-1/2
            z-30
            w-[calc(100%-3rem)]
            max-w-xl
            -translate-x-1/2
            text-center
            sm:bottom-8
          "
        >
          <p className="text-sm leading-6 text-white/60">
            {currentImage.caption}
          </p>
        </div>
      )}

      {/* ========================= */}
      {/* MOBILE CONTROLS */}
      {/* ========================= */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-5
          sm:hidden
        "
      >
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous photo"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-white
          "
        >
          ←
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next photo"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-white
          "
        >
          →
        </button>
      </div>
    </div>
  );
}

export default PhotoViewer;