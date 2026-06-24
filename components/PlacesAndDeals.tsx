"use client";

import { useState } from "react";
import { Highlighter } from "@/registry/magicui/highlighter";

interface Destination {
  id: string;
  name: string;
  image: string;
  coords: { left: string; top: string };
}

const destinations: Destination[] = [
  {
    id: "gold-coast",
    name: "Gold Coast",
    image: "/australia-country-selection/gold-coast_converted.avif",
    coords: { left: "91%", top: "54%" }
  },
  {
    id: "brisbane",
    name: "Brisbane",
    image: "/australia-country-selection/brisbane_converted.avif",
    coords: { left: "90%", top: "50%" }
  },
  {
    id: "sydney",
    name: "Sydney",
    image: "/australia-country-selection/sydney-opera-house-with-sea_converted.avif",
    coords: { left: "85%", top: "72%" }
  },
  {
    id: "melbourne",
    name: "Melbourne",
    image: "/australia-country-selection/melbourne_converted.avif",
    coords: { left: "74%", top: "82%" }
  }
];

const MapPin = ({ active }: { active?: boolean }) => (
  <svg
    width="22"
    height="28"
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-sm transition-all duration-300 ${active ? "scale-115 opacity-100" : "scale-100 opacity-80 hover:opacity-100"
      }`}
  >
    <path
      d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z"
      fill="black"
    />
    <circle cx="12" cy="12" r="3.5" fill="white" />
  </svg>
);

export default function PlacesAndDeals() {
  const [activeId, setActiveId] = useState<string>("gold-coast");

  const activeDest = destinations.find((d) => d.id === activeId) || destinations[0];

  return (
    <section className="bg-white pt-8 pb-20 px-4 w-full overflow-hidden">
      <div className="w-full mx-auto bg-[#F4F8FD] rounded-[28px] py-16 px-8 flex flex-col items-center gap-12 shadow-sm">

        {/* Header Block */}
        <div className="text-center flex flex-col gap-2">
          <span className="text-[11.5px] font-semibold tracking-[0.22em] text-neutral-400 uppercase">
            /Popular holiday places
          </span>
          <h2 className="text-[38px] md:text-[46px] font-semibold text-[#2350AA] tracking-tight leading-none">
            Discover best <Highlighter action="highlight" color="#d1f843">places for travel</Highlighter>
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[800px] aspect-square select-none mt-6">
          {/* Map Background */}
          <img
            src="/au.svg"
            alt="Australia Map"
            className="w-full h-full object-contain opacity-95"
            draggable={false}
          />

          {/* Interactive Pins */}
          {destinations.map((dest) => {
            const isActive = dest.id === activeId;
            return (
              <button
                key={dest.id}
                onMouseEnter={() => setActiveId(dest.id)}
                onClick={() => setActiveId(dest.id)}
                className="absolute focus:outline-none transition-transform duration-200"
                style={{
                  left: dest.coords.left,
                  top: dest.coords.top,
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 20 : 10,
                }}
              >
                <MapPin active={isActive} />
              </button>
            );
          })}

          {/* Active Tooltip Card */}
          <div
            className="absolute bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 w-[180px] z-30"
            style={{
              left: activeDest.coords.left,
              top: activeDest.coords.top,
              transform: "translate(-50%, -115%)",
            }}
          >
            {/* Card Image */}
            <div className="h-[95px] w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 border-b border-neutral-100">
              {activeDest.image ? (
                <img
                  src={activeDest.image}
                  alt={activeDest.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[10.5px] font-semibold tracking-wider uppercase text-neutral-500">
                  {activeDest.name.split(",")[0]}
                </span>
              )}
            </div>
            {/* Card Label */}
            <div className="py-2.5 px-3 text-center bg-white">
              <span className="text-[12.5px] font-semibold text-[#2350AA] tracking-wide block truncate">
                {activeDest.name}
              </span>
            </div>

            {/* Little pointer triangle below card */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.04)]" />
          </div>

        </div>

      </div>
    </section>
  );
}

