import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Sparkles, Users, Timer, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-8 md:py-10 px-4">
      <div className="absolute inset-0 gradient-hero opacity-20"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-3">
          {/* Updated badge */}
          <Badge variant="outline" className="text-xs px-3 py-1 bg-background">
            <Calendar className="h-3 w-3 mr-1" />
            Updated February 2026 | Verified Pricing
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Carpet Calculator
            <span className="block text-primary text-2xl md:text-4xl mt-1">Free Carpet Cost Estimator 2026</span>
          </h1>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get instant <strong>carpet estimates</strong> for any room. Calculate <a href="#stair-carpet-calculator" className="text-primary hover:underline">stair carpet</a> costs, 
            compare <a href="#comparison-tool" className="text-primary hover:underline">Lowe's & Home Depot prices</a>, 
            and get accurate carpet installation cost per square foot.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-5 transition-smooth"
            >
              <Calculator className="h-5 w-5 mr-2 text-white" />
              Calculate Carpet Cost
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Free • Instant Results • No Signup</span>
            </div>
          </div>

          {/* Quick links to room sizes */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <a href="#calculator" className="text-xs px-3 py-1 bg-secondary/50 hover:bg-primary/10 rounded-full transition-smooth">10x12 Room</a>
            <a href="#calculator" className="text-xs px-3 py-1 bg-secondary/50 hover:bg-primary/10 rounded-full transition-smooth">12x12 Room</a>
            <a href="#calculator" className="text-xs px-3 py-1 bg-secondary/50 hover:bg-primary/10 rounded-full transition-smooth">20x20 Room</a>
            <a href="#stair-carpet-calculator" className="text-xs px-3 py-1 bg-secondary/50 hover:bg-primary/10 rounded-full transition-smooth">13 Stairs</a>
            <a href="#multi-room" className="text-xs px-3 py-1 bg-secondary/50 hover:bg-primary/10 rounded-full transition-smooth">Whole House</a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <Users className="h-5 w-5 text-primary/80 mx-auto mb-1" />
              <div className="text-xl font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">Carpet Estimates</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-5 w-5 text-success mx-auto mb-1" />
              <div className="text-xl font-bold text-primary">$3.50-$9</div>
              <div className="text-xs text-muted-foreground">Per Sq Ft Installed</div>
            </div>
            <div className="text-center">
              <Timer className="h-5 w-5 text-primary/70 mx-auto mb-1" />
              <div className="text-xl font-bold text-primary">4 Retailers</div>
              <div className="text-xs text-muted-foreground">Price Comparison</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
