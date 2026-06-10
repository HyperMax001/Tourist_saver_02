"use client";
import Link from "next/link";

const WorldSkyMark = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" y1="1" x2="12" y2="23" stroke="#005840" strokeWidth="2" strokeLinecap="round" />
    <line x1="1" y1="12" x2="23" y2="12" stroke="#005840" strokeWidth="2" strokeLinecap="round" />
    <line x1="3.51" y1="3.51" x2="20.49" y2="20.49" stroke="#005840" strokeWidth="2" strokeLinecap="round" />
    <line x1="20.49" y1="3.51" x2="3.51" y2="20.49" stroke="#005840" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const navLinks = [
  { label: "HOME", href: "/", active: true },
  { label: "ABOUT US", href: "#about" },
  { label: "DESTINATION", href: "#destination" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "BLOG", href: "#blog" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#ecf0ef] sticky top-0 z-50">
      <div
        className="
          max-w-[1600px] mx-auto
          flex items-center justify-between
          px-8 py-4
        "
      >
        <div className="flex items-center gap-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <WorldSkyMark />
            <span className="font-bold text-[15px] tracking-[0.14em] text-[#005840]">
              WORLDSKY
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-semibold tracking-[0.04em] transition-colors duration-150 ${
                  link.active
                    ? "text-[#005840]"
                    : "text-[#005840]/60 hover:text-[#005840]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-6 py-[8px] text-[14.5px] font-semibold border border-[#005840] text-[#005840] rounded-full hover:bg-[#005840] hover:text-white transition-all duration-200">
            Login
          </button>
          <button className="px-6 py-[8px] text-[14.5px] font-semibold bg-[#005840] text-white rounded-full hover:bg-[#004030] transition-all duration-200">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
