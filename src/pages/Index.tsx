import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { CarpetCalculator } from "@/components/CarpetCalculator";
import { MultiRoomCalculator } from "@/components/MultiRoomCalculator";
import { StairCalculatorSection } from "@/components/StairCalculatorSection";
import { StepByStepGuide } from "@/components/StepByStepGuide";
import { CostRangesTable } from "@/components/CostRangesTable";
import { QuickCostReference } from "@/components/QuickCostReference";
import { CarpetTypeGuide } from "@/components/CarpetTypeGuide";
import { ConversionTables } from "@/components/ConversionTables";
import { RetailerComparison } from "@/components/RetailerComparison";
import { CarpetComparisonTool } from "@/components/CarpetComparisonTool";
import { CarpetTileCalculator } from "@/components/CarpetTileCalculator";
import { CarpetMaintenanceCalculator } from "@/components/CarpetMaintenanceCalculator";
import { FloorComparisonTool } from "@/components/FloorComparisonTool";
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
        <Hero />
        
        <section id="calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetCalculator />
          </div>
        </section>

        <section id="multi-room" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <MultiRoomCalculator />
          </div>
        </section>

        <StairCalculatorSection />
        
        <section className="py-6 px-4">
          <div className="container mx-auto">
            <Introduction />
          </div>
        </section>

        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <QuickCostReference />
          </div>
        </section>

        <section id="comparison-tool" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetComparisonTool />
          </div>
        </section>
        
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <StepByStepGuide />
          </div>
        </section>

        <section id="tile-calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetTileCalculator />
          </div>
        </section>

        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <CostRangesTable />
          </div>
        </section>

        <section id="maintenance-calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <CarpetMaintenanceCalculator />
          </div>
        </section>

        <section id="floor-comparison" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <FloorComparisonTool />
          </div>
        </section>

        <section className="py-6 px-4">
          <div className="container mx-auto">
            <ConversionTables />
          </div>
        </section>

        <section id="guide" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <CarpetTypeGuide />
          </div>
        </section>

        <section id="retailers" className="py-6 px-4">
          <div className="container mx-auto">
            <RetailerComparison />
          </div>
        </section>

        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <BrandSpecificNotes />
          </div>
        </section>

        <FAQ />
        
        <AboutUs />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;