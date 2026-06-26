import { Tag, MapPin } from "lucide-react";

export default function TrustStrip() {
  return (
    <section
      className="w-full py-10 md:py-14 px-4"
      style={{
        background: "linear-gradient(90deg, #FBEAF0 0%, #FDE9C4 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 flex-wrap">
        {/* Money back stamp + headline */}
        <div className="flex items-center gap-4 md:gap-5">
          <svg
            width="88"
            height="88"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-[12deg] flex-shrink-0"
            aria-label="100% Money back guarantee"
            style={{ filter: "drop-shadow(0 4px 12px rgba(15,110,86,0.25))" }}
          >
            <circle cx="50" cy="50" r="46" fill="#FFF8F0" stroke="#0F6E56" strokeWidth="3" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#0F6E56"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
            <path
              id="circlePathTS"
              d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
              fill="none"
            />
            <text
              fontSize="9"
              fontWeight="700"
              fill="#0F6E56"
              letterSpacing="1.5"
            >
              <textPath xlinkHref="#circlePathTS" startOffset="0%">
                100% MONEY BACK · 100% MONEY BACK ·
              </textPath>
            </text>
            <circle cx="50" cy="50" r="20" fill="#1D9E75" />
            <path
              d="M40 50 L47 57 L60 43"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <div className="text-center md:text-left">
            <div className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] leading-none tracking-tight">
              Money back{" "}
              <span className="text-[#D4537E] font-normal font-[family-name:var(--font-patrick-hand)] text-[36px] md:text-[48px]">
                guarantee
              </span>
            </div>
            <div className="text-[12px] md:text-[13px] text-[#1A1A2E]/70 mt-1.5">
              If you don't save your membership back, we refund it.
            </div>
          </div>
        </div>

        {/* Other badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="bg-white px-4 py-2.5 rounded-full flex items-center gap-2 border border-black/5 shadow-sm">
            <Tag className="w-4 h-4 text-[#993C1D]" />
            <span className="text-[13px] text-[#1A1A2E]">
              <span className="font-semibold">4,500+</span> savings
            </span>
          </div>
          <div className="bg-white px-4 py-2.5 rounded-full flex items-center gap-2 border border-black/5 shadow-sm">
            <MapPin className="w-4 h-4 text-[#185FA5]" />
            <span className="text-[13px] text-[#1A1A2E]">
              Queensland · Australia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}