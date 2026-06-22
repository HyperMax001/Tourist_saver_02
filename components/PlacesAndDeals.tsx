"use client";

import { Highlighter } from "@/registry/magicui/highlighter";

export default function PlacesAndDeals() {

  return (
    <section className="bg-white pt-8 pb-20 px-4 w-full overflow-hidden">
      <div className="w-full mx-auto bg-[#f0f7f4] rounded-[28px] py-16 px-8 flex flex-col items-center gap-12 shadow-sm">

        {/* Header Block */}
        <div className="text-center flex flex-col gap-2">
          <span className="text-[11.5px] font-semibold tracking-[0.22em] text-neutral-400 uppercase">
            /Popular holiday places
          </span>
          <h2 className="text-[38px] md:text-[46px] font-semibold text-[#005840] tracking-tight leading-none">
            Discover best <Highlighter action="highlight" color="#d1f843">places for travel</Highlighter>
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[800px] aspect-square select-none mt-6">
          {/* Dotted Map Background */}
          <img
            src="/australia-map-dotted.svg"
            alt="Australia Dotted Map"
            className="w-full h-full object-contain opacity-95"
            draggable={false}
          />

        </div>

      </div>
    </section>
  );
}
