import React, { useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import DestinationCard from "./DestinationCard";

function DestinationCarousel({ destinations }) {
  // This represents the user's preference, not the current animation state.
  const [isPlaying, setIsPlaying] = useState(false);

  // Track temporary interaction separately from the user's preference.
  const isDraggingRef = useRef(false);

  const autoScroll = useMemo(
    () =>
      AutoScroll({
        speed: 1.8,
        startDelay: 0,
        playOnInit: false,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      dragFree: true,
    },
    [autoScroll]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    // Only play when all required conditions are satisfied.
    const syncAutoScroll = () => {
      const shouldPlay =
        isPlaying &&
        !isDraggingRef.current &&
        !document.hidden &&
        !reducedMotion.matches;

      if (shouldPlay) {
        autoScroll.play();
      } else {
        autoScroll.stop();
      }
    };

    const handlePointerDown = () => {
      isDraggingRef.current = true;
      autoScroll.stop();
      setIsPlaying(false);
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    const handleVisibilityChange = () => {
      syncAutoScroll();
    };

    const handleMotionChange = () => {
      syncAutoScroll();
    };

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    reducedMotion.addEventListener?.("change", handleMotionChange);

    // Apply the correct initial state.
    syncAutoScroll();

    return () => {
      autoScroll.stop();

      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      reducedMotion.removeEventListener?.(
        "change",
        handleMotionChange
      );
    };
  }, [emblaApi, autoScroll, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((playing) => !playing);
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={handlePlayPause}
          aria-pressed={isPlaying}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs tracking-wide text-white/70 transition-colors hover:border-[#c89a68]/60 hover:text-[#c89a68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89a68]"
        >
          <span aria-hidden="true">
            {isPlaying ? "Ⅱ" : "▶"}
          </span>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-[9vw] sm:gap-6 sm:px-[15vw] lg:gap-8 lg:px-[calc((100vw-1200px)/2)]">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationCarousel;