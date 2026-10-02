import React from 'react'
import ImageGallery from "./ImageGallery";

function DaySection({ day, onImageClick }) {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
        {/* Day information */}
        <div className="lg:sticky lg:top-10 lg:h-fit">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89a68]">
            Day {String(day.day).padStart(2, "0")}
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            {day.title}
          </h2>

          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
            {day.location}
          </p>

          <p className="mt-6 text-sm leading-7 text-white/50">
            {day.description}
          </p>
        </div>

        {/* Gallery */}
        <ImageGallery
          images={day.images}
          onImageClick={(imageIndex) =>
            onImageClick(day.images, imageIndex)
          }
        />
      </div>
    </section>
  );
}

export default DaySection;