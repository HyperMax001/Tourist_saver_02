export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Format the country name to be readable (e.g., 'south-africa' -> 'South Africa')
  const formattedCountry = country
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen pt-32 px-8 flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-[#005840] capitalize mb-4">{formattedCountry}</h1>
      <p className="text-neutral-500 text-lg">This page is currently empty.</p>
    </main>
  );
}
