"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ActivitySectionReplace() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      if (bgVideoRef.current) {
        bgVideoRef.current.play().catch(e => console.error("Video play failed:", e));
      }

      // Pop up the video after 3.5 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={bgVideoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/92839-638016611_medium.mp4"
        muted
        playsInline
        loop
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-[40px] sm:text-[54px] md:text-[72px] lg:text-[88px] font-bold text-white tracking-tight leading-none drop-shadow-xl">
          Experience <span className="text-[#93C5FD]">TouristSaver</span>
        </h2>
      </div>

      {/* Popup Video Player */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute z-50 w-fit max-w-[1400px] rounded-[20px] md:rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-1 ring-[#2350AA]/10 bg-black flex flex-col justify-center"
          >
            {/* Video Player */}
            <video
              className="w-auto h-auto max-h-[80vh] max-w-full object-contain"
              src="/touristsaver-member-web-2.1-1.mp4"
              autoPlay
              controls
              playsInline
              loop
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
