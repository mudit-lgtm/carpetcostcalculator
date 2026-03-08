import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickNavigation } from "@/components/QuickNavigation";
import { FlagshipCalculator } from "@/components/FlagshipCalculator";
import { AdBanner } from "@/components/AdBanner";
import { NativeBanner } from "@/components/NativeBanner";
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
        <Hero />
        <QuickNavigation />
        
        {/* FLAGSHIP CALCULATOR — hero tool, above fold */}
        <section id="calculator" className="py-6 px-4">
          <div className="container mx-auto">
            <FlagshipCalculator />
          </div>
        </section>

        {/* Ad Banner after main calculator */}
        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>
        <div className="py-4 md:hidden">
          <AdBanner size="468x60" />
        </div>

        {/* Quick Cost Reference — SEO content tables */}
        <section className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <QuickCostReference />
          </div>
        </section>

        {/* Native Banner — high CPM */}
        <div className="py-4">
          <NativeBanner />
        </div>

        {/* Ad Banner */}
        <div className="py-4 flex justify-center">
          <AdBanner size="160x300" />
        </div>

        {/* ── Secondary Tools (demoted, still on page for long-tail SEO) ── */}

        {/* Stair Calculator */}
        <StairCalculatorSection />

        <div className="py-4">
          <AdBanner size="468x60" />
        </div>

        {/* Multi-Room Calculator */}
        <section id="multi-room" className="py-6 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <MultiRoomCalculator />
          </div>
        </section>

        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>
        <div className="py-4 md:hidden">
          <AdBanner size="468x60" />
        </div>

        {/* Carpet Comparison Tool */}
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

        {/* Ad Banner before FAQ */}
        <div className="py-4 hidden md:block">
          <AdBanner size="728x90" />
        </div>

        <FAQ />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
