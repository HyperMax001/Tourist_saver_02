import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TaglineSection />
      <StatsSection />
    </main>
  );
}
