"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

import BrandText from './BrandText';

export default function ActivitySectionReplace() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const popupVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (popupVideoRef.current) {
      popupVideoRef.current.play();
      setIsPlaying(true);
    }
  };

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
      <video
        ref={bgVideoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/92839-638016611_medium.mp4"
        muted
        playsInline
        loop
      />

      {/* Preload popup video so it doesn't buffer */}
      <video 
        src="/touristsaver-member-web-2.1-1.mp4#t=1.0" 
        preload="auto" 
        className="hidden" 
        muted 
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-[40px] sm:text-[54px] md:text-[72px] lg:text-[88px] font-bold text-white tracking-tight leading-none drop-shadow-xl flex items-center justify-center gap-2">
          Experience <BrandText withSpace={false} className="drop-shadow-[0_4px_4px_rgba(255,255,255,0.5)]" />
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
            {/* Video Player Container */}
            <div className="relative group">
              <video
                ref={popupVideoRef}
                className="w-auto h-auto max-h-[80vh] max-w-full object-contain"
                src="/touristsaver-member-web-2.1-1.mp4#t=1.0"
                controls
                playsInline
                loop
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <div 
                  className="hidden md:flex absolute inset-0 items-center justify-center bg-black/20 cursor-pointer transition-opacity hover:bg-black/30"
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-xl hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
