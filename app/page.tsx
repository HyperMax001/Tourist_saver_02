import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import StatsSection from "@/components/StatsSection";
import PlacesAndDeals from "@/components/PlacesAndDeals";
import TravelDeals from "@/components/TravelDeals";
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
      <TravelDeals />
      <PlacesAndDeals />
      <StatsSection />
      <Testimonials />
      <FAQSection />
      <DownloadAppBanner />
      <Footer />
    </main>
  );
}
