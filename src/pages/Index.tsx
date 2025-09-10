import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { CarpetCalculator } from "@/components/CarpetCalculator";
import { StepByStepGuide } from "@/components/StepByStepGuide";
import { CostRangesTable } from "@/components/CostRangesTable";
import { CarpetTypeGuide } from "@/components/CarpetTypeGuide";
import { ConversionTables } from "@/components/ConversionTables";
import { RetailerComparison } from "@/components/RetailerComparison";
import { BrandSpecificNotes } from "@/components/BrandSpecificNotes";
import { FAQ } from "@/components/FAQ";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <section id="calculator" className="py-8 px-4">
          <div className="container mx-auto">
            <CarpetCalculator />
          </div>
        </section>
        
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <Introduction />
          </div>
        </section>

        <section className="py-8 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <StepByStepGuide />
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto">
            <CostRangesTable />
          </div>
        </section>

        <section className="py-8 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <ConversionTables />
          </div>
        </section>

        <section id="guide" className="py-8 px-4">
          <div className="container mx-auto">
            <CarpetTypeGuide />
          </div>
        </section>

        <section id="retailers" className="py-8 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <RetailerComparison />
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto">
            <BrandSpecificNotes />
          </div>
        </section>

        <FAQ />
        
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
