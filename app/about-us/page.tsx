import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
        <div className="p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
            About Us
          </h1>
          
          <div className="space-y-10 text-gray-600 leading-relaxed text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="mb-4">
                TouristSaver.org is Australian owned and operated and provides a new innovative way for travellers to enjoy great savings deals with local businesses.
              </p>
              <p className="mb-4">
                We have developed an advanced technology app that helps travellers find the best deals at:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Local experiences</li>
                <li>Wining and dining</li>
                <li>Fast food outlets</li>
              </ul>
              <p>And all the things you will be doing on your holiday.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="mb-4">
                To create a simple, affordable, and effective way for tourists to benefit from finding attractive deals with local merchants, while giving back to the community.
              </p>
              <p>
                When a tourist saves, a local charity also benefits. Together, we can build a tourism economy that thrives on connection, trust, and contribution. We embrace change!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Tourists Choose Us</h2>
              <p className="mb-4">
                TouristSaver goes beyond one-time deals. Every time a traveller shops with a merchant, they unlock a personal discount wallet for that business, making it easy to return and save again on their favourite experiences.
              </p>
              <p className="mb-4">
                Merchants can also adjust their offers dynamically, giving visitors even more value during off-peak times and rewarding loyalty during busy seasons.
              </p>
              <p>
                For tourists, it’s authentic, flexible, and rewarding. For merchants, it builds stronger relationships and repeat customers, all while supporting local communities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Merchants Choose Us</h2>
              <p>
                Advanced technology enabling Merchants to dynamically adjust their offer hourly. TouristSaver is powered by innovative technology where the TouristSaver Wallet helps your business go beyond transaction, building a loyal customer base that’s motivated to return and spend with you again.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
