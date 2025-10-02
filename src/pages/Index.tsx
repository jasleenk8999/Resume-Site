import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

/**
 * Main landing page - Resume service website
 * Pixel-perfect implementation of Figma design
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;
