import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { destinations } from "../assets/assets";
import DaySection from "../components/DaySection";
import PhotoViewer from "../components/PhotoViewer";

function Destination() {
  const { id } = useParams();

  const [viewer, setViewer] = useState(null);

  const destination = destinations.find(
    (item) => item.id === id
  );

  if (!destination) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#171411] px-6 text-[#f4eee7]">
        <div className="text-center">
          <h1 className="font-serif text-5xl">
            Journey not found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block text-sm text-[#c89a68]"
          >
            ← Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#171411] text-[#f4eee7]">
      {/* Navigation */}
      <header className="absolute left-0 right-0 top-0 z-30 px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] justify-between">
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            ← Back
          </Link>

          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Travel Journal
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden sm:min-h-screen">
        <img
          src={destination.cover}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-black/20 to-black/20" />

        <div className="relative z-10 w-full px-6 pb-14 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
              {destination.location}
            </p>

            <h1 className="font-serif text-6xl leading-none tracking-tight sm:text-8xl lg:text-9xl">
              {destination.name}
            </h1>

            <p className="mt-5 text-sm text-white/60">
              {destination.date}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-white/70 sm:text-2xl sm:leading-10">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Day sections */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          {destination.days.map((day) => (
            <DaySection
              key={day.day}
              day={day}
              onImageClick={(images, imageIndex) => {
                setViewer({
                  images,
                  initialIndex: imageIndex,
                });
              }}
            />
          ))}
        </div>
      </section>

      {/* End */}
      <section className="px-6 py-24 text-center sm:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          End of journey
        </p>

        <Link
          to="/"
          className="mt-6 inline-block font-serif text-3xl text-white/80 transition-colors hover:text-[#c89a68]"
        >
          Explore another destination →
        </Link>
      </section>

      {viewer && (
        <PhotoViewer
          images={viewer.images}
          initialIndex={viewer.initialIndex}
          onClose={() => setViewer(null)}
        />
      )}
    </main>
  );
}

export default Destination;