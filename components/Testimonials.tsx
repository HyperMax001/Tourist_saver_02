"use client";

import { useRef } from "react";

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#ffa726"
        stroke="#ffa726"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ))}
  </div>
);

const PlayButton = () => (
  <div className="w-12 h-9 bg-black/60 rounded-[12px] flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg transition-transform duration-200 group-hover:scale-110">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-0.5"
    >
      <path d="M8 5V19L19 12L8 5Z" />
    </svg>
  </div>
);

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
      const cardWidth = 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap; // 324px

      let scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      // Loop back to start if we scroll right at the end
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 15) {
        scrollTo = 0;
      }

      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="relative w-full py-12 px-4 md:px-8 overflow-hidden bg-white select-none">
      <div className="max-w-[1600px] mx-auto w-full bg-[#f0f7f4] rounded-[48px] py-20 flex flex-col gap-16 shadow-sm relative overflow-hidden">

        {/* Title Header (Centered and aligned to standard grid width) */}
        <div className="max-w-[1200px] mx-auto px-8 text-center flex flex-col gap-1.5 z-10 w-full">
          <h3 className="text-[38px] md:text-[44px] font-semibold text-[#005840] tracking-tight leading-tight flex flex-col items-center gap-1 w-full">
            <div className="flex items-center justify-center gap-x-3 flex-wrap">
              <div className="relative inline-block">
                <span className="font-handwritten text-[58px] md:text-[66px] font-normal bg-[#d1f843] text-[#005840] px-4 py-1.5 rounded-[16px] inline-block transform -rotate-1 leading-none shadow-[0_4px_12px_rgba(209,248,67,0.15)]">
                  Loved
                </span>
                {/* Larger decorative heart (top-left) */}
                <div className="absolute -top-6 -left-3 transform -rotate-12 animate-pulse z-20">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#d1f843"
                    stroke="#005840"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                {/* Smaller decorative heart (top-left, staggered) */}
                <div className="absolute -top-2 -left-8 transform rotate-12 animate-bounce z-20">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#d1f843"
                    stroke="#005840"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>
              <span>by explorers everywhere</span>
            </div>
            <div>
              in{" "}
              <span className="relative inline-block">
                <span className="underline decoration-[#d1f843] decoration-[6px] underline-offset-4">
                  Australia!
                </span>
                {/* Larger decorative heart (top-right) */}
                <div className="absolute -top-4 -right-2 transform rotate-12 animate-pulse z-20">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#d1f843"
                    stroke="#005840"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                {/* Smaller decorative heart (top-right, staggered) */}
                <div className="absolute -top-1 -right-5 transform -rotate-12 animate-bounce z-20">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#d1f843"
                    stroke="#005840"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </span>
            </div>
          </h3>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-[1012px] md:max-w-[1076px] mx-auto w-full flex items-center z-10">

          <div
            ref={scrollContainerRef}
            className="w-full flex gap-6 overflow-x-auto scrollbar-none snap-x snap-proximity py-4 scroll-smooth"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {/* Left Spacer to create gap on the left side */}
            <div className="flex-shrink-0 w-8 md:w-16" />

            {/* Column 1: Video Card (Courtney Allan) */}
            <div className="flex-shrink-0 w-[300px] h-[500px] rounded-[32px] overflow-hidden relative group snap-start cursor-pointer border-2 border-[#005840]/30">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=500&q=80"
                alt="Courtney Allan hiking"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

              {/* User Info Header */}
              <div className="absolute top-6 left-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Courtney Allan"
                  className="w-12 h-12 rounded-full border-2 border-white/40 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-white leading-tight">Courtney Allan</span>
                  <span className="text-[13px] font-handwritten font-semibold text-white/80 tracking-[0.1em] uppercase mt-0.5">Hitchhiker</span>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
            </div>

            {/* Column 2: Stacked Text Cards (Conor & Jenny) */}
            <div className="flex-shrink-0 w-[300px] h-[500px] flex flex-col gap-6 snap-start">
              {/* Conor's Review */}
              <div className="bg-white rounded-[24px] p-5 flex flex-col gap-2 flex-1 justify-start border-2 border-[#005840]/30">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-bold text-[#005840] leading-tight">Amazing Gold Coast deals</h4>
                  <span className="text-[13px] font-handwritten font-semibold text-neutral-400 tracking-[0.05em] uppercase">CONOR, MARCH 9 2026</span>
                </div>
                <StarRating />
                <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
                  I love this app! It's perfect for finding the best experiences when we visited the Gold Coast. The theme park discounts were very good and really nice to have.
                </p>
              </div>

              {/* Jenny's Review */}
              <div className="bg-white rounded-[24px] p-5 flex flex-col gap-2 flex-1 justify-start border-2 border-[#005840]/30">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-bold text-[#005840] leading-tight">Must-have for Brisbane</h4>
                  <span className="text-[13px] font-handwritten font-semibold text-neutral-400 tracking-[0.05em] uppercase">JENNY, MARCH 24 2026</span>
                </div>
                <StarRating />
                <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
                  I love the app, it shows you all the great spots to eat in Brisbane during the day and you can easily redeem the coupons. Great to use on our weekend trip!
                </p>
              </div>
            </div>

            {/* Column 3: Video Card (Alex Hubin) */}
            <div className="flex-shrink-0 w-[300px] h-[500px] rounded-[32px] overflow-hidden relative group snap-start cursor-pointer border-2 border-[#005840]/30">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80"
                alt="Alex Hubin wave roadtrip"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

              {/* User Info Header */}
              <div className="absolute top-6 left-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Alex Hubin"
                  className="w-12 h-12 rounded-full border-2 border-white/40 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-white leading-tight">Alex Hubin</span>
                  <span className="text-[13px] font-handwritten font-semibold text-white/80 tracking-[0.1em] uppercase mt-0.5">Adventurer</span>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
            </div>

            {/* Column 4: Stacked Text Cards (Rachel & Deborah) */}
            <div className="flex-shrink-0 w-[300px] h-[500px] flex flex-col gap-6 snap-start">
              {/* Rachel's Review */}
              <div className="bg-white rounded-[24px] p-5 flex flex-col gap-2 flex-1 justify-start border-2 border-[#005840]/30">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-bold text-[#005840] leading-tight">Saved money in Sydney</h4>
                  <span className="text-[13px] font-handwritten font-semibold text-neutral-400 tracking-[0.05em] uppercase">RACHEL, MARCH 15 2026</span>
                </div>
                <StarRating />
                <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
                  I've been using this app for months now. Easy peasy to find great deals around the Sydney Opera House. We go on many family trips and this saved us so much!
                </p>
              </div>

              {/* Deborah's Review */}
              <div className="bg-white rounded-[24px] p-5 flex flex-col gap-2 flex-1 justify-start border-2 border-[#005840]/30">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-bold text-[#005840] leading-tight">Perfect for Melbourne</h4>
                  <span className="text-[13px] font-handwritten font-semibold text-neutral-400 tracking-[0.05em] uppercase">DEBORAH, MARCH 18 2026</span>
                </div>
                <StarRating />
                <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
                  Just completed our trip to Melbourne using this. Totally amazing. It helps me discover new cafes in the laneways and stops me wasting time. Highly recommend!
                </p>
              </div>
            </div>

            {/* Column 5: Video Card (Marcus Vance) */}
            <div className="flex-shrink-0 w-[300px] h-[500px] rounded-[32px] overflow-hidden relative group snap-start cursor-pointer border-2 border-[#005840]/30">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=500&q=80"
                alt="Marcus Vance snowboarding"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

              {/* User Info Header */}
              <div className="absolute top-6 left-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                  alt="Marcus Vance"
                  className="w-12 h-12 rounded-full border-2 border-white/40 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-white leading-tight">Marcus Vance</span>
                  <span className="text-[13px] font-handwritten font-semibold text-white/80 tracking-[0.1em] uppercase mt-0.5">Snowboarder</span>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
            </div>

            {/* Column 6: Stacked Text Cards (Liam & Sophia) */}
            <div className="flex-shrink-0 w-[300px] h-[500px] flex flex-col gap-6 snap-start">
              {/* Liam's Review */}
              <div className="bg-white rounded-[24px] p-5 flex flex-col gap-2 flex-1 justify-start border-2 border-[#005840]/30">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-bold text-[#005840] leading-tight">Great Australian deals</h4>
                  <span className="text-[13px] font-handwritten font-semibold text-neutral-400 tracking-[0.05em] uppercase">LIAM, MARCH 28 2026</span>
                </div>
                <StarRating />
                <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
                  This app has completely changed how we plan our Australian holidays. Extremely easy to use in Sydney and the Gold Coast. A must-have for local deals!
                </p>
              </div>

              {/* Sophia's Review */}
              <div className="bg-white rounded-[24px] p-5 flex flex-col gap-2 flex-1 justify-start border-2 border-[#005840]/30">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-bold text-[#005840] leading-tight">Highly recommend</h4>
                  <span className="text-[13px] font-handwritten font-semibold text-neutral-400 tracking-[0.05em] uppercase">SOPHIA, APRIL 2 2026</span>
                </div>
                <StarRating />
                <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
                  Simple to use, beautiful interface, and the savings in Brisbane and Melbourne are fantastic. I recommend it to all my friends who travel around Australia.
                </p>
              </div>
            </div>

            {/* Right Spacer to create gap on the right side */}
            <div className="flex-shrink-0 w-8 md:w-16" />

          </div>

          {/* Right Fade-out Gradient Overlay */}
          <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-[#f0f7f4] via-[#f0f7f4]/80 to-transparent pointer-events-none z-10" />

          {/* Next Button Navigation Overlay */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-6 z-20 w-10 h-10 rounded-full bg-[#0d2137] hover:bg-[#1a3554] flex items-center justify-center shadow-lg border border-neutral-700 transition-colors duration-150 focus:outline-none"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
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
