import useEmblaCarousel from "embla-carousel-react";
import DestinationCard from "./DestinationCard";

function DestinationCarousel({ destinations }) {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: true,
  });

  return (
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
  );
}

export default DestinationCarousel;