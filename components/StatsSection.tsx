"use client";

export default function StatsSection() {
  const stats = [
    { value: "1K+", label: ["SAVINGS", "OFFERS"] },
    { value: "10K+", label: ["HAPPY", "TRAVELERS"] },
    { value: "4.8+", label: ["APP STORE", "RATING"] },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* ── TOP STATS ROW (Image 1) ── */}
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

        {/* ── MAIN CONTENT AREA (Image 2) ── */}
        <div className="max-w-[1600px] mx-auto relative">

          {/* Heading (above the card) */}
          <div className="mb-8 pl-6">
            <h2 className="text-[64px] sm:text-[80px] md:text-[100px] lg:text-[116px] font-semibold text-[#1C1816] leading-[1.0] tracking-tight uppercase mb-2 md:mb-3">
              PLAN YOUR
            </h2>
            <h3 className="text-[56px] sm:text-[72px] md:text-[90px] lg:text-[104px] font-normal italic uppercase text-[#1C1816] leading-[1.0] tracking-wide">
              ESCAPE
            </h3>
          </div>

          {/* Lavender Card wrapping both columns */}
          <div className="bg-[#f0f7f4] rounded-[28px] pt-6 pb-4 pl-8 pr-8 md:pt-8 md:pb-6 md:pl-10 md:pr-12 lg:pt-8 lg:pb-4 lg:pl-12 lg:pr-16 lg:h-[370px] relative overflow-visible shadow-[0_15px_45px_rgba(0,0,0,0.02)] border border-[#005840]/10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Decorative Swirly Line Art cropped to the card border */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none select-none z-0 overflow-hidden rounded-[28px]">
              <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#005840] scale-[1.8] translate-y-12 transform origin-center">
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
                We have the largest selection of unique travel deals. Try our easy and quick coupon selection for any request. 24-hour support is always happy to answer all your questions.
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
                  The mobile app<br />is available now
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
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.37.13-9.13-1.9-14.34-6.08-3.47-2.9-7.33-7.53-11.58-13.91-5.26-7.81-9.53-16.79-12.83-26.93-3.3-10.13-4.95-19.95-4.95-29.47 0-14.19 3.58-25.75 10.75-34.69 7.16-8.94 16.21-13.41 27.13-13.41 5.7 0 11.55 1.5 17.54 4.51 5.99 3.01 10.35 4.52 13.09 4.52 2.35 0 6.6-1.5 12.74-4.52 6.16-3.01 12.24-4.46 18.25-4.36 15.55.78 27.42 6.7 35.6 17.76-13.53 8.27-20.18 19.85-19.95 34.75.22 11.29 4.31 20.8 12.25 28.52 7.95 7.73 17.51 12.01 28.71 12.83-2.23 6.64-5.3 13.38-9.18 20.22zm-38.42-120.24c0 7.73-2.82 14.88-8.45 21.46-5.63 6.57-12.43 10.59-20.41 12.06.22-6.93 2.93-13.88 8.12-20.87 5.18-6.99 12.2-11.26 21.05-12.81.45 4.31.69 8.01.69 10.16z" />
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
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M3,5.277L14.87,17.15L3,5.277z M3,18.723v-11.96l5.98,5.98L3,18.723z M17.37,14.65l-2.5-2.5l2.5-2.5l3.864,2.203 c1.025,0.585,1.025,1.523,0,2.108L17.37,14.65z M3.818,3.5L16.227,10.58l-2.857,2.857L3.818,3.5z M13.37,13.437l2.857,2.857 L3.818,20.5L13.37,13.437z" />
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
