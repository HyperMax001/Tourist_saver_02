"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX, Apple, Play } from "lucide-react";
import BrandText from "./BrandText";

export default function MembershipSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section
      id="membership"
      className="w-full py-16 md:py-24 px-4"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F0 0%, #E6F1FB 60%, #FBEAF0 100%)",
      }}
    >
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
      style={{
        background: "linear-gradient(90deg, #378ADD, #D4537E)",
      }}
    >
      SAVER20
    </span>
  </div>
</div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto md:mx-0">
            <a
              href="#"
              className="bg-[#1A1A2E] text-white px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#2a2a40] transition-colors"
            >
              <Apple className="w-5 h-5" />
              App Store
            </a>
            <a
              href="#"
              className="bg-[#1A1A2E] text-white px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#2a2a40] transition-colors"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Google Play
            </a>
          </div>
        </div>

        {/* RIGHT: Phone with video */}
        <div className="flex justify-center relative">
          {/* soft glow behind phone */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(212,83,126,0.25) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* phone frame */}
          <div className="relative w-[260px] md:w-[280px] aspect-[9/19] bg-[#1A1A2E] rounded-[40px] p-2.5 shadow-2xl">
            {/* notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-[#1A1A2E] rounded-full z-20" />

            {/* screen */}
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
              {/* sound toggle */}
              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/60 transition-colors z-10"
              >
                {muted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}