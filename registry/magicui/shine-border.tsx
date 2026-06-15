"use client";

import React from "react";

interface ShineBorderProps {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  borderRadius?: number;
  className?: string;
}

/**
 * ShineBorder — Animated glowing border using a rotating conic-gradient.
 *
 * Architecture:
 * 1. Outer wrapper: overflow:hidden + border-radius clips everything to shape
 * 2. Oversized rotating gradient (inset: -50%) — big enough that rotation never leaves gaps
 * 3. White inner fill (inset: borderWidth) — covers center, only border remains visible
 * 4. Glow via box-shadow on the wrapper (not clipped by overflow:hidden)
 */
export function ShineBorder({
  borderWidth = 2,
  duration = 8,
  shineColor = "#000000",
  borderRadius = 32,
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor : [shineColor];

  // Build a conic gradient that has color on one arc and transparent on the rest
  const conicGradient = `conic-gradient(from 0deg at 50% 50%, ${colors[0]} 0deg, ${
    colors.length > 1 ? colors[1] : colors[0]
  } 60deg, ${
    colors.length > 2 ? colors[2] : colors[0]
  } 120deg, transparent 180deg, transparent 360deg)`;

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        borderRadius: `${borderRadius}px`,
        overflow: "hidden",
        // Glow effect — sits outside overflow:hidden boundary via box-shadow
        boxShadow: `0 0 15px 2px ${colors[0]}20, 0 0 30px 4px ${colors[0]}10`,
      }}
    >
      {/* Oversized rotating gradient — fills all corners during rotation */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: conicGradient,
          animation: `spin ${duration}s linear infinite`,
        }}
      />
      {/* White inner fill — masks the center, leaving only the border strip */}
      <div
        style={{
          position: "absolute",
          top: borderWidth,
          left: borderWidth,
          right: borderWidth,
          bottom: borderWidth,
          borderRadius: `${borderRadius - borderWidth}px`,
          background: "white",
        }}
      />
    </div>
  );
}
