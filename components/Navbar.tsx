"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname, useRouter } from "next/navigation";
import { countriesList, getCountryIcon } from "@/data/countries";
import { motion, AnimatePresence } from "motion/react";
import { ShineBorder } from "@/registry/magicui/shine-border";

const WorldSkyMark = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-300"
  >
    <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="3.51" y1="3.51" x2="20.49" y2="20.49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20.49" y1="3.51" x2="3.51" y2="20.49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const leftLinks = [
  { label: "Destinations", href: "#deals" },
  { label: "For Merchant", href: "/merchant" },
  { label: "Experiences", href: "#testimonials" },
];

const rightLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();
  const isCountryPage = countriesList.some(c => `/${c.id}` === pathname);
  const isLightBgPage = ['/about-us', '/privacy-policy', '/merchant', '/contact-us'].includes(pathname) || isCountryPage;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      if (pathname !== "/") {
        // If we're not on the home page, navigate to home with the hash
        router.push(`/${href}`);
      } else {
        // If we are on the home page, smooth scroll to the section
        if (document.querySelector(href)) {
          lenis?.scrollTo(href, { duration: 1.8 });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out select-none ${isScrolled
            ? "top-4 w-[90%] max-w-[1200px] rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.08)] py-3 px-8 text-black"
            : `top-6 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1750px] rounded-none bg-transparent border-transparent py-4 px-6 md:px-12 ${isLightBgPage ? "text-black" : "text-white"}`
          }`}
      >
        <div className="flex items-center justify-between w-full max-w-[1700px] mx-auto">
          {/* Left links (hidden on mobile) */}
          <div className={`hidden lg:flex items-center flex-1 transition-all duration-300 ${isScrolled ? "gap-4 xl:gap-6" : "gap-8"
            }`}>
            {leftLinks.map((link) => {
              if (link.label === "Destinations") {
                return (
                  <div
                    key={link.label}
                    className="relative flex items-center"
                    onMouseEnter={() => setDestinationsOpen(true)}
                    onMouseLeave={() => setDestinationsOpen(false)}
                  >
                    <div
                      className={`cursor-default whitespace-nowrap text-[15px] font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5 ${isScrolled || isLightBgPage
                          ? "text-neutral-800 hover:text-black"
                          : "text-white/80 hover:text-white"
                        }`}
                    >
                      {link.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${destinationsOpen ? 'rotate-180' : ''}`}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <AnimatePresence>
                      {destinationsOpen && (
                        <div className="absolute top-full left-0 pt-2 w-[900px] xl:w-[1050px] z-50">
                          <motion.div
                            initial={{ opacity: 0, y: -5, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -5, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,88,64,0.12),0_10px_20px_-5px_rgba(0,0,0,0.08)] p-6 w-full cursor-default border border-neutral-100"
                          >
                            <ShineBorder borderWidth={1.5} duration={8} borderRadius={24} shineColor={["#005840", "#bfff00", "#a2d2c7"]} />

                            <h4 className="text-[12px] font-semibold text-neutral-400 tracking-[0.15em] uppercase mb-4 pl-1 relative z-10">
                              Select Destination Country
                            </h4>
                            <div className="grid grid-cols-6 gap-3 relative z-10">
                              {countriesList.filter(c => c.id !== "international" && c.id !== "australia").map((country) => (
                                <div
                                  key={country.id}
                                  className={`group relative p-3 xl:p-4 rounded-2xl border flex flex-col justify-center items-center gap-1.5 transition-all duration-200 border-neutral-200 bg-white hover:border-[#005840] hover:bg-[#005840]/5 hover:shadow-[0_8px_20px_rgba(0,88,64,0.06)] cursor-pointer active:scale-98`}
                                  onClick={() => {
                                    setDestinationsOpen(false);
                                    router.push(`/${country.id}`);
                                  }}
                                >
                                  {country.isAvailable && country.id !== "australia" && (
                                    <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#005840] animate-pulse opacity-60" />
                                  )}

                                  {getCountryIcon(
                                    country.id,
                                    `w-7 h-7 mb-1 transition-transform duration-300 text-[#005840]/70 group-hover:scale-110`
                                  )}

                                  <span className="text-[15px] font-semibold tracking-wide text-[#005840]">
                                    {country.name}
                                  </span>
                                  {!country.isAvailable && (
                                    <span className="text-[9.5px] font-bold tracking-wider uppercase text-neutral-500 bg-neutral-100 py-0.5 px-2.5 rounded-full mt-1">
                                      Coming Soon
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`cursor-pointer whitespace-nowrap text-[15px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${isScrolled || isLightBgPage
                      ? "text-neutral-800 hover:text-black"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Logo Center */}
          <div className="flex items-center justify-center gap-2.5 flex-shrink-0 lg:flex-1">
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-2 cursor-pointer">
              <WorldSkyMark />
              <span className="font-bold text-[16px] tracking-[0.15em]">
                TOURIST SAVER
              </span>
            </a>
          </div>

          {/* Right links (hidden on mobile) */}
          <div className={`hidden lg:flex items-center justify-end flex-1 transition-all duration-300 ${isScrolled ? "gap-4 xl:gap-6" : "gap-8"
            }`}>
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`cursor-pointer whitespace-nowrap text-[15px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${isScrolled || isLightBgPage
                    ? "text-neutral-800 hover:text-black"
                    : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Trigger for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none z-50 text-current"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-full rounded transition-all duration-300 origin-left ${mobileMenuOpen
                  ? "rotate-45 bg-black dark:bg-white"
                  : "bg-current"
                }`}
            />
            <span
              className={`h-0.5 w-full rounded transition-all duration-300 ${mobileMenuOpen
                  ? "opacity-0"
                  : "bg-current"
                }`}
            />
            <span
              className={`h-0.5 w-full rounded transition-all duration-300 origin-left ${mobileMenuOpen
                  ? "-rotate-45 bg-black dark:bg-white"
                  : "bg-current"
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu overlay */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 lg:hidden ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col items-center gap-6 text-[18px] font-semibold text-[#005840] dark:text-white w-full">
          {[...leftLinks, ...rightLinks].map((link) => {
            if (link.label === "Destinations") {
              return (
                <div key={link.label} className="flex flex-col items-center w-full">
                  <button
                    onClick={() => setDestinationsOpen(!destinationsOpen)}
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    {link.label}
                  </button>
                  <AnimatePresence>
                    {destinationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full flex flex-col items-center gap-3 mt-4 overflow-hidden"
                      >
                        {countriesList.filter(c => c.id !== "international" && c.id !== "australia").map((country) => (
                          <button
                            key={country.id}
                            onClick={() => {
                              setDestinationsOpen(false);
                              setMobileMenuOpen(false);
                              router.push(`/${country.id}`);
                            }}
                            className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-2 hover:text-[#005840]"
                          >
                            {getCountryIcon(country.id, "w-5 h-5")}
                            {country.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
