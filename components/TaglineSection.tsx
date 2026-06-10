"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const PillImage = ({
  src,
  alt,
  width = "w-[148px]",
  scrollYProgress,
  start,
  end,
}: {
  src: string;
  alt: string;
  width?: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const blurVal = useTransform(scrollYProgress, [start, end], [6, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, scale, filter, willChange: "transform, opacity, filter" }}
      className={`inline-block ${width} h-[62px] rounded-full overflow-hidden align-middle mx-2 relative top-[-3px] shadow-md`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.span>
  );
};

const AnimatedWord = ({
  word,
  scrollYProgress,
  start,
  end,
}: {
  word: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [15, 0]);
  const blurVal = useTransform(scrollYProgress, [start, end], [8, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, y, filter, display: "inline-block", willChange: "transform, opacity, filter" }}
    >
      {word}&nbsp;
    </motion.span>
  );
};

export default function TaglineSection() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  // Track scroll progress of the heading container.
  // To slow the speed of reveal, the scroll target spans from when the heading is near the bottom (95%)
  // to when it moves up to 20% of the viewport. This gives a much larger scroll track to complete the animation.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 50%"],
  });

  // Split tagline into individual animatable items (words and images)
  const items = [
    { type: "word", content: "Make" },
    { type: "word", content: "your" },
    { type: "word", content: "move" },
    { type: "word", content: "and" },
    { type: "word", content: "discover" },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80",
      alt: "Mountain landscape",
      width: "w-[148px]",
    },
    { type: "br" }, // Line break marker
    { type: "word", content: "the" },
    { type: "word", content: "world" },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=300&q=80",
      alt: "Aerial ocean view",
      width: "w-[168px]",
    },
    { type: "word", content: "that's" },
    { type: "word", content: "waiting" },
    { type: "word", content: "for" },
    { type: "word", content: "you." },
  ];

  // Count only animatable items (exclude 'br')
  const animatableCount = items.filter((item) => item.type !== "br").length;
  
  // Calculate ranges for each item. 
  // We use a duration of 0.35, meaning each word will gradually fade/blur in over 35% of the total scroll span.
  const step = 0.65 / animatableCount; 
  const duration = 0.35; 
  
  let animIndex = 0;

  return (
    <section className="bg-[#d1f843] py-4 px-8 overflow-hidden w-full">
      <div className="max-w-[1600px] mx-auto w-full bg-[#ecf0ef] rounded-[48px] py-10 px-4 md:px-12 text-center">
        {/* Scroll-driven Heading */}
        <h2
          ref={containerRef}
          className="text-[46px] md:text-[52px] xl:text-[58px] font-semibold text-[#005840] leading-[1.35] tracking-[-0.02em] select-none"
        >
          {items.map((item, index) => {
            if (item.type === "br") {
              return <br key={index} />;
            }

            const start = animIndex * step;
            const end = Math.min(1, start + duration);
            animIndex++;

            if (item.type === "image") {
              return (
                <PillImage
                  key={index}
                  src={item.src!}
                  alt={item.alt!}
                  width={item.width}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            }

            return (
              <AnimatedWord
                key={index}
                word={item.content!}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </h2>

        {/* Sub-copy */}
        <p className="mt-8 text-[14px] font-normal text-gray-400 max-w-3xl mx-auto leading-loose tracking-wide">
          Traveling changes you. You see new places, meet new people, and become a new version of yourself.
        </p>
      </div>
    </section>
  );
}
