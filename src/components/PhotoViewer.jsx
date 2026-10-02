import React, { useEffect, useState } from "react";

function PhotoViewer({
  images,
  initialIndex,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(initialIndex);

  const currentImage = images[currentIndex];

  const goNext = () => {
    setCurrentIndex((index) =>
      index === images.length - 1 ? 0 : index + 1
    );
  };

  const goPrevious = () => {
    setCurrentIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
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
  }, [onClose]);

  /*
   * Prevent background page from scrolling
   */
  useEffect(() => {
    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, []);

  /*
   * Swipe detection
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

    const difference = startX - endX;

    // Ignore very small movements
    if (Math.abs(difference) < 50) {
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
        flex
        items-center
        justify-center
        bg-black/95
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* ============================= */}
      {/* TOP BAR */}
      {/* ============================= */}

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-8">
        <p className="text-xs tracking-[0.15em] text-white/50">
          {String(currentIndex + 1).padStart(2, "0")}
          {" / "}
          {String(images.length).padStart(2, "0")}
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

      {/* ============================= */}
      {/* PREVIOUS BUTTON */}
      {/* ============================= */}

      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous photo"
        className="
          absolute
          left-6
          top-1/2
          z-20
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
          transition-colors
          hover:bg-white/20
          hover:text-white
          md:flex
        "
      >
        ←
      </button>

      {/* ============================= */}
      {/* NEXT BUTTON */}
      {/* ============================= */}

      <button
        type="button"
        onClick={goNext}
        aria-label="Next photo"
        className="
          absolute
          right-6
          top-1/2
          z-20
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
          transition-colors
          hover:bg-white/20
          hover:text-white
          md:flex
        "
      >
        →
      </button>

      {/* ============================= */}
      {/* IMAGE AREA */}
      {/* ============================= */}

      <div
        className="
          flex
          h-full
          w-full
          touch-pan-y
          items-center
          justify-center
          px-5
          py-20
          sm:px-16
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          draggable="false"
          className="
            max-h-full
            max-w-full
            select-none
            object-contain
          "
        />
      </div>

      {/* ============================= */}
      {/* MOBILE CONTROLS */}
      {/* ============================= */}

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-5 md:hidden">
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