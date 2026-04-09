import StickyBar from "@/components/StickyBar";
import OrderConfirmationBanner from "@/components/OrderConfirmationBanner";
import HeroSection from "@/components/HeroSection";
import LeadSection from "@/components/LeadSection";
import PlantDiscoverySection from "@/components/PlantDiscoverySection";
import RecipesSection from "@/components/RecipesSection";
import RemediesSection from "@/components/RemediesSection";
import LiveSessionsSection from "@/components/LiveSessionsSection";
import PricingCTASection from "@/components/PricingCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <StickyBar />
    <OrderConfirmationBanner />
    <HeroSection />
    <main>
      <LeadSection />
      <PlantDiscoverySection />
      <RecipesSection />
      <RemediesSection />
      <LiveSessionsSection />
      <PricingCTASection />
    </main>
    <FooterSection />
  </div>
);

export default Index;
