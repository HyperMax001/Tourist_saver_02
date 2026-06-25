"use client";
import React from 'react';

export default function ActivitySectionReplace() {
  return (
    <section className="w-full relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/92839-638016611_medium.mp4"
        autoPlay
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
    </section>
  );
}
