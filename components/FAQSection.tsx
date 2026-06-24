"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I find deals for Gold Coast, Sunshine Coast, Sydney, and Melbourne?",
    answer: "Simply select your destination—whether it's the beaches of Gold Coast, the beautiful Sunshine Coast, iconic Sydney, or the cultural hub of Melbourne—and we'll show you the best discounts available on the Tourist Saver app."
  },
  {
    id: 2,
    question: "How does the Tourist Saver app save me money and hassle?",
    answer: "Tourist Saver provides all the best deals for your destinations and many more. Instead of searching multiple sites, you get everything under one subscription, allowing you to manage the hassle and save money all in one place."
  },
  {
    id: 3,
    question: "Are there merchandise deals available as well?",
    answer: "Absolutely! Tourist Saver doesn't just offer experience and food discounts—we also have the best merch deals and prices for all the places you travel to in your destinations."
  },
  {
    id: 4,
    question: "Can I use one subscription across all these Australian cities?",
    answer: "Yes! A single Tourist Saver subscription provides seamless access to discounts and travel deals across Gold Coast, Sunshine Coast, Sydney, and Melbourne, making it incredibly easy to save everywhere you go."
  },
  {
    id: 5,
    question: "Are the discounts instantly available?",
    answer: "Yes, once you download the Tourist Saver app, you get instant access to digital coupons for experiences, dining, and merch across all our supported destinations."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full bg-[#F4F8FD] rounded-[28px] py-20 px-6 md:px-16 flex flex-col items-center gap-12 shadow-sm relative overflow-hidden">
        
        {/* Header Block */}
        <div className="text-center flex flex-col gap-3 max-w-2xl">
          <h2 className="text-[38px] md:text-[44px] font-semibold text-[#2350AA] tracking-tight leading-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Frequently Asked</span>
            <span className="font-handwritten text-[52px] md:text-[60px] font-normal bg-[#d1f843] text-[#2350AA] px-4 py-1.5 rounded-[16px] inline-block transform -rotate-1 leading-none shadow-[0_4px_12px_rgba(209,248,67,0.15)]">
              Questions
            </span>
          </h2>
          <p className="text-[14px] text-neutral-500 font-normal leading-relaxed">
            FAQs address common inquiries and provide essential information, helping users find solutions quickly.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full max-w-[1000px] flex flex-col gap-4 mt-4">
          {faqData.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className={`w-full rounded-[16px] overflow-hidden transition-all duration-300 border shadow-sm group ${
                  isOpen
                    ? "bg-[#2350AA] border-[#19397A] text-white"
                    : "bg-white border-neutral-100 text-[#0d2137] hover:border-[#2350AA]/30 hover:bg-[#F4F8FD]/40"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className={`w-full text-left py-5 px-6 flex items-center justify-between font-semibold text-[16px] tracking-tight focus:outline-none transition-colors duration-200 ${
                    isOpen ? "text-white" : "text-[#0d2137] group-hover:text-[#2350AA]"
                  }`}
                >
                  <span>{item.question}</span>
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[14px] text-white/90 leading-relaxed font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
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

