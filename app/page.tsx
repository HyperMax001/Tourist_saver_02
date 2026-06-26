import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MembershipSection from "@/components/MembershipSection";
import TrustStrip from "@/components/TrustStrip";
import TaglineSection from "@/components/TaglineSection";
import AppSection from "@/components/AppSection";
//import ActivitySectionReplace from "@/components/ActivitySectionReplace";
import TravelEssentials from "@/components/TravelEssentials";
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
      <MembershipSection />
      <TrustStrip />
      <TaglineSection />
      {<CountrySelection /> }
      {/*<ActivitySectionReplace */}
      <TravelEssentials />
      <AppSection />
      <Testimonials />
      <FAQSection />
      <DownloadAppBanner />
      <Footer />
    </main>
  );
}