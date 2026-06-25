import React from 'react';

interface BrandTextProps {
  className?: string;
  withSpace?: boolean;
}

export default function BrandText({ className = "", withSpace = true }: BrandTextProps) {
  return (
    <span className={`inline-block ${className}`}>
      <span className="text-[#4a154b]">T</span>
      <span className="text-[#ffb81c]">o</span>
      <span className="text-[#33b1e3]">u</span>
      <span className="text-[#e23b93]">r</span>
      <span className="text-[#104f8c]">i</span>
      <span className="text-[#ce1126]">s</span>
      <span className="text-[#104f8c]">t</span>
      {withSpace ? " " : ""}
      <span className="text-[#20aa65]">S</span>
      <span className="text-[#e04537]">a</span>
      <span className="text-[#f17a22]">v</span>
      <span className="text-[#d8351b]">e</span>
      <span className="text-[#bc1e22]">r</span>
    </span>
  );
}
