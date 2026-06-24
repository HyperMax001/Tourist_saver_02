"use client";

export default function DownloadAppBanner() {
  return (
    <section id="download-app" className="bg-white pb-20 pt-8 px-8 w-full overflow-hidden">
      <div 
        className="max-w-[1600px] mx-auto w-full h-[450px] rounded-[28px] overflow-hidden relative flex flex-col justify-center items-center text-center px-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
      >
        {/* Background Image */}
        <img
          src="/before_footer_image.avif"
          alt="Thrilling Nature Journey"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          draggable={false}
        />
        
        {/* Soft Dark Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Content Block */}
        <div className="relative z-10 flex flex-col items-center max-w-[850px] gap-4">
          <h2 className="text-[36px] md:text-[48px] font-semibold text-white leading-tight tracking-tight select-none">
            Get Ready Your Thrilling<br />Journey Into Nature Today
          </h2>
          <p className="text-[14px] md:text-[15.5px] text-white/90 font-normal leading-relaxed max-w-[580px] mt-2 select-none">
            Excited to plan your next adventure? Let's explore details to make it an unforgettable experience!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3.5 bg-white text-[#2350AA] font-semibold text-[15px] rounded-full hover:bg-[#E8EEF8] hover:shadow-[0_10px_30px_rgba(35,80,170,0.12)] active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor" className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span>App Store</span>
            </a>

            {/* Google Play Store */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3.5 bg-[#2350AA] text-white font-semibold text-[15px] rounded-full hover:bg-[#1C3E8A] hover:shadow-[0_10px_30px_rgba(35,80,170,0.25)] active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer border border-[#2350AA]/20"
            >
              <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
