"use client";

import Link from "next/link";

interface Deal {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
}

const deals: Deal[] = [
  {
    id: "raja-ampat",
    title: "Raja Ampat, Indonesia",
    description: "A comprehensive 10-day travel guide designed to explore the gems and attractions.",
    priceRange: "$640-$950",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "nihiwatu",
    title: "Nihiwatu, Indonesia",
    description: "A comprehensive 8-day travel guide designed to explore the gems and attractions.",
    priceRange: "$840-$950",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "gili-islands",
    title: "Gili Islands, Indonesia",
    description: "A comprehensive 12-day travel guide designed to explore the gems and attractions.",
    priceRange: "$750-$1200",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "nusa-penida",
    title: "Nusa Penida, Indonesia",
    description: "A comprehensive 8-day travel guide designed to explore the gems and attractions.",
    priceRange: "$840-$990",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80"
  }
];

const capsules = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=60&h=40&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=60&h=40&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=60&h=40&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=60&h=40&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=60&h=40&q=80"
];

export default function TravelDeals() {
  return (
    <section className="bg-white py-20 px-8 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
        
        {/* Header Block */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-semibold text-[#005840] tracking-tight leading-tight">
            Discover the Best Travel<br />Deals of the Month
          </h2>
          <p className="text-[14px] text-neutral-500 font-normal leading-relaxed">
            Explore our travel packages for every traveler. Whether a beach getaway, mountain trek, or city exploration, we have something special!
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full mt-6">
          
          {/* Left Column: Big Feature Card */}
          <div className="w-full lg:w-[40%] min-h-[550px] lg:min-h-auto h-[600px] rounded-[32px] overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
              alt="Tropical nature beach"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

            {/* Featured Text */}
            <div className="absolute bottom-24 left-8 right-8">
              <h3 className="text-[38px] md:text-[42px] font-medium text-white leading-[1.15] tracking-tight">
                Enjoy the<br />Mesmerizing<br />Beauty of Nature
              </h3>
            </div>

            {/* Capsule Bar */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md py-3 px-4 rounded-full flex justify-between items-center gap-2 border border-white/20 shadow-sm">
              {capsules.map((cap, idx) => (
                <div
                  key={idx}
                  className="w-[48px] h-[30px] rounded-full overflow-hidden border border-white/50 shadow-sm flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-150"
                >
                  <img src={cap} alt={`thumbnail-${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2x2 Deals Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-8">
            {deals.map((deal) => (
              <div key={deal.id} className="flex flex-col gap-4 group">
                {/* Deal Image Container */}
                <div className="w-full h-[220px] rounded-[24px] overflow-hidden relative shadow-md">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Deal Info */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-[19px] font-semibold text-black tracking-tight leading-tight">
                    {deal.title}
                  </h4>
                  <p className="text-[13.5px] text-neutral-500 font-normal leading-relaxed">
                    {deal.description}
                  </p>
                </div>

                {/* Deal Action Bar */}
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[17px] font-bold text-black tracking-tight">
                    {deal.priceRange}
                  </span>
                  <button className="px-5 py-2 text-[13.5px] font-semibold bg-white border border-neutral-200 text-black rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-150 flex items-center gap-1.5 shadow-sm">
                    Book Now
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9 6L1 11"
                        stroke="black"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
