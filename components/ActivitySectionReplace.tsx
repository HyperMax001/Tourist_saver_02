"use client";
import React from 'react';

export default function ActivitySectionReplace() {
  return (
    <section className="bg-[#F4F8FD] w-full relative z-10 py-12 lg:py-24 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center px-4 mb-8 md:mb-12">
        <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-semibold text-[#1C1816] tracking-tight leading-[1.0]">
          Experience <span className="text-[#2350AA]">TouristSaver</span>
        </h2>
      </div>

      <div className="w-fit max-w-[1400px] mx-auto rounded-[20px] md:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(35,80,170,0.15)] ring-1 ring-[#2350AA]/10 relative bg-black">
        <video
          className="w-auto h-auto max-h-[80vh] max-w-full object-contain"
          src="/touristsaver-member-web-2.1-1.mp4"
          controls
          autoPlay
          playsInline
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
