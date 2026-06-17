"use client";

export default function StatsSection() {
  const stats = [
    { value: "95%",  label: ["Customer",    "Satisfaction"] },
    { value: "80+",  label: ["Popular",     "Destinations"] },
    { value: "$50 USD", label: ["Standard", "Plan"] },
  ];
  return (
    <section className="bg-white py-12 lg:py-20 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">

        {/* ── LEFT — Image ── */}
        <div className="w-full lg:flex-[0_0_42%]">
          <div className="rounded-[24px] overflow-hidden w-full aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80"
              alt="Traveler photographing scenic landscape"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ── RIGHT — Content ── */}
        <div className="flex-1">

          <h2 className="text-[32px] md:text-[42px] xl:text-[46px] font-normal text-black leading-[1.15] tracking-[-0.01em]">
            CTA/ APP showcase section<br />
            (under progress).
          </h2>

          <p className="mt-4 text-[13.5px] font-normal text-gray-400 leading-relaxed max-w-sm">
            Each step of the journey brings unique stories to tell, valuable
            lessons from various experiences.
          </p>

          <div className="mt-12">
            {stats.map((stat, i) => (
              <div key={stat.value}>
                <div className="flex items-center justify-between py-6">
                  <span className="text-[40px] md:text-[52px] xl:text-[56px] font-normal text-black leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <div className="text-right">
                    {stat.label.map((line) => (
                      <p key={line} className="text-[14px] font-normal text-gray-600 leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-px bg-gray-200 w-full" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
