"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

type AnimationType = "blurInUp" | "fadeIn" | "slideUp";
type ByType = "word" | "character" | "line";

interface TextAnimateProps {
  children: string | ReactNode;
  animation?: AnimationType;
  by?: ByType;
  once?: boolean;
  className?: string;
  delay?: number;
  duration?: number;
}

const wordVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 24,
  },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "word",
  once = false,
  className,
  delay = 0,
  duration = 0.6,
}: TextAnimateProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "0px 0px -80px 0px",
  });

  const text = typeof children === "string" ? children : "";
  const units = by === "word" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline ${className ?? ""}`} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {unit}
          {by === "word" && i < units.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
