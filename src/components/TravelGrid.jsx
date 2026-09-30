import React from 'react';
import MascotPet from './MascotPet';

const galleryItems = [
  { id: 'a', type: 'image', src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', alt: 'Tokyo, Japan' },
  { id: 'b', type: 'image', src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80', alt: 'Iceland Aurora' },
  { id: 'c', type: 'image', src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', alt: 'Bali, Indonesia' },
  { id: 'd', type: 'image', src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', alt: 'Paris, France' },
  { id: 'icon', type: 'icon', label: 'Explore World' }, // Center position (Index 4 in 0-indexed array)
  { id: 'e', type: 'image', src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80', alt: 'Machu Picchu, Peru' },
  { id: 'f', type: 'image', src: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', alt: 'Pyramids, Egypt' },
  { id: 'g', type: 'image', src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', alt: 'Serengeti, Tanzania' },
  { id: 'h', type: 'image', src: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', alt: 'Swiss Alps' },
];

export default function TravelGrid() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl w-full">
        {galleryItems.map((item) => {
          if (item.type === 'icon') {
            return (
                <div className='flex items-center justify-center'>
                    <MascotPet />
                </div>
            );
          }

          return (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay with title */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs sm:text-sm font-medium text-white drop-shadow">
                  {item.alt}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}