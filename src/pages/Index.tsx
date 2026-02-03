import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickNavigation } from "@/components/QuickNavigation";
import { CarpetCalculator } from "@/components/CarpetCalculator";
import { AdBanner } from "@/components/AdBanner";
import { QuickCostReference } from "@/components/QuickCostReference";
import { StairCalculatorSection } from "@/components/StairCalculatorSection";
import { MultiRoomCalculator } from "@/components/MultiRoomCalculator";
import { CarpetComparisonTool } from "@/components/CarpetComparisonTool";
import { RetailerComparison } from "@/components/RetailerComparison";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Compact Hero */}
        <Hero />
        
        {/* Quick Navigation for 4 core tools */}
        <QuickNavigation />
        
        {/* MAIN CALCULATOR - First interactive element, above the fold */}
        <section id="calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetCalculator />
          </div>
        </section>

        {/* Ad Banner - 728x90 after main calculator (high visibility) */}
        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>
        <div className="py-4 md:hidden">
          <AdBanner size="468x60" />
        </div>

        {/* Quick Cost Reference - Room Size Pricing */}
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <QuickCostReference />
          </div>
        </section>

        {/* Stair Carpet Calculator - Position 2.1 for "13 stairs" keyword */}
        <StairCalculatorSection />

        {/* Ad Banner - 160x300 rectangle between tools */}
        <div className="py-4 flex justify-center">
          <AdBanner size="160x300" />
        </div>

        {/* Multi-Room Calculator */}
        <section id="multi-room" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <MultiRoomCalculator />
          </div>
        </section>

        {/* Ad Banner - 468x60 */}
        <div className="py-4">
          <AdBanner size="468x60" />
        </div>

        {/* Carpet Comparison Tool - Lowe's vs Home Depot */}
        <section id="comparison-tool" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetComparisonTool />
          </div>
        </section>

        {/* Retailer Comparison */}
        <section id="retailers" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <RetailerComparison />
          </div>
        </section>

        {/* Ad Banner - 728x90 before FAQ */}
        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>

        {/* FAQ - Streamlined 10 high-traffic questions */}
        <FAQ />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
