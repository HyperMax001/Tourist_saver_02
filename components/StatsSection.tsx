"use client";

import { useCountry } from "@/context/CountryContext";

function getCurrencyText(countryName: string): { value: string; label: string[] } {
  switch (countryName.toLowerCase()) {
    case "australia": return { value: "$75 AUD", label: ["Equivalent to", "50 USD"] };
    case "canada": return { value: "$68 CAD", label: ["Equivalent to", "50 USD"] };
    case "singapore": return { value: "$67 SGD", label: ["Equivalent to", "50 USD"] };
    case "vietnam": return { value: "1.27M VND", label: ["Equivalent to", "50 USD"] };
    case "thailand": return { value: "1,750 THB", label: ["Equivalent to", "50 USD"] };
    case "fiji": return { value: "$112 FJD", label: ["Equivalent to", "50 USD"] };
    case "indonesia": return { value: "800k IDR", label: ["Equivalent to", "50 USD"] };
    case "south africa": return { value: "R940 ZAR", label: ["Equivalent to", "50 USD"] };
    case "usa": return { value: "$50 USD", label: ["Equivalent to", "50 USD"] };
    case "england": return { value: "£39 GBP", label: ["Equivalent to", "50 USD"] };
    case "ireland": return { value: "€46 EUR", label: ["Equivalent to", "50 USD"] };
    case "scotland": return { value: "£39 GBP", label: ["Equivalent to", "50 USD"] };
    case "new zealand": return { value: "$83 NZD", label: ["Equivalent to", "50 USD"] };
    default: return { value: "$50 USD", label: ["Equivalent to", "50 USD"] };
  }
}

export default function StatsSection() {
  const { selectedCountry } = useCountry();

  const stats = [
    { value: "95%",  label: ["Customer",    "Satisfaction"] },
    { value: "80+",  label: ["Popular",     "Destinations"] },
    getCurrencyText(selectedCountry),
  ];
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1600px] mx-auto flex items-center gap-20">

        {/* ── LEFT — Image ── */}
        <div className="flex-[0_0_42%]">
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

          <h2 className="text-[42px] xl:text-[46px] font-normal text-black leading-[1.15] tracking-[-0.01em]">
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
                  <span className="text-[52px] xl:text-[56px] font-normal text-black leading-none tracking-tight">
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
