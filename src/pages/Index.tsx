import StickyBar from "@/components/StickyBar";
import HeroSection from "@/components/HeroSection";
import LeadSection from "@/components/LeadSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <StickyBar />
    <HeroSection />
    <main>
      <LeadSection />
    </main>
    <FooterSection />
  </div>
);

export default Index;
