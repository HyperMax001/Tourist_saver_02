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
    id: "bali",
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80",
    coords: { left: "70.5%", top: "54%" }
  },
  {
    id: "new-york",
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80",
    coords: { left: "24%", top: "35%" }
  },
  {
    id: "paris",
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    coords: { left: "50%", top: "26%" }
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=400&q=80",
    coords: { left: "84%", top: "33%" }
  },
  {
    id: "sydney",
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80",
    coords: { left: "85%", top: "74%" }
  },
  {
    id: "rio",
    name: "Rio de Janeiro, Brazil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=400&q=80",
    coords: { left: "35%", top: "68%" }
  },
  {
    id: "cape-town",
    name: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=400&q=80",
    coords: { left: "54%", top: "75%" }
  },
  {
    id: "london",
    name: "London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=400&q=80",
    coords: { left: "48%", top: "24%" }
  },
  {
    id: "cairo",
    name: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5a0af?auto=format&fit=crop&w=400&q=80",
    coords: { left: "56%", top: "39%" }
  },
  {
    id: "vancouver",
    name: "Vancouver, Canada",
    image: "https://images.unsplash.com/photo-1506605296071-70022e934d53?auto=format&fit=crop&w=400&q=80",
    coords: { left: "15%", top: "25%" }
  }
];

const MapPin = ({ active }: { active?: boolean }) => (
  <svg
    width="20"
    height="26"
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-md transition-all duration-200 ${
      active ? "scale-120" : "hover:scale-120"
    }`}
  >
    <path
      d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z"
      fill={active ? "#005840" : "black"}
    />
    <circle cx="12" cy="12" r="4" fill="white" />
  </svg>
);

export default function PlacesAndDeals() {
  const [activeId, setActiveId] = useState<string>("bali");

  const activeDest = destinations.find((d) => d.id === activeId) || destinations[0];

  return (
    <section className="bg-white py-20 px-8 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-12">
        
        {/* Header Block */}
        <div className="text-center flex flex-col gap-2">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            /Popular places to visit
          </span>
          <h2 className="text-[38px] md:text-[46px] font-semibold text-[#005840] tracking-tight leading-none">
            Discover top places and deals
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[1100px] aspect-[109/55] select-none mt-6">
          {/* Dotted Map Background */}
          <img
            src="/world-map-dots.svg"
            alt="World Dotted Map"
            className="w-full h-full object-contain opacity-85"
            draggable={false}
          />

          {/* Interactive Pins */}
          {destinations.map((dest) => {
            const isActive = dest.id === activeId;
            return (
              <button
                key={dest.id}
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
            className="absolute bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 w-[180px] z-30"
            style={{
              left: activeDest.coords.left,
              top: activeDest.coords.top,
              transform: "translate(-50%, -115%)",
            }}
          >
            {/* Card Image */}
            <div className="h-[95px] w-full overflow-hidden">
              <img
                src={activeDest.image}
                alt={activeDest.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card Label */}
            <div className="py-2.5 px-3 text-center bg-white">
              <span className="text-[12.5px] font-semibold text-black tracking-wide block truncate">
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
