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
    question: "How do I book a trip on Magnolia?",
    answer: "After finding your desired flight, hotel, or activity, simply follow the on-screen prompts to select your dates, number of travelers, and any additional preferences. Then proceed to the secure payment gateway to confirm your booking."
  },
  {
    id: 2,
    question: "Does Magnolia offer travel insurance?",
    answer: "Yes, we offer comprehensive travel insurance packages covering trip cancellations, medical emergencies, baggage loss, and travel delays. You can add insurance to your booking during checkout."
  },
  {
    id: 3,
    question: "Does Magnolia provide travel recommendations?",
    answer: "Absolutely! We provide curated travel recommendations, local guides, and top itineraries based on your interests and travel history to help you get the most out of your trip."
  },
  {
    id: 4,
    question: "Do you offer discount for group bookings?",
    answer: "Yes, we provide special rates and discounts for group bookings of 10 or more people. Contact our support team directly to request a custom group quote."
  },
  {
    id: 5,
    question: "Can i cancel or reschedule my trip?",
    answer: "Yes, you can cancel or reschedule most bookings through your account dashboard. Please check the specific terms and refund policy of your package, flight, or hotel details before modifying your trip."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full bg-[#f0f7f4] rounded-[48px] py-20 px-6 md:px-16 flex flex-col items-center gap-12 shadow-sm relative overflow-hidden">
        
        {/* Header Block */}
        <div className="text-center flex flex-col gap-3 max-w-2xl">
          <h2 className="text-[38px] md:text-[44px] font-semibold text-[#005840] tracking-tight leading-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Frequently Asked</span>
            <span className="font-handwritten text-[52px] md:text-[60px] font-normal bg-[#d1f843] text-[#005840] px-4 py-1.5 rounded-[16px] inline-block transform -rotate-1 leading-none shadow-[0_4px_12px_rgba(209,248,67,0.15)]">
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
                    ? "bg-[#005840] border-[#004b36] text-white"
                    : "bg-white border-neutral-100 text-[#0d2137] hover:border-[#005840]/30 hover:bg-[#f0f7f4]/40"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className={`w-full text-left py-5 px-6 flex items-center justify-between font-semibold text-[16px] tracking-tight focus:outline-none transition-colors duration-200 ${
                    isOpen ? "text-white" : "text-[#0d2137] group-hover:text-[#005840]"
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
                      <div className="px-6 pb-6 pt-1 text-[14px] text-[#e2f0ec] leading-relaxed font-normal">
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
