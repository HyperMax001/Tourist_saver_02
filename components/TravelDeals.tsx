"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShineBorder } from "@/registry/magicui/shine-border";

interface Deal {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
}

const australiaDeals: Deal[] = [
  {
    id: "sydney-harbour",
    title: "Sydney Opera House & Harbour Tour",
    description: "Experience the vibrant harbor, iconic opera house, and spectacular coastal walks of Sydney.",
    priceRange: "$650-$900",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "barrier-reef",
    title: "Great Barrier Reef Adventure",
    description: "Dive into the world's largest coral reef system, teeming with colorful marine life.",
    priceRange: "$850-$1250",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "melbourne-laneways",
    title: "Melbourne Laneways & Culture Walk",
    description: "Discover hidden street art, world-class coffee culture, and historic architecture in Melbourne.",
    priceRange: "$450-$750",
    image: "https://plus.unsplash.com/premium_photo-1733317319588-c93c8515c8af?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "uluru-sunset",
    title: "Outback Sunset & Uluru Expedition",
    description: "Journey into the sacred red heart of Australia and watch the desert glow at sunset around Uluru.",
    priceRange: "$950-$1400",
    image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=600&q=80"
  }
];

const countriesList = [
  { id: "australia", name: "Australia", isAvailable: true },
  { id: "canada", name: "Canada", isAvailable: false },
  { id: "singapore", name: "Singapore", isAvailable: false },
  { id: "vietnam", name: "Vietnam", isAvailable: false },
  { id: "thailand", name: "Thailand", isAvailable: false },
  { id: "fiji", name: "Fiji", isAvailable: false },
  { id: "indonesia", name: "Indonesia", isAvailable: false },
  { id: "south-africa", name: "South Africa", isAvailable: false },
  { id: "usa", name: "USA", isAvailable: false },
  { id: "england", name: "England", isAvailable: false },
  { id: "ireland", name: "Ireland", isAvailable: false },
  { id: "scotland", name: "Scotland", isAvailable: false },
  { id: "nz", name: "New Zealand", isAvailable: false },
];

function getCountryIcon(id: string, className: string = "w-7 h-7") {
  switch (id) {
    case "australia": // Kangaroo
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 18c6-1 10-3 12-7 .5-1 .5-3 0-4s-1.5-1.5-1-2.5c.3-.6 1-.5 1.5-.2.8.5.8 1.5.5 2.2l-1 2.2c1.5.5 3.5.5 5 1.5s2 3 2 5.5c0 .3-.2.5-.5.5h-5.5c-1 0-1.8-.5-2.2-1.3L11 13m-3.5 5l.5-3" />
        </svg>
      );
    case "canada": // Maple Leaf
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l1.5 4 3.5-1.5-1 3.5 4 1.5-4.5.5 1.5 4.5-4-1.5-.5 5.5-.5-5.5-4 1.5 1.5-4.5-4.5-.5 4-1.5-1-3.5 3.5 1.5z" />
        </svg>
      );
    case "singapore": // Lion
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 6c0-2 2-3 4-3s4 1 4 3c0 .5-.1 1-.3 1.4C19 8 20 10 20 12c0 3-2.5 5-5.5 5.5l.5 3.5H9l.5-3.5C7 17 5 15 5 12c0-2 1-4 2.3-4.6C7.1 7 8 6.5 8 6z M10 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z M14 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z M12 14c-1 0-1.5.5-1.5 1h3c0-.5-.5-1-1.5-1z" />
        </svg>
      );
    case "vietnam": // Lotus
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-3 6-3 9s3 7 3 7 3-4 3-7-3-9-3-9zm-1 9c-2-2-5-3-7-1s0 6 3 7c2 1 4-1 4-6zm2 0c2-2 5-3 7-1s0 6-3 7c-2 1-4-1-4-6zm-8 8c4 2 8 2 12 0" />
        </svg>
      );
    case "thailand": // Elephant
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 13.5c0-1.5-1.2-2.5-2.5-2.5h-5.2c-1 0-1.8-.8-1.8-1.8V8.5c0-1.5-1.2-2.5-2.5-2.5h-4C4 6 2.5 7.5 2.5 9.5v5c0 1 .8 1.8 1.8 1.8h.7l-.5 4.7h2.5l.5-4.7h2.5l-.5 4.7h2.5l.5-4.7h1.5v-2h2.5v2h2v-4.5c1 0 1.5-.5 1.8-1.5l1.2-3.5v5c0 1.5 1.2 2.5 2.5 2.5z" />
        </svg>
      );
    case "fiji": // Palm tree
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20c-1-3-1-7 0-11m0 0C9.5 8 7 6.5 5.5 5m6.5 4c1.5-2 3.5-3 5.5-3.5M12 9c-1-2.5-3-4.5-5.5-5.5M12 9c2-2.5 4.5-4 7.5-4.5M6 21h12" />
        </svg>
      );
    case "indonesia": // Volcano
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20l6-12 3.5 4 2.5-3 8 11H2zm9-12c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
        </svg>
      );
    case "south-africa": // Giraffe
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 21V11.5l2-7.5h1.5v1.5l-1.5 6h1v5H19v4.5 M8.5 21v-7.5c0-1.5 1-2.5 2.5-2.5h2l-2.5-6h-1v-2h-1v2h-1v1.5c0 .5-.5 1-1 1h-1.5v3.5l1.5 4v6.5" />
        </svg>
      );
    case "usa": // Statue of Liberty
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 21V9.5m0 0L9.5 7h5L12 9.5z M12 6.5l.5-2h-1l.5 2z M10 7.5l-1.5-1.5M14 7.5l1.5-1.5M8.5 9.5l-2-1M15.5 9.5l2-1" />
        </svg>
      );
    case "england": // Crown
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l2-9 4 4 4-6 4 6 4-4 2 9H2z M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      );
    case "ireland": // Shamrock
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.5-2.5-4-2.5-4 0 0 2 2 3 4 4.5c2-1.5 4-2.5 4-4.5 0-2.5-2.5-2.5-4 0M12 12c-2.5 1.5-2.5 4 0 4 2 0 3-2 4.5-4c-1.5-2-2.5-3-4.5-4M12 12c2.5-1.5 2.5-4 0-4-2 0-3 2-4.5 4c1.5 2 2.5 3 4.5 4M12 16v5" />
        </svg>
      );
    case "scotland": // Castle
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18v-8l-2-2v-3h-2v3h-2v-3h-2v3h-2v-3H9v3H7v-3H5v3l-2 2v8z M10 21v-4a2 2 0 0 1 4 0v4" />
        </svg>
      );
    case "nz": // Kiwi Bird
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14.5c0 2-1.8 3.5-4 3.5h-4.5c-2.5 0-4.5-2-4.5-4.5v-1c0-2.2 1.8-4 4-4h1.5l1-2.5h1.5v2.5c1.8 0 3.2 1.5 3.2 3.2v.3L22 10.5M7 17.5l-1.5 3.5 M13 18l.5 3" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m0 0l-3-3m3 3l3-3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}



export default function TravelDeals() {
  const [selectedCountry, setSelectedCountry] = useState("Australia");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="bg-white pt-8 pb-8 px-4 w-full overflow-hidden">
      <div className="w-full mx-auto flex flex-col gap-10">

        {/* Header Block */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto relative z-40">
          <h2 className="text-[38px] md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-[1.3] select-none flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-5">
            <span>Best deals in</span>
            <span className="relative inline-flex items-center">
              {/* Attached Grey Chip */}
              <span className="absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 text-[8.5px] font-bold tracking-wider text-neutral-500 uppercase bg-white border border-neutral-200/80 px-2.5 py-0.5 rounded-full whitespace-nowrap leading-none shadow-sm pointer-events-none z-10">
                Select country
              </span>
              <span
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-[#005840] cursor-pointer border-2 border-[#005840]/15 rounded-full px-5 py-0.5 bg-[#ecf0ef]/20 hover:bg-[#ecf0ef]/40 hover:border-[#005840]/30 inline-flex items-center gap-1.5 relative whitespace-nowrap active:scale-[0.97] transition-all duration-200"
              >
                {selectedCountry}
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"} inline-block ml-0.5 text-[#005840]`}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-[14px] text-neutral-500 font-normal leading-relaxed">
            Explore our travel packages for every traveler. Whether a beach getaway, mountain trek, or city exploration, we have something special!
          </p>

          <AnimatePresence>
            {dropdownOpen && (
              <>
                {/* Backdrop overlay to close dropdown */}
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setDropdownOpen(false)}
                />

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[95vw] max-w-[1280px] z-50">
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-white rounded-[32px] shadow-[0_45px_90px_-15px_rgba(0,88,64,0.12),0_25px_60px_-10px_rgba(0,0,0,0.08)] p-8 w-full"
                  >
                    <ShineBorder borderWidth={2} duration={8} borderRadius={32} shineColor={["#005840", "#bfff00", "#a2d2c7"]} />
                    <h4 className="text-[13px] font-semibold text-neutral-400 tracking-[0.18em] uppercase mb-5 text-center relative z-10">
                      Select Destination Country
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 relative z-10">
                      {countriesList.map((country) => {
                        const isSelected = selectedCountry === country.name;
                        return (
                          <div
                            key={country.id}
                            className={`group relative p-5 rounded-2xl border flex flex-col justify-center items-center gap-1.5 transition-all duration-200 ${
                              isSelected
                                ? "border-[#005840] bg-[#005840]/5 shadow-[0_8px_24px_rgba(0,88,64,0.08)] ring-1 ring-[#005840]/20 cursor-pointer"
                                : "border-neutral-200 bg-white hover:border-[#005840] hover:bg-[#005840]/5 hover:shadow-[0_8px_20px_rgba(0,88,64,0.06)] cursor-pointer active:scale-98"
                            }`}
                            onClick={() => {
                              if (country.isAvailable) {
                                setSelectedCountry(country.name);
                                setDropdownOpen(false);
                              }
                            }}
                          >
                            {country.isAvailable && (
                              <span className={`absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#005840] ${isSelected ? "ring-2 ring-emerald-200" : "animate-pulse opacity-60"}`} />
                            )}
                            
                            {getCountryIcon(
                              country.id,
                              `w-7 h-7 mb-1 transition-transform duration-300 ${
                                isSelected
                                  ? "text-[#005840] scale-110"
                                  : "text-[#005840]/70 group-hover:scale-110"
                              }`
                            )}

                            <span className="text-[15px] font-semibold tracking-wide text-[#005840]">
                              {country.name}
                            </span>
                            {!country.isAvailable && (
                              <span className="text-[9.5px] font-bold tracking-wider uppercase text-neutral-500 bg-neutral-100 py-0.5 px-2.5 rounded-full mt-1">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">

          {/* Left Column: Big Feature Card */}
          <div className="w-full lg:w-[40%] min-h-[550px] lg:min-h-auto h-[600px] bg-[#e8f2ee] rounded-[28px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_0_20px_rgba(0,88,64,0.18),0_10px_25px_rgba(0,88,64,0.12)] transition-all duration-300 group cursor-pointer">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
                alt="Tropical nature beach"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* Featured Text */}
              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-[32px] md:text-[36px] font-semibold text-white leading-[1.2] tracking-tight">
                  Enjoy the Mesmerizing Beauty of Nature
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Deals Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {australiaDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-[#e8f2ee] rounded-[28px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_0_20px_rgba(0,88,64,0.18),0_10px_25px_rgba(0,88,64,0.12)] transition-all duration-300 flex flex-col gap-4 group cursor-pointer"
              >
                {/* Deal Image Container */}
                <div className="w-full h-[220px] rounded-[20px] overflow-hidden relative">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Deal Info */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16.5px] font-semibold text-[#005840] tracking-tight leading-snug group-hover:text-[#004b36] transition-colors duration-200 px-1">
                    {deal.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
