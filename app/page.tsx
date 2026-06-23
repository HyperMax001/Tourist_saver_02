import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import StatsSection from "@/components/StatsSection";
import PlacesAndDeals from "@/components/PlacesAndDeals";
import CountrySelection from "@/components/CountrySelection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import DownloadAppBanner from "@/components/DownloadAppBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TaglineSection />
      <CountrySelection />
      <PlacesAndDeals />
      <StatsSection />
      <Testimonials />
      <FAQSection />
      <DownloadAppBanner />
      <Footer />
    </main>
  );
}

// we seriously need to change the names of the sections to what is actually in them...
