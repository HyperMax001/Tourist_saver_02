"use client";

export default function DownloadAppBanner() {
  return (
    <section id="download-app" className="bg-white pb-20 pt-8 px-8 w-full overflow-hidden">
      <div 
        className="max-w-[1600px] mx-auto w-full h-[450px] rounded-[48px] overflow-hidden relative flex flex-col justify-center items-center text-center px-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80"
          alt="Aerial tropical beach view"
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
          <button className="px-8 py-3.5 mt-6 bg-white text-black font-semibold text-[14.5px] rounded-full hover:bg-neutral-100 active:scale-98 transition-all duration-150 shadow-md">
            Download App Now
          </button>
        </div>

      </div>
    </section>
  );
}
