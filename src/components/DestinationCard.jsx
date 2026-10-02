import React from 'react'
import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destination/${destination.id}`}
      className="group relative block h-[68vh] min-h-[480px] w-[82vw] max-w-[420px] shrink-0 overflow-hidden rounded-2xl bg-[#211d19] sm:h-[600px]"
    >
      {/* Image */}
      <img
        src={destination.cover}
        alt={destination.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/80" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/60">
          {destination.location}
        </p>

        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          {destination.name}
        </h2>

        <p className="mt-2 text-sm text-white/65">
          {destination.date}
        </p>

        {/* Explore */}
        <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
          <span>Explore journey</span>

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;