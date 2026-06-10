export default function HeroSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-8 pb-8 w-full h-[calc(100vh-100px)] min-h-[650px] flex">
      <div className="flex gap-0 w-full h-full">

        {/* ── LEFT PANEL ── */}
        <div
          className="relative flex-[0_0_60%] rounded-l-[48px] rounded-r-[96px] mr-[-2px] overflow-hidden"
          style={{
            backgroundImage:
              "url('/hero-bg.jpg')",
            backgroundSize: "166.67% auto",
            backgroundPosition: "left center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          <div className="absolute bottom-44 left-16 z-10 pr-12">
            <h1 className="text-[66px] xl:text-[78px] font-medium text-white leading-[1.05] tracking-tight">
              Refreshing<br />exploration of<br />the world
            </h1>
            <p className="mt-5 text-[18px] font-medium text-white/80 tracking-wide">
              Journey beyond the ordinary adventure trip
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div
          className="relative flex-[0_0_40%] rounded-l-[96px] rounded-r-[48px] overflow-hidden"
          style={{
            backgroundImage:
              "url('/hero-bg.jpg')",
            backgroundSize: "250% auto",
            backgroundPosition: "right center",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          {/* ── EMPTY WHITE CARD PLACEHOLDER ── */}
          {/* Add your content here */}
          <div
            className="
              absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-[52%]
              w-[87%]
              bg-white
              rounded-[20px]
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              p-6
              min-h-[300px]
              z-10
            "
          >
            {/* ← your content goes here */}
          </div>
        </div>

      </div>
    </section>
  );
}
