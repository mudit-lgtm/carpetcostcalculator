import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CarpetCalculator } from "@/components/CarpetCalculator";
import { CarpetTypeGuide } from "@/components/CarpetTypeGuide";
import { RetailerComparison } from "@/components/RetailerComparison";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <section id="calculator" className="py-16 px-4">
          <div className="container mx-auto">
            <CarpetCalculator />
          </div>
        </section>

        <section id="guide" className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <CarpetTypeGuide />
          </div>
        </section>

        <section id="retailers" className="py-16 px-4">
          <div className="container mx-auto">
            <RetailerComparison />
          </div>
        </section>

        <FAQ />
      </main>

      <footer className="border-t py-8 px-4 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>&copy; 2024 Carpet Installation Cost Calculator. Free tool for estimating flooring costs.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
