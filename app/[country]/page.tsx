import Navbar from "@/components/Navbar";

function getCurrencyText(countryName: string): { value: string; label: string } {
  switch (countryName.toLowerCase()) {
    case "australia": return { value: "$75 AUD", label: "Equivalent to 50 USD" };
    case "canada": return { value: "$68 CAD", label: "Equivalent to 50 USD" };
    case "singapore": return { value: "$67 SGD", label: "Equivalent to 50 USD" };
    case "vietnam": return { value: "1.27M VND", label: "Equivalent to 50 USD" };
    case "thailand": return { value: "1,750 THB", label: "Equivalent to 50 USD" };
    case "fiji": return { value: "$112 FJD", label: "Equivalent to 50 USD" };
    case "indonesia": return { value: "800k IDR", label: "Equivalent to 50 USD" };
    case "south-africa":
    case "south africa": return { value: "R940 ZAR", label: "Equivalent to 50 USD" };
    case "usa": return { value: "$50 USD", label: "Equivalent to 50 USD" };
    case "england": return { value: "£39 GBP", label: "Equivalent to 50 USD" };
    case "ireland": return { value: "€46 EUR", label: "Equivalent to 50 USD" };
    case "scotland": return { value: "£39 GBP", label: "Equivalent to 50 USD" };
    case "new-zealand":
    case "new zealand": return { value: "$83 NZD", label: "Equivalent to 50 USD" };
    default: return { value: "$50 USD", label: "Equivalent to 50 USD" };
  }
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Format the country name to be readable (e.g., 'south-africa' -> 'South Africa')
  const formattedCountry = country
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const pricing = getCurrencyText(country);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-32 px-8 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-[#2350AA] capitalize mb-4">{formattedCountry}</h1>
        
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8 text-center max-w-sm w-full shadow-sm">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Standard Plan</h2>
          <div className="text-5xl font-light text-black mb-2">{pricing.value}</div>
          <div className="text-sm text-gray-400">{pricing.label}</div>
        </div>

        <p className="text-neutral-500 text-lg">More information about {formattedCountry} coming soon.</p>
      </div>
    </main>
  );
}
