"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function ActivitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = cardsContainerRef.current;
    if (!section || !container) return;

    // Kill any stale ScrollTrigger instances (from HMR/hot reload)
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === section) st.kill();
    });

    const cards = gsap.utils.toArray<HTMLElement>(".activity-card", container);
    if (cards.length === 0) return;

    // Each card (except the first) will animate from off-screen to stacked.
    // We give each card 1 unit of timeline progress to animate in.
    const totalCards = cards.length;

    // Set initial state: first card is visible, rest are pushed below
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { yPercent: 0, zIndex: i + 1 });
      } else {
        gsap.set(card, { yPercent: 100, zIndex: i + 1 });
      }
    });

    // Build the timeline — each card slides up from below to stack on top
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // 400vh per card — very slow, requires a lot of scrolling per card
        end: `+=${(totalCards - 1) * 600}vh`,
        pin: true,
        // scrub = seconds of smoothing lag. 1.2 = smooth and buttery
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    // Animate cards 2–8 sliding up one by one
    cards.forEach((card, i) => {
      if (i === 0) return; // First card is already visible
      tl.to(
        card,
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        (i - 1)
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4F8FD] w-full h-screen flex flex-col relative z-10"
    >
      {/* Heading */}
      <div className="text-center px-4 pt-12 lg:pt-20 pb-6 lg:pb-8 flex-shrink-0">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-black text-[#1C1816] uppercase tracking-tight leading-[1.0] italic">
          Experience <span className="text-[#2350AA]">Australia</span>
        </h2>
      </div>

      {/* Cards container — all cards are stacked absolutely on top of each other */}
      <div
        ref={cardsContainerRef}
        className="relative flex-1 w-full"
      >
        {activities.map((activity, index) => (
          <div
            key={index}
            className="activity-card absolute top-0 bottom-6 left-4 right-4 md:bottom-10 md:left-10 md:right-10 rounded-[24px] md:rounded-[40px] overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-16">
              <h3 className="text-white text-4xl md:text-7xl font-black uppercase italic tracking-wide drop-shadow-2xl">
                {activity.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
