"use client";

import React from 'react';
import FlowingMenu from './FlowingMenu2';

const demoItems = [
  { link: '#', text: 'Sydney Opera House', image: '/activity/low-quality-sydney_opera_house.avif' },
  { link: '#', text: 'Surfers Paradise Beach', image: '/activity/low-quality-surfers_paradise_beach.avif' },
  { link: '#', text: 'Melbourne Bridge', image: '/activity/low-quality-melbourne_bridge.avif' },
  { link: '#', text: 'Fed Square', image: '/activity/low-quality-fed_square.avif' },
  { link: '#', text: 'SkyPoint Observation Deck', image: '/activity/low-quality-skypoint_observation_deck.avif' },
  { link: '#', text: 'Sydney City', image: '/activity/low-quality-sydney-city.avif' },
  { link: '#', text: 'Gold Coast Beaches', image: '/activity/low-quality-visit_gold_coast_beaches.avif' },
  { link: '#', text: 'Warner Bros. Movie World', image: '/activity/low-quality-warner_bros_movie_world.avif' }
];

export default function ActivitySectionReplace() {
  return (
    <section className="bg-[#F4F8FD] w-full relative z-10 pt-12 lg:pt-20 pb-12 flex flex-col h-screen">
      <div className="text-center px-4 mb-6 flex-shrink-0">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-black text-[#1C1816] uppercase tracking-tight leading-[1.0] italic">
          Experience <span className="text-[#2350AA]">Australia</span>
        </h2>
      </div>
      
      <div className="flex-1 w-full overflow-hidden relative">
        <FlowingMenu 
          items={demoItems}
          speed={15}
          textColor="#1C1816"
          bgColor="#F4F8FD"
          marqueeBgColor="#2350AA"
          marqueeTextColor="#FFFFFF"
          borderColor="#2350AA"
        />
      </div>
    </section>
  );
}
