"use client";

// Removed framer-motion imports

const activities = [
  { image: "/activity/sydney_opera_house_converted.avif", title: "Sydney Opera House" },
  { image: "/activity/surfers_paradise_beach_converted.avif", title: "Surfers Paradise Beach" },
  { image: "/activity/melbourne_bridge_converted.avif", title: "Melbourne Bridge" },
  { image: "/activity/fed_square_converted.avif", title: "Fed Square" },
  { image: "/activity/skypoint_observation_deck_converted.avif", title: "SkyPoint Observation Deck" },
  { image: "/activity/sydney-city_converted.avif", title: "Sydney City" },
  { image: "/activity/visit_gold_coast_beaches_converted.avif", title: "Visit Gold Coast Beaches" },
  { image: "/activity/warner_bros_movie_world_converted.avif", title: "Warner Bros. Movie World" },
];

function Card({ activity, index, total }: { activity: any, index: number, total: number }) {
  // Stagger the top position slightly so we see the tops of cards underneath
  const top = `calc(3vh + ${index * 6}px)`;

  const isLast = index === total - 1;

  return (
    <div 
      className={`sticky w-full h-[80vh] flex items-center justify-center ${isLast ? 'mb-0' : 'mb-[80vh]'}`}
      style={{ top }}
    >
      <div 
        className="w-full h-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_-15px_30px_rgba(0,0,0,0.15)] relative"
      >
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-16 transition-opacity">
          <h3 className="text-white text-4xl md:text-7xl font-black uppercase italic tracking-wide drop-shadow-2xl">
            {activity.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function ActivitySection() {
  return (
    <section className="bg-[#F4F8FD] w-full relative z-10 pt-20 lg:pt-32 pb-32">
      <div className="text-center px-4 relative z-20 mb-20 md:mb-32">
        <h2 className="text-[44px] sm:text-[56px] md:text-[72px] font-black text-[#1C1816] uppercase tracking-tight leading-[1.0] italic">
          Experience <span className="text-[#2350AA]">Australia</span>
        </h2>
      </div>

      <div className="w-full px-3 md:px-6 relative">
        {activities.map((activity, index) => (
          <Card 
            key={index} 
            activity={activity} 
            index={index} 
            total={activities.length} 
          />
        ))}
        {/* Spacer allows the last card to stick and remain pinned for its full scroll duration */}
        <div className="h-[80vh] w-full" />
      </div>
    </section>
  );
}
