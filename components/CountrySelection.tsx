"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ShineBorder } from "@/registry/magicui/shine-border";
import { useCountry } from "@/context/CountryContext";

interface Deal {
  id: string;
  title: string;
  description: string;
  image: string;
}

const dealsData: Record<string, Deal[]> = {
  "Australia": [
    {
      id: "aus-1",
      title: "Gold Coast",
      description: "Famous for its sunny subtropical climate, surfing beaches, and theme parks.",
      image: "/australia-country-selection/gold-coast_converted.avif"
    },
    {
      id: "aus-2",
      title: "Sunshine Coast",
      description: "Stunning sandy beaches, pristine waterways, and lush hinterland.",
      image: "/australia-country-selection/sunshine-coast.avif"
    },
    {
      id: "aus-3",
      title: "Sydney",
      description: "Australia's largest city, famous for its harbourfront Opera House.",
      image: "/australia-country-selection/sydney-opera-house-with-sea_converted.avif"
    },
    {
      id: "aus-4",
      title: "Melbourne",
      description: "A dynamic metropolis known for its cultural heritage and laneway bars.",
      image: "/australia-country-selection/melbourne_converted.avif"
    }
  ],
  "Canada": [
    {
      id: "can-1",
      title: "Banff National Park & Lake Louise",
      description: "Canada's oldest national park, famed for its surreal, turquoise-colored glacial lakes.",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "can-2",
      title: "Niagara Falls",
      description: "One of the world's most powerful and famous waterfalls straddling the border.",
      image: "https://images.unsplash.com/photo-1542456485-67372202ea66?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "can-3",
      title: "CN Tower & Toronto Skyline",
      description: "This 553-meter-high communications and observation tower offers panoramic views.",
      image: "https://images.unsplash.com/photo-1517999824-c13f69ddce29?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "can-4",
      title: "Old Quebec City",
      description: "A UNESCO World Heritage treasure featuring fortified colonial walls.",
      image: "https://images.unsplash.com/photo-1519996503892-db4d348a27d1?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

import { countriesList, getCountryIcon } from "@/data/countries";

export default function CountrySelection() {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section id="deals" className="bg-transparent pt-8 pb-8 px-4 w-full overflow-hidden">
      <div className="w-full mx-auto flex flex-col gap-10">

        {/* Header Block */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto relative z-40">
          <h2 className="text-[38px] md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-[1.3] select-none flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-5">
            <span>Great Deals in</span>

            <span className="relative inline-flex items-center">
              <span className="absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 text-[8.5px] font-bold tracking-wider text-neutral-500 uppercase bg-white border border-neutral-200/80 px-2.5 py-0.5 rounded-full whitespace-nowrap leading-none shadow-sm pointer-events-none z-10">
                Select country
              </span>

              <span
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-[#2350AA] cursor-pointer border-2 border-[#2350AA]/15 rounded-full px-5 py-0.5 bg-[#EDF1F7]/20 hover:bg-[#EDF1F7]/40 hover:border-[#2350AA]/30 inline-flex items-center gap-1.5 relative whitespace-nowrap active:scale-[0.97] transition-all duration-200"
              >
                {selectedCountry}
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"} inline-block ml-0.5 text-[#2350AA]`}
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
            Whether a beach getaway, mountain trek, or city exploration, we have something special for everything! Unlock more in the App
          </p>

          <AnimatePresence>
            {dropdownOpen && (
              <>
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
                    className="relative bg-white rounded-[32px] shadow-[0_45px_90px_-15px_rgba(35,80,170,0.12),0_25px_60px_-10px_rgba(0,0,0,0.08)] p-8 w-full"
                  >
                    <ShineBorder borderWidth={2} duration={8} borderRadius={32} shineColor={["#2350AA", "#bfff00", "#A6C4F4"]} />
                    <h4 className="text-[13px] font-semibold text-neutral-400 tracking-[0.18em] uppercase mb-5 text-center relative z-10">
                      Select Destination Country
                    </h4>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">

          <div className="w-full lg:w-[40%] min-h-[550px] h-[600px] bg-[#E8EEF8] rounded-[28px] p-4">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <Image
                src="/australia-country-selection/1-main-Australia_converted.avif"
                alt="Australia destination"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-[32px] md:text-[36px] font-semibold text-white leading-[1.2] tracking-tight">
                  Enjoy the Mesmerizing Beauty of Nature
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {(dealsData[selectedCountry] || dealsData["Australia"]).map((deal) => (
              <div key={deal.id} className="bg-[#E8EEF8] rounded-[28px] p-4">
                <div className="w-full h-[220px] rounded-[20px] overflow-hidden relative">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="text-[16.5px] font-semibold text-[#2350AA] px-1 mt-2">
                  {deal.title}
                </h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}