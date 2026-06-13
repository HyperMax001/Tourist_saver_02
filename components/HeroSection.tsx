"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const countries = [
  {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=80",
    tagline: "Alpine Heights"
  },
  {
    name: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
    tagline: "Eastern Sunrise"
  },
  {
    name: "Italy",
    image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1600&q=80",
    tagline: "Amalfi Breeze"
  },
  {
    name: "Iceland",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80",
    tagline: "Northern Fire"
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    tagline: "Parisian Glow"
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80",
    tagline: "Rocky Valleys"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
    tagline: "Outback Trails"
  },
  {
    name: "Norway",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80",
    tagline: "Fjord Magic"
  },
  {
    name: "Egypt",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1600&q=80",
    tagline: "Ancient Pyramids"
  },
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80",
    tagline: "Neon Skylines"
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotating timer
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 6000);
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
    <section className="w-full h-screen p-4 bg-[#ecf0ef] select-none relative">
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
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${countries[activeIndex].image})` }}
            />
          </AnimatePresence>
          {/* Soft Shadow Overlays */}
          <div className="absolute inset-0 bg-black/25 z-0" />
          <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-black/30 to-transparent z-0" />
        </div>

        {/* Center Content block */}
        <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center gap-4 mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[32px] md:text-[50px] xl:text-[58px] font-semibold text-white leading-[1.2] tracking-tight max-w-[850px] drop-shadow-md"
          >
            Travel Smarter, Explore<br />Further Create Memories<br />That Last.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[14px] md:text-[15.5px] text-white/95 font-normal max-w-[620px] leading-relaxed drop-shadow-sm"
          >
            From breathtaking landscapes to hidden local gems, we help you plan seamless journeys tailored to your style, budget, and pace.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-6 py-2.5 mt-1 bg-white text-black font-semibold text-[13.5px] rounded-full hover:bg-[#005840] hover:text-white active:scale-98 transition-all duration-300 shadow-md"
          >
            Explore Destinations
          </motion.button>
        </div>

        {/* Bottom Right Cards Selector */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex gap-2 w-[calc(100%-32px)] max-w-[1550px] overflow-x-auto scrollbar-none justify-start lg:justify-center items-center py-2 px-4 bg-white/10 dark:bg-black/25 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.18)] rounded-[20px]">
          {countries.map((country, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={country.name}
                onClick={() => handleCardClick(idx)}
                className={`relative w-[105px] md:w-[136px] h-[50px] md:h-[60px] rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                  isActive ? "scale-103" : "hover:scale-102 hover:opacity-90"
                }`}
              >
                {/* Thumbnail Image */}
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
                {/* Card Title Overlay */}
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center p-2 transition-colors duration-300 hover:bg-black/25">
                  <span className="text-white font-semibold text-[12px] md:text-[14px] leading-tight text-center tracking-wide">
                    {country.name}
                  </span>
                </div>

                {/* Local blur fade active border */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 border-2 border-white rounded-[8px] pointer-events-none z-20 shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
