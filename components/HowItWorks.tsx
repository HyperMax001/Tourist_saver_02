"use client";

import { motion } from "motion/react";

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const TicketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
    <path d="M2 12h20"></path>
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Discover offers near you",
      description: "Browse hundreds of discounts from our partner businesses.",
      icon: <SearchIcon />
    },
    {
      number: "2",
      title: "Click to see details",
      description: "Select the offer you want to use and show it to the merchant.",
      icon: <TicketIcon />
    },
    {
      number: "3",
      title: "Enjoy the savings",
      description: "Enjoy your trip and save money on your travel expenses.",
      icon: <MapIcon />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Get started in three simple steps
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center flex-1 max-w-sm mx-auto"
            >
              <div className="relative mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 rounded-full bg-[#e8f1fc] text-blue-500 flex items-center justify-center shadow-inner"
                >
                  <div className="scale-150">
                    {step.icon}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.4 + (index * 0.2), bounce: 0.6 }}
                  className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white"
                >
                  {step.number}
                </motion.div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
