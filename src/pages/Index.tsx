import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResumePackages from "@/components/ResumePackages";

/**
 * Main landing page - Resume service website
 * Pixel-perfect implementation of Figma design
 */
const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section id="pricing" className="scroll-mt-20">
          <ResumePackages />
        </section>
      </main>
    </>
  );
};

export default Index;
