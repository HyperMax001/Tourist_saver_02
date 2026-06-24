"use client";

import React from "react";

interface RainbowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
}

export function RainbowButton({ className, children, ...props }: RainbowButtonProps) {
  return (
    <a
      className={`rainbow-button ${className || ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
