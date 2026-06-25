"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const sliderData = [
  { 
    type: "slogan",
    name: "Discover More, Spend Less.",
  },
  { name: "Endless Experiences", image: "/slider_images/GC 7daypass.webp", tagline: "With the 7-Day Pass" },
  { name: "Casual Dining", image: "/slider_images/GC casual_dining.webp", tagline: "Enjoy Great Food" },
  { name: "Native Wildlife", image: "/slider_images/GC currumbin_creature.webp", tagline: "Get Up Close" },
  { name: "Vibrant Nature", image: "/slider_images/GC currumbin_parrot.webp", tagline: "Colourful Encounters" },
  { name: "Thrilling Adventures", image: "/slider_images/GC jetboat.webp", tagline: "High-Speed Jetboat" },
  { name: "Family Fun", image: "/slider_images/GC kangaroo_with_kids.webp", tagline: "Kangaroo Encounters" },
  { name: "Learn & Play", image: "/slider_images/GC kidssurfing.webp", tagline: "Catch the Waves" },
  { name: "Ocean Life", image: "/slider_images/GC marine.webp", tagline: "Discover Marine Secrets" },
  { name: "Dolphin Magic", image: "/slider_images/GC seaworld_dolphins.webp", tagline: "Unforgettable Moments" },
  { name: "Splash & Play", image: "/slider_images/GC wetnwild.webp", tagline: "Water Park Fun" },
  { name: "Fun in the Nature", image: "/slider_images/SC kangaroo and kids.webp", tagline: "Wildlife with the Family" },
  { name: "Wild Encounters", image: "/slider_images/australiazoo.webp", tagline: "Australia Zoo Adventures" },
  { name: "Action & Dirt", image: "/slider_images/brisbaneQuadbikesTour.webp", tagline: "Quad Bike Tours" },
  { name: "Dine by the Water", image: "/slider_images/brisbane_dining_Tangalooma.webp", tagline: "Sunset Views" },
  { name: "Sky High", image: "/slider_images/byron balloon.webp", tagline: "Peaceful Balloon Rides" },
  { name: "Ocean Explorers", image: "/slider_images/byron bay kayak.webp", tagline: "Sea Kayaking" },
  { name: "Dolphin Spotting", image: "/slider_images/byron kayak dolphin.webp", tagline: "Kayak Adventures" },
  { name: "Majestic Giants", image: "/slider_images/byron_whale_watching.webp", tagline: "Whale Watching" },
  { name: "Sunrise Magic", image: "/slider_images/byronballoning.webp", tagline: "Hot Air Ballooning" },
  { name: "Let Go", image: "/slider_images/dreamworld.webp", tagline: "and have fun" },
  { name: "Adrenaline Rush", image: "/slider_images/gcjetski-trip.webp", tagline: "Jetski Safari" },
  { name: "Water Thrills", image: "/slider_images/gcjetski-trip2.webp", tagline: "Ride the Waves" },
  { name: "Fast & Furious", image: "/slider_images/gcjetski.webp", tagline: "Jetski Fun" },
  { name: "Travel in Style", image: "/slider_images/goldLimo.webp", tagline: "Luxury Transport" },
  { name: "Tasty Bites", image: "/slider_images/guzmanYgomez1.webp", tagline: "Mexican Dining" },
  { name: "Theme Parks", image: "/slider_images/movieWorld-ride.webp", tagline: "Thrilling Rides" },
  { name: "Sea World", image: "/slider_images/seaworld-dinner.webp", tagline: "Buffet Dinner Cruise" },
  { name: "Underwater Wonders", image: "/slider_images/sunshinecoastaquarium.webp", tagline: "Explore the Aquarium" },
  { name: "Spectacular Shows", image: "/slider_images/sunshinecoastaquariumshow.webp", tagline: "Marine Life Displays" }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotating timer
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    startTimer(); // Reset the timer on manual click
  };

  return (
    <section id="hero" className="w-full h-screen p-4 bg-[#EDF1F7] select-none relative">
      <div className="w-full h-full rounded-[16px] overflow-hidden relative flex flex-col justify-center items-center text-center px-8 shadow-sm">

        {/* Background Transitions */}
        <div className="absolute inset-0 w-full h-full bg-black z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(15px)", scale: 1.04 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(15px)", scale: 1.04 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {sliderData[activeIndex].type === "slogan" ? (
                <div className="absolute inset-0 w-full h-full bg-[#7B1113]" />
              ) : (
                <Image
                  src={sliderData[activeIndex].image!}
                  alt={`${sliderData[activeIndex].name} landscape`}
                  fill
                  sizes="100vw"
                  priority={true}
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Invisible Preload for the NEXT image to prevent lag on slide change */}
          <div className="hidden">
            {sliderData[(activeIndex + 1) % sliderData.length].image && (
              <Image
                src={sliderData[(activeIndex + 1) % sliderData.length].image!}
                alt="preload next"
                width={1}
                height={1}
                priority={true}
                unoptimized
              />
            )}
          </div>

          {/* Soft Shadow Overlays */}
          <div className="absolute inset-0 bg-black/25 z-0" />
          <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-black/30 to-transparent z-0" />
        </div>

        {/* Center Content block */}
        <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center gap-4 mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2 md:gap-4"
            >
              <h1 className={`font-bold text-white tracking-tight leading-[1.1] text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${sliderData[activeIndex].type === "slogan" ? "text-[52px] md:text-[80px] xl:text-[100px] max-w-[900px]" : "text-[42px] md:text-[64px] xl:text-[76px] max-w-[850px]"}`}>
                {sliderData[activeIndex].name}
              </h1>
              {sliderData[activeIndex].tagline && (
                <div className="bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 shadow-lg mt-2">
                  <p className="text-[16px] md:text-[22px] text-white font-medium drop-shadow-md text-center">
                    {sliderData[activeIndex].tagline}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {sliderData[activeIndex].type !== "slogan" && (
            <motion.a
              href="https://touristsaver.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group px-8 py-3.5 mt-2 bg-white text-[#2350AA] font-semibold text-[15px] rounded-full hover:bg-[#E8EEF8] hover:shadow-[0_10px_30px_rgba(35,80,170,0.12)] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Download App</span>
              <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>
          )}
        </div>

        {/* Left & Right Navigation Arrows */}
        <button
          onClick={() => {
            setActiveIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
            startTimer();
          }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white/75 hover:text-white transition-all duration-300 active:scale-95 group"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={() => {
            setActiveIndex((prev) => (prev + 1) % sliderData.length);
            startTimer();
          }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-white/75 hover:text-white transition-all duration-300 active:scale-95 group"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Bottom Dotted Pagination */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center justify-center py-1.5 px-3 bg-white/10 dark:bg-black/25 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-full">
          {sliderData.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${isActive ? "w-4 bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]" : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

