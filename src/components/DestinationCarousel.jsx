import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import DestinationCard from "./DestinationCard";

function DestinationCarousel({ destinations }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const autoScroll = useMemo(
    () =>
      AutoScroll({
        speed: 1,
        startDelay: 0,
        playOnInit: false,
        stopOnInteraction: false,
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

    const syncAutoplay = () => {
      if (reducedMotion.matches) {
        autoScroll.stop();
        setIsPlaying(false);
        return;
      }

      if (document.hidden || !isPlaying) {
        autoScroll.stop();
      } else {
        autoScroll.play();
      }
    };

    const handlePointerDown = () => {
      // Give manual dragging priority over autoplay.
      autoScroll.stop();
      setIsPlaying(false);
    };

    const handleVisibilityChange = () => {
      syncAutoplay();
    };

    const handleMotionChange = () => {
      syncAutoplay();
    };

    emblaApi.on("pointerDown", handlePointerDown);

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    reducedMotion.addEventListener("change", handleMotionChange);

    syncAutoplay();

    return () => {
      autoScroll.stop();

      emblaApi.off("pointerDown", handlePointerDown);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, [emblaApi, autoScroll, isPlaying]);

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
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