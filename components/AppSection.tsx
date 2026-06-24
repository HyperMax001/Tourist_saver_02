"use client";

export default function AppSection() {
  const stats = [
    { value: "1K+", label: ["UNIQUE", "TOURS"] },
    { value: "10K+", label: ["HAPPY", "TRAVELERS"] },
    { value: "24/7", label: ["APP", "SUPPORT"] },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* â”€â”€ TOP STATS ROW (Image 1) â”€â”€ */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-[1100px] mx-auto text-center mb-16 lg:mb-24">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center">
              <span className="text-[40px] sm:text-[54px] md:text-[76px] lg:text-[88px] font-black text-neutral-900 leading-none tracking-tight">
                {stat.value}
              </span>
              <div className="mt-2 md:mt-3 text-center">
                {stat.label.map((line) => (
                  <p
                    key={line}
                    className="text-[10px] sm:text-[12px] md:text-[14px] font-light tracking-[0.25em] uppercase italic text-neutral-500 leading-tight"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* â”€â”€ MAIN CONTENT AREA (Image 2) â”€â”€ */}
        <div className="max-w-[1600px] mx-auto relative">

          {/* Heading (above the card) */}
          <div className="mb-8 pl-6">
            <h2 className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[96px] font-semibold text-[#1C1816] leading-[1.05] tracking-tight uppercase mb-2 md:mb-3">
              Get Even More in
            </h2>
            <h3 className="text-[48px] sm:text-[64px] md:text-[78px] lg:text-[86px] font-normal italic uppercase text-[#1C1816] leading-[1.05] tracking-wide">
              TouristSaver App
            </h3>
          </div>

          {/* Lavender Card wrapping both columns */}
          <div className="bg-[#F4F8FD] rounded-[28px] pt-6 pb-4 pl-8 pr-8 md:pt-8 md:pb-6 md:pl-10 md:pr-12 lg:pt-8 lg:pb-4 lg:pl-12 lg:pr-16 lg:h-[370px] relative overflow-visible shadow-[0_15px_45px_rgba(0,0,0,0.02)] border border-[#2350AA]/10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Decorative Swirly Line Art cropped to the card border */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none select-none z-0 overflow-hidden rounded-[28px]">
              <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#2350AA] scale-[1.8] translate-y-12 transform origin-center">
                <path
                  d="M 40 180 C 130 220, 220 90, 180 60 C 140 30, 80 140, 180 160 C 280 185, 420 110, 470 70"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Left Column (Copy & CTA) */}
            <div className="flex-1 relative z-10 max-w-lg">
              <p className="text-[16px] sm:text-[18px] font-medium text-neutral-800 leading-relaxed -mt-2 lg:-mt-6">
                Travel smarter with thoughtfully curated essentials designed to make every journey smoother, lighter and more comfortable
              </p>

              <div className="mt-6">
                <a
                  href="https://touristsaver.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1C1816] text-white hover:bg-neutral-850 px-8 py-3.5 rounded-full text-[14px] font-semibold tracking-wider transition-all duration-200 transform hover:scale-[1.02] active:scale-98 shadow-md"
                >
                  Download App
                </a>
              </div>

              {/* Bottom Badges */}
              <div className="mt-8 lg:mt-28 flex items-center gap-4 relative z-10">
                <p className="text-[12px] font-bold tracking-wider text-[#1C1816] leading-snug uppercase">
                  The mobile app<br />is available ON
                </p>
                <div className="flex items-center gap-2.5">
                  {/* Apple App Store */}
                  <a
                    href="https://touristsaver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#1C1816]/15 flex items-center justify-center hover:bg-[#1C1816] hover:text-white transition-all duration-200 text-[#1C1816]"
                    aria-label="Download on App Store"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                    </svg>
                  </a>
                  {/* Google Play */}
                  <a
                    href="https://touristsaver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#1C1816]/15 flex items-center justify-center hover:bg-[#1C1816] hover:text-white transition-all duration-200 text-[#1C1816]"
                    aria-label="Download on Google Play"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column (Smartphone Mockup overlapping parent borders) */}
            <div className="w-full lg:w-[48%] flex items-center justify-center lg:justify-end relative -mt-32 sm:-mt-48 lg:-mt-96 lg:-mb-24 z-10 lg:pr-2">
              <img
                src="/app_mockup.png"
                alt="Tourist Saver Smartphone App Showcase"
                className="w-[90%] sm:w-[75%] md:w-[65%] lg:w-[105%] h-auto max-w-[440px] select-none pointer-events-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.16)] transition-transform duration-500 hover:scale-[1.01]"
                draggable={false}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

