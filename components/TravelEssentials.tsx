"use client";

import { motion } from "motion/react";

const GasIcon = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v16"></path>
    <path d="M11 22H3"></path>
    <path d="M7 12V9.5"></path>
    <path d="M16 10h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1"></path>
    <path d="M11 16h2"></path>
    <rect x="5" y="6" width="4" height="4" rx="1"></rect>
  </svg>
);

const BusIcon = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H6.34a3 3 0 0 0-2.91 2.27L2.36 11.54c-.24.958-.24 1.961 0 2.92l.64 2.54H5"></path>
    <path d="M2 15h20"></path>
    <path d="M5 17v4h2v-4"></path>
    <path d="M17 17v4h2v-4"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="16.5" cy="17.5" r="2.5"></circle>
  </svg>
);

const CardIcon = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="2" y1="10" x2="22" y2="10"></line>
    <line x1="7" y1="15" x2="10" y2="15"></line>
  </svg>
);

export default function TravelEssentials() {
  const cards = [
    {
      title: "Fuel Discounts",
      imageSrc: "/fuel_pump.png",
      bgColor: "bg-[#ffdce5]"
    },
    {
      title: "Transport",
      imageSrc: "/yellow_bus.png",
      bgColor: "bg-[#ffdacc]"
    },
    {
      title: "Sim Cards",
      imageSrc: "/sim_card.png",
      bgColor: "bg-[#d4edff]"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Discover experiences",
      description: "Travel smarter with thoughtfully curated essentials designed to make every journey smoother, lighter, and more comfortable."
    },
    {
      number: "2",
      title: "Click to view deals",
      description: "Travel smarter with thoughtfully curated essentials designed to make every journey smoother, lighter, and more comfortable."
    },
    {
      number: "3",
      title: "Book and enjoy",
      description: "Travel smarter with thoughtfully curated essentials designed to make every journey smoother, lighter, and more comfortable."
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* --- Part 1: Travel Essentials --- */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-semibold text-[#2350AA] mb-4 tracking-tight"
          >
            Travel Essentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Travel smarter with thoughtfully curated essentials designed to make every journey smoother, lighter, and more comfortable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-32">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.15
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`${card.bgColor} rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center aspect-square cursor-pointer`}
            >
              <motion.div
                className="mb-6 drop-shadow-md"
                whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img src={card.imageSrc} alt={card.title} className="w-32 h-32 object-contain select-none" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-auto">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        {/* --- Part 2: How It Works --- */}
        <div className="bg-[#F4F8FD] rounded-[28px] py-16 px-6 md:px-12 shadow-[0_15px_45px_rgba(0,0,0,0.02)] border border-[#2350AA]/10 w-full mx-auto relative overflow-hidden">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-semibold text-[#2350AA] mb-12 tracking-tight"
            >
              How It Works
            </motion.h2>

            <div className="relative">
              {/* Dashed Line */}
              <div className="absolute top-6 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#2350AA] z-0 hidden md:block">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-[-2px] left-0 h-[2px] bg-[#2350AA]"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                    className="flex flex-col items-center text-center flex-1 max-w-[280px] mx-auto group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-12 h-12 bg-[#2350AA] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-[#2350AA]/40 ring-4 ring-white"
                    >
                      {step.number}
                    </motion.div>

                    <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-[#2350AA] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
