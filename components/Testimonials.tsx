"use client";

import { useRef } from "react";

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#ff9800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ))}
  </div>
);

const PlayButton = () => (
  <div className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg transition-transform duration-200 group-hover:scale-110">
    <svg
      width="20"
      height="22"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path d="M8 5V19L19 12L8 5Z" />
    </svg>
  </div>
);

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollAmount = 450;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative w-full py-24 px-8 overflow-hidden bg-cover bg-bottom select-none"
      style={{
        backgroundImage: `linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.75) 40%, rgba(255, 255, 255, 0.1) 100%), url('https://images.unsplash.com/photo-1486873249359-2731bd6dafc7?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16">
        
        {/* Title Header */}
        <div className="text-center flex flex-col gap-1.5 z-10">
          <h3 className="text-[34px] md:text-[40px] font-bold text-[#0d2137] leading-tight tracking-tight">
            Loved by<br />explorers everywhere
          </h3>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full flex items-center z-10">
          
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="w-full flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 py-8"
            style={{ scrollbarWidth: "none" }}
          >
            
            {/* Column 1: Video Card (Courtney Allan) */}
            <div className="flex-shrink-0 w-[340px] h-[480px] rounded-[32px] overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.15)] snap-start cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=500&q=80"
                alt="Courtney Allan hiking"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
              
              {/* User Info Header */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Courtney Allan"
                  className="w-10 h-10 rounded-full border border-white/40 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[14.5px] font-bold text-white leading-tight">Courtney Allan</span>
                  <span className="text-[10px] font-bold text-white/70 tracking-[0.1em] uppercase">Hitchhiker</span>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>

              {/* Brand Text */}
              <span className="absolute bottom-6 right-6 text-[12px] font-black text-white/80 tracking-[0.2em] uppercase">
                Pioneers
              </span>
            </div>

            {/* Column 2: Stacked Text Cards (Conor & Jenny) */}
            <div className="flex-shrink-0 w-[340px] flex flex-col gap-6 snap-start">
              {/* Conor's Review */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-neutral-100 flex-1">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[15.5px] font-bold text-[#0d2137] leading-tight">Perfect for tracking trips</h4>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-[0.05em] uppercase">CONOR, MARCH 9 2026</span>
                </div>
                <StarRating />
                <p className="text-[13.5px] text-neutral-500 leading-relaxed font-normal">
                  I love this app! It's perfect for tracking trips and I've ordered a few of the travel books which are very good quality and really nice to look at.
                </p>
              </div>

              {/* Jenny's Review */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-neutral-100 flex-1">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[15.5px] font-bold text-[#0d2137] leading-tight">Love the app</h4>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-[0.05em] uppercase">JENNY, MARCH 24 2026</span>
                </div>
                <StarRating />
                <p className="text-[13.5px] text-neutral-500 leading-relaxed font-normal">
                  I love the app, it tracks where you've been during the day and you can add your photos and comments later. Great to look back on over the years.
                </p>
              </div>
            </div>

            {/* Column 3: Video Card (Alex Hubin) */}
            <div className="flex-shrink-0 w-[340px] h-[480px] rounded-[32px] overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.15)] snap-start cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80"
                alt="Alex Hubin wave roadtrip"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
              
              {/* User Info Header */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Alex Hubin"
                  className="w-10 h-10 rounded-full border border-white/40 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[14.5px] font-bold text-white leading-tight">Alex Hubin</span>
                  <span className="text-[10px] font-bold text-white/70 tracking-[0.1em] uppercase">Adventurer</span>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>

              {/* Brand Text */}
              <span className="absolute bottom-6 right-6 text-[12px] font-black text-white/80 tracking-[0.2em] uppercase">
                Pioneers
              </span>
            </div>

            {/* Column 4: Stacked Text Cards (Rachel & Deborah) */}
            <div className="flex-shrink-0 w-[340px] flex flex-col gap-6 snap-start">
              {/* Rachel's Review */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-neutral-100 flex-1">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[15.5px] font-bold text-[#0d2137] leading-tight">Easy to use</h4>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-[0.05em] uppercase">RACHEL, MARCH 15 2026</span>
                </div>
                <StarRating />
                <p className="text-[13.5px] text-neutral-500 leading-relaxed font-normal">
                  I've been using this app for months now. Easy peasy to share with family and friends, and we can all view the photos as well now. We go on many trips. Love this!
                </p>
              </div>

              {/* Deborah's Review */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-neutral-100 flex-1">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[15.5px] font-bold text-[#0d2137] leading-tight">Stops me wasting time</h4>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-[0.05em] uppercase">DEBORAH, MARCH 18 2026</span>
                </div>
                <StarRating />
                <p className="text-[13.5px] text-neutral-500 leading-relaxed font-normal">
                  Just completed our first big trip using this. Totally amazing. It helps me remember the route and stops me wasting time posting updates. Highly recommend sharing this link!
                </p>
              </div>
            </div>

          </div>

          {/* Next Button Navigation Overlay */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0d2137] hover:bg-[#1a3554] flex items-center justify-center shadow-lg border border-neutral-700 transition-colors duration-150 focus:outline-none"
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}
