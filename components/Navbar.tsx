"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const WorldSkyMark = ({ isScrolled }: { isScrolled: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-300"
  >
    <line x1="12" y1="1" x2="12" y2="23" stroke={isScrolled ? "#005840" : "#ffffff"} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="1" y1="12" x2="23" y2="12" stroke={isScrolled ? "#005840" : "#ffffff"} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="3.51" y1="3.51" x2="20.49" y2="20.49" stroke={isScrolled ? "#005840" : "#ffffff"} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20.49" y1="3.51" x2="3.51" y2="20.49" stroke={isScrolled ? "#005840" : "#ffffff"} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const leftLinks = [
  { label: "Destinations", href: "#destination" },
  { label: "Experiences", href: "#reviews" },
  { label: "Package", href: "#packages" },
  { label: "Tour Schedule", href: "#schedule" },
];

const rightLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out select-none ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] rounded-full bg-white/70 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] py-3 px-8 text-black dark:text-white"
            : "top-6 left-4 right-4 bg-transparent py-4 px-6 md:px-12 text-white"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Left links (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                  isScrolled
                    ? "text-[#005840]/70 hover:text-[#005840]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <div className="flex items-center justify-center gap-2.5 flex-shrink-0 lg:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <WorldSkyMark isScrolled={isScrolled} />
              <span
                className={`font-bold text-[16px] tracking-[0.15em] transition-colors duration-300 ${
                  isScrolled ? "text-[#005840]" : "text-white"
                }`}
              >
                TOURIST SAVER
              </span>
            </Link>
          </div>

          {/* Right links (hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                  isScrolled
                    ? "text-[#005840]/70 hover:text-[#005840]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Trigger for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-full rounded transition-all duration-300 origin-left ${
                mobileMenuOpen
                  ? "rotate-45 bg-[#005840] dark:bg-white"
                  : isScrolled
                  ? "bg-[#005840]"
                  : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded transition-all duration-300 ${
                mobileMenuOpen
                  ? "opacity-0"
                  : isScrolled
                  ? "bg-[#005840]"
                  : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded transition-all duration-300 origin-left ${
                mobileMenuOpen
                  ? "-rotate-45 bg-[#005840] dark:bg-white"
                  : isScrolled
                  ? "bg-[#005840]"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu overlay */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 lg:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-[18px] font-semibold text-[#005840] dark:text-white">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:scale-105 transition-transform duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
