"use client";

import { useState } from "react";

interface Destination {
  id: string;
  name: string;
  image: string;
  coords: { left: string; top: string };
}

const destinations: Destination[] = [
  {
    id: "sydney",
    name: "Sydney, Australia",
    image: "",
    coords: { left: "91.28%", top: "75.58%" }
  },
  {
    id: "melbourne",
    name: "Melbourne, Australia",
    image: "",
    coords: { left: "89.45%", top: "78.73%" }
  },
  {
    id: "perth",
    name: "Perth, Australia",
    image: "",
    coords: { left: "84.40%", top: "74.01%" }
  },
  {
    id: "canada",
    name: "Vancouver, Canada",
    image: "",
    coords: { left: "16.06%", top: "22.04%" }
  },
  {
    id: "singapore",
    name: "Singapore",
    image: "",
    coords: { left: "73.85%", top: "50.39%" }
  },
  {
    id: "vietnam",
    name: "Hanoi, Vietnam",
    image: "",
    coords: { left: "75.69%", top: "44.09%" }
  },
  {
    id: "thailand",
    name: "Bangkok, Thailand",
    image: "",
    coords: { left: "73.39%", top: "45.66%" }
  },
  {
    id: "fiji",
    name: "Fiji",
    image: "",
    coords: { left: "95.50%", top: "66.00%" }
  },
  {
    id: "indonesia",
    name: "Bali, Indonesia",
    image: "",
    coords: { left: "73.39%", top: "51.96%" }
  },
  {
    id: "south-africa",
    name: "Cape Town, South Africa",
    image: "",
    coords: { left: "54.59%", top: "75.58%" }
  },
  {
    id: "usa",
    name: "New York, USA",
    image: "",
    coords: { left: "24.31%", top: "34.64%" }
  },
  {
    id: "england",
    name: "London, England",
    image: "",
    coords: { left: "49.54%", top: "23.62%" }
  },
  {
    id: "ireland",
    name: "Dublin, Ireland",
    image: "",
    coords: { left: "46.20%", top: "23.00%" }
  },
  {
    id: "scotland",
    name: "Edinburgh, Scotland",
    image: "",
    coords: { left: "48.62%", top: "20.47%" }
  },
  {
    id: "nz",
    name: "Auckland, New Zealand",
    image: "",
    coords: { left: "92.66%", top: "83.45%" }
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
  const [activeId, setActiveId] = useState<string>("sydney");

  const activeDest = destinations.find((d) => d.id === activeId) || destinations[0];

  return (
    <section className="bg-white py-20 px-8 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-12">

        {/* Header Block */}
        <div className="text-center flex flex-col gap-2">
          <span className="text-[11.5px] font-semibold tracking-[0.22em] text-neutral-400 uppercase">
            /Popular holiday places
          </span>
          <h2 className="text-[38px] md:text-[46px] font-semibold text-[#005840] tracking-tight leading-none">
            Discover top routes and deals
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[1300px] aspect-[109/55] select-none mt-6">
          {/* Dotted Map Background */}
          <img
            src="/world-map-dots.svg"
            alt="World Dotted Map"
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
              <span className="text-[12.5px] font-semibold text-[#005840] tracking-wide block truncate">
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
