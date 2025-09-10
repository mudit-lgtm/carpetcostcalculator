import { Button } from "@/components/ui/button";
import { ArrowDown, Calculator, TrendingUp, Sparkles, Users, Timer } from "lucide-react";

export const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 gradient-hero opacity-20"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Carpet Installation
            <span className="block text-primary">Cost Calculator</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get accurate estimates for carpet materials and installation costs. 
            Compare prices from Home Depot, Lowe's, and local contractors instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 transition-smooth"
            >
              <Calculator className="h-5 w-5 mr-2 text-white" />
              Calculate Costs Now
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span>Free • Instant Results • No Signup Required</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Calculations Completed</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">$2.50-$6.50</div>
              <div className="text-sm text-muted-foreground">Average Cost per Sq Ft</div>
            </div>
            <div className="text-center">
              <Timer className="h-6 w-6 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">4 Major</div>
              <div className="text-sm text-muted-foreground">Retailer Price Comparisons</div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              variant="ghost" 
              onClick={scrollToCalculator}
              className="animate-bounce"
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};