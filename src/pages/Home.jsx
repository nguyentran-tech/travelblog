import React from 'react'
import DestinationCarousel from "../components/DestinationCarousel";
import { destinations } from "../assets/assets";
import { Mascot } from 'page-mascot';
import cnflag from "../assets/flags/cnflag.svg";
import jpflag from "../assets/flags/jpflag.svg";
import twflag from "../assets/flags/twflag.svg";
import hkflag from "../assets/flags/hkflag.svg";
import thaiflag from "../assets/flags/thaiflag.svg";
import indoflag from "../assets/flags/indoflag.svg";
import malflag from "../assets/flags/malflag.svg";
import sgflag from "../assets/flags/sgflag.svg";
import vnflag from "../assets/flags/vnflag.svg";

function Home() {
  return (
    <main className="min-h-screen bg-[#171411] text-[#f4eee7]">
      {/* Header */}
      <header className="px-6 pb-8 pt-8 sm:px-10 sm:pt-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Travel Journal
            </p>

            <Mascot
              directions="/mascots/panda-directions.webp"
              reactions="/mascots/panda-reactions.webp"
              size={100}
            />

            <button className="text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white">
              About
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-12 pt-12 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16 lg:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c89a68]">
            Places & memories
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
          {[jpflag, cnflag, twflag, thaiflag, indoflag, hkflag, malflag, sgflag, vnflag].map(
            (flag, index) => (
              <img
                key={index}
                src={flag}
                alt=""
                className="h-6 w-6 shrink-0 object-contain transition-transform duration-300 hover:scale-110 sm:h-8 sm:w-8"
              />
            )
          )}
        </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Stories from
            <br />
            the road.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/50 sm:text-base">
            Our personal collection of places, photographs, and little moments
            from the journeys along the way.
          </p>
        </div>
      </section>

      {/* Carousel */}
      <section className="pb-16 sm:pb-24">
        <DestinationCarousel destinations={destinations} />
      </section>

      {/* Footer hint */}
      <section className="px-6 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-white/30">
          Drag to explore
        </p>
      </section>
    </main>
  );
}

export default Home;