"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Tag, MapPin } from "lucide-react";
import BrandText from "./BrandText";

export default function MembershipSection() {
  const videoRef   = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const phoneRef   = useRef<HTMLDivElement | null>(null);
  const [muted, setMuted] = useState(true);

  /**
   * Hand positioning — measured in JS so the hand is ALWAYS at the same
   * visual position relative to the phone frame, at every viewport width.
   *
   * Calibration (taken at 1699 px screen where it looked perfect):
   *   phone width = 280 px
   *   hand width  = 685 px  → ratio = 685 / 280 = 2.446
   *   hand right edge was 128 px from section right edge
   *   phone right edge was ≈ 350 px from section right edge
   *   → hand extends 350 − 128 = 222 px beyond phone right  → ratio = 222 / 280 = 0.793
   *   → hand top  = 20 px from section top  (section-relative, not phone-relative)
   */
  const [handStyle, setHandStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    const compute = () => {
      const section = sectionRef.current;
      const phone   = phoneRef.current;
      if (!section || !phone) return;

      // Hide on mobile
      if (window.innerWidth < 768) {
        setHandStyle({ opacity: 0, pointerEvents: "none" });
        return;
      }

      const sr = section.getBoundingClientRect();
      const pr = phone.getBoundingClientRect();

      // Scale everything proportionally to the phone's actual rendered width
      const scale        = pr.width / 280;           // 1.0 when phone = 280 px
      const handWidth    = 685 * scale;              // same ratio as calibration
      const beyondPhone  = 222 * scale;              // how far hand extends right of phone

      // "right" on a position:absolute element = distance from section's right edge
      // to the hand's right edge (positive = inside, negative = hand clips outside)
      const rightVal = (sr.right - pr.right) - beyondPhone + 5; // +5 nudges hand 5px left of calibration

      setHandStyle({
        position:      "absolute",
        zIndex:        20,
        pointerEvents: "none",
        userSelect:    "none",
        width:         `${handWidth}px`,
        height:        "auto",
        right:         `${rightVal}px`,   // may go negative at small screens → clipped by section overflow:hidden naturally
        top:           "20px",            // section-relative; hand sits in the top padding area
        opacity:       1,
        transition:    "opacity 0.2s",
      });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section
      ref={sectionRef}
      id="membership"
      className="w-full py-16 md:py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F0 0%, #E6F1FB 60%, #FBEAF0 100%)",
      }}
    >
      {/* Hand — position:absolute relative to section, computed from phone ref */}
      <img
        src="/hand.png"
        alt="Hand holding phone"
        style={handStyle}
      />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center">
        {/* LEFT: Pitch */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-medium mb-5 border border-black/5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] inline-block" />
            <span className="text-[#1A1A2E]">Membership</span>
          </div>

          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight text-[#1A1A2E] mb-4">
            One Membership
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #378ADD 0%, #1D9E75 35%, #D85A30 70%, #D4537E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Thousands of Ways to Save.
            </span>
          </h2>

          <p className="text-[15px] md:text-[17px] text-[#1A1A2E]/80 leading-relaxed mb-6 max-w-[480px] mx-auto md:mx-0">
            Exclusive Member Savings at Participating Merchants across Queensland.
            Join <BrandText /> and unlock 4,500+ ways to save.
          </p>

          {/* Membership panel */}
          <div className="bg-white rounded-2xl p-4 md:p-5 mb-5 border border-black/5 shadow-sm max-w-[480px] mx-auto md:mx-0">
            <div className="text-[10px] tracking-[1.5px] text-[#1A1A2E]/60 mb-1">
              ANNUAL MEMBERSHIP
            </div>
            <div className="text-[22px] md:text-[26px] font-semibold text-[#1A1A2E] mb-3">
              $99{" "}
              <span className="text-[13px] font-normal text-[#1A1A2E]/60">
                · Save $1,000s
              </span>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-black/5">
              <span className="text-[11px] text-[#1A1A2E]/70">Early bird 20% off with code</span>
              <span
                className="text-white text-[11px] font-semibold px-3 py-1 rounded-full tracking-wider"
                style={{ background: "linear-gradient(90deg, #378ADD, #D4537E)" }}
              >
                SAVER20
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto md:mx-0">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-3 bg-[#1A1A2E] text-white font-semibold text-sm rounded-xl hover:bg-[#2a2a40] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor" className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-3 bg-[#1A1A2E] text-white font-semibold text-sm rounded-xl hover:bg-[#2a2a40] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Phone with video — phoneRef is the positioning anchor for the hand */}
        <div className="flex justify-center relative overflow-visible">
          {/* soft glow */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full opacity-60 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,83,126,0.25) 0%, transparent 70%)",
              top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            }}
          />

          {/* Phone frame — ref measured so hand can stay aligned to it */}
          <div ref={phoneRef} className="relative w-[260px] md:w-[280px]">
            <div className="relative w-full aspect-[9/19] bg-[#1A1A2E] rounded-[40px] p-2.5 shadow-2xl z-10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-[#1A1A2E] rounded-full z-20" />
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/touristsaver-member-web-2.1-1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/60 transition-colors z-10"
                >
                  {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust Strip ──────────────────────────────────────────────────────── */}
      <div
        className="w-full mt-10 md:mt-14 py-10 md:py-14 px-4"
        style={{ background: "linear-gradient(90deg, #FBEAF0 0%, #FDE9C4 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 flex-wrap">
          <div className="flex items-center gap-4 md:gap-5">
            <svg width="88" height="88" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
              className="-rotate-[12deg] flex-shrink-0" aria-label="100% Money back guarantee"
              style={{ filter: "drop-shadow(0 4px 12px rgba(15,110,86,0.25))" }}
            >
              <circle cx="50" cy="50" r="46" fill="#FFF8F0" stroke="#0F6E56" strokeWidth="3" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeDasharray="2,2" />
              <path id="circlePathTS" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
              <text fontSize="9" fontWeight="700" fill="#0F6E56" letterSpacing="1.5">
                <textPath xlinkHref="#circlePathTS" startOffset="0%">100% MONEY BACK · 100% MONEY BACK ·</textPath>
              </text>
              <circle cx="50" cy="50" r="20" fill="#1D9E75" />
              <path d="M40 50 L47 57 L60 43" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <div className="text-center md:text-left">
              <div className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] leading-none tracking-tight">
                Money back{" "}
                <span className="text-[#D4537E] font-normal font-[family-name:var(--font-patrick-hand)] text-[36px] md:text-[48px]">
                  guarantee
                </span>
              </div>
              <div className="text-[12px] md:text-[13px] text-[#1A1A2E]/70 mt-1.5">
                If you don&apos;t save your membership back, we refund it.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-white px-4 py-2.5 rounded-full flex items-center gap-2 border border-black/5 shadow-sm">
              <Tag className="w-4 h-4 text-[#993C1D]" />
              <span className="text-[13px] text-[#1A1A2E]">
                <span className="font-semibold">4,500+</span> savings
              </span>
            </div>
            <div className="bg-white px-4 py-2.5 rounded-full flex items-center gap-2 border border-black/5 shadow-sm">
              <MapPin className="w-4 h-4 text-[#185FA5]" />
              <span className="text-[13px] text-[#1A1A2E]">Queensland · Australia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}