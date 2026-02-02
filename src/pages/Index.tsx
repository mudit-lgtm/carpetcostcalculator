import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickNavigation } from "@/components/QuickNavigation";
import { CarpetCalculator } from "@/components/CarpetCalculator";
import { AdBanner } from "@/components/AdBanner";
import { QuickCostReference } from "@/components/QuickCostReference";
import { StairCalculatorSection } from "@/components/StairCalculatorSection";
import { MultiRoomCalculator } from "@/components/MultiRoomCalculator";
import { CarpetComparisonTool } from "@/components/CarpetComparisonTool";
import { CostRangesTable } from "@/components/CostRangesTable";
import { CarpetTileCalculator } from "@/components/CarpetTileCalculator";
import { CarpetMaintenanceCalculator } from "@/components/CarpetMaintenanceCalculator";
import { FloorComparisonTool } from "@/components/FloorComparisonTool";
import { StepByStepGuide } from "@/components/StepByStepGuide";
import { CarpetTypeGuide } from "@/components/CarpetTypeGuide";
import { ConversionTables } from "@/components/ConversionTables";
import { RetailerComparison } from "@/components/RetailerComparison";
import { BrandSpecificNotes } from "@/components/BrandSpecificNotes";
import { FAQ } from "@/components/FAQ";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Compact Hero */}
        <Hero />
        
        {/* Quick Navigation for all tools */}
        <QuickNavigation />
        
        {/* MAIN CALCULATOR - First interactive element */}
        <section id="calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetCalculator />
          </div>
        </section>

        {/* Ad Banner - 728x90 after main calculator */}
        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>
        <div className="py-4 md:hidden">
          <AdBanner size="468x60" />
        </div>

        {/* Quick Cost Reference */}
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <QuickCostReference />
          </div>
        </section>

        {/* Stair Carpet Calculator */}
        <StairCalculatorSection />

        {/* Ad Banner - 160x300 rectangle */}
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

        {/* Carpet Comparison Tool */}
        <section id="comparison-tool" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetComparisonTool />
          </div>
        </section>

        {/* Cost Ranges Table */}
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <CostRangesTable />
          </div>
        </section>

        {/* Carpet Tile Calculator */}
        <section id="tile-calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetTileCalculator />
          </div>
        </section>

        {/* Maintenance Calculator */}
        <section id="maintenance-calculator" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <CarpetMaintenanceCalculator />
          </div>
        </section>

        {/* Floor Comparison Tool */}
        <section id="floor-comparison" className="py-6 px-4">
          <div className="container mx-auto">
            <FloorComparisonTool />
          </div>
        </section>

        {/* Ad Banner - 728x90 */}
        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>

        {/* Step-by-Step Guide */}
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <StepByStepGuide />
          </div>
        </section>

        {/* Conversion Tables */}
        <section className="py-6 px-4">
          <div className="container mx-auto">
            <ConversionTables />
          </div>
        </section>

        {/* Carpet Type Guide */}
        <section id="guide" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <CarpetTypeGuide />
          </div>
        </section>

        {/* Retailer Comparison */}
        <section id="retailers" className="py-6 px-4">
          <div className="container mx-auto">
            <RetailerComparison />
          </div>
        </section>

        {/* Brand Specific Notes */}
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <BrandSpecificNotes />
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
        
        {/* About Us */}
        <AboutUs />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
