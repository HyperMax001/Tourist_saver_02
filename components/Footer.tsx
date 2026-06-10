"use client";

import Link from "next/link";

const WorldSkyMarkWhite = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3.51" y1="3.51" x2="20.49" y2="20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20.49" y1="3.51" x2="3.51" y2="20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-[1600px] mx-auto px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Logo and Description */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2.5 text-white">
              <WorldSkyMarkWhite />
              <span className="font-bold text-[15px] tracking-[0.14em]">
                Tourist Saver
              </span>
            </div>
            <p className="text-neutral-400 text-[14px] leading-relaxed max-w-[320px]">
              Solid Travel Group is a travel community of individuals with a passion for exploration and cooperation.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1 - Tour */}
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-semibold text-neutral-500 tracking-[0.1em] uppercase">
                Tour
              </span>
              <ul className="flex flex-col gap-3">
                <li><Link href="#tour" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Australia Special</Link></li>
                <li><Link href="#tour" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Africa</Link></li>
                <li><Link href="#tour" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">America</Link></li>
                <li><Link href="#tour" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Asia</Link></li>
              </ul>
            </div>

            {/* Column 2 - Company */}
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-semibold text-neutral-500 tracking-[0.1em] uppercase">
                Company
              </span>
              <ul className="flex flex-col gap-3">
                <li><Link href="#company" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">About</Link></li>
                <li><Link href="#company" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Press</Link></li>
                <li><Link href="#company" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Careers</Link></li>
                <li><Link href="#company" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3 - Products */}
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-semibold text-neutral-500 tracking-[0.1em] uppercase">
                Products
              </span>
              <ul className="flex flex-col gap-3">
                <li><Link href="#products" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Package</Link></li>
                <li><Link href="#products" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Cruise</Link></li>
                <li><Link href="#products" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Car Hire</Link></li>
                <li><Link href="#products" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Passport</Link></li>
              </ul>
            </div>

            {/* Column 4 - Connect */}
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-semibold text-neutral-500 tracking-[0.1em] uppercase">
                Connect
              </span>
              <ul className="flex flex-col gap-3">
                <li><Link href="#connect" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Instagram</Link></li>
                <li><Link href="#connect" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">LinkedIn</Link></li>
                <li><Link href="#connect" className="text-[14px] text-neutral-300 hover:text-white transition-colors duration-150">Twitter</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-800" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-neutral-400 text-[13.5px]">
          <span>©2024 worldsky. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#terms" className="hover:text-white transition-colors duration-150">Terms</Link>
            <Link href="#privacy" className="hover:text-white transition-colors duration-150">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
