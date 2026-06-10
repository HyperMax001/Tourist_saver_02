"use client";
import Link from "next/link";



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
            <img src="/Touristsaver_logo-1600x468.jpeg" alt="Tourist Saver Logo" className="w-10 h-10 object-contain"/>
            <span className="font-bold text-[15px] tracking-[0.14em] text-[#005840]">
              Tourist Saver
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
