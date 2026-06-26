"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineVariants = {
  hidden: {
    y: "130%",
    rotate: 1.5,
  },
  visible: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function TaglineSection() {
  const lines = [
    "Discover travel, dining, attractions, wellness, fun and unforgettable experiences with up to 60% exclusive member savings and a money back guarantee.",
  ];

  return (
    <section className="w-full bg-transparent py-12 md:py-16 px-6 md:px-12 flex justify-center items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1200px] text-center mx-auto flex flex-col items-center w-full"
      >
        {lines.map((line, idx) => (
          <div
            key={idx}
            className="overflow-hidden w-full py-0.5 flex justify-center"
          >
            <motion.p
              variants={lineVariants}
              className="text-[20px] md:text-[25px] xl:text-[29px] font-medium text-[#19397A] leading-[1.3] md:leading-[1.4] tracking-tight origin-bottom-left"
            >
              {line}
            </motion.p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
