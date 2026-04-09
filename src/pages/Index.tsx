import StickyBar from "@/components/StickyBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramSection from "@/components/ProgramSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import ClosingSection from "@/components/ClosingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <StickyBar />
    <HeroSection />
    <main>
      <AboutSection />
      <FeaturesSection />
      <ProgramSection />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <ClosingSection />
    </main>
    <FooterSection />
  </div>
);

export default Index;
