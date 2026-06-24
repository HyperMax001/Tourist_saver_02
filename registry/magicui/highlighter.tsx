"use client";

import React from "react";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#87CEFA",
  className = "",
}: HighlighterProps) {
  if (action === "underline") {
    return (
      <span
        className={`relative inline-block ${className}`}
        style={{
          borderBottom: `3px solid ${color}`,
          paddingBottom: "1px",
        }}
      >
        {children}
      </span>
    );
  }

  // Default: action = "highlight"
  return (
    <span
      className={`relative inline px-2 py-0.5 rounded-[6px] text-[#2350AA] font-semibold ${className}`}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </span>
  );
}

