import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Home, DollarSign, Clock, CheckCircle, TrendingUp } from "lucide-react";

export const Introduction = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Calculator,
      title: "Instant Estimates",
      description: "Get accurate carpet installation costs in seconds"
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Plan your renovation budget with confidence"
    },
    {
      icon: CheckCircle,
      title: "Compare Options",
      description: "Compare different carpet types and retailers"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Skip the guesswork and get straight to the numbers"
    }
  ];

  const useCases = [
    "Home renovation and remodeling projects",
    "Moving into a new home or apartment",
    "Office space carpet installation",
    "Budget planning for multiple rooms",
    "Comparing DIY vs professional installation",
    "Getting estimates before visiting retailers"
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-16">
      <div className="text-center space-y-6">
        <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight">
              Free Carpet Installation Cost Calculator for Home Depot, Lowe's & Commercial Projects
            </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get accurate carpet installation cost estimates for Home Depot, Lowe's, and commercial projects. 
            Compare square foot pricing, average installation costs, and retailer-specific pricing instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToCalculator}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 transition-smooth"
          >
            <Calculator className="h-5 w-5 mr-2" />
            Use Our Free Calculator
          </Button>
          <Badge variant="secondary" className="text-base px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            Updated with 2025 Pricing Data
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => {
          const IconComponent = benefit.icon;
          return (
            <Card key={benefit.title} className="calculator-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary-light rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            Why Use Our Carpet Installation Cost Calculator?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Perfect for These Situations:</h3>
              <ul className="space-y-3">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What Makes Us Different:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Real Market Data</p>
                    <p className="text-sm text-muted-foreground">Updated pricing from Home Depot, Lowe's, Costco, and local contractors</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Comprehensive Calculations</p>
                    <p className="text-sm text-muted-foreground">Includes materials, labor, padding, stairs, and extra services</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Regional Pricing</p>
                    <p className="text-sm text-muted-foreground">Adjusts for geographic cost variations across the US</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">No Hidden Costs</p>
                    <p className="text-sm text-muted-foreground">Transparent breakdown of all expenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t text-center">
            <p className="text-muted-foreground mb-4">
              Whether you're a homeowner planning a single room or a contractor estimating multiple projects, 
              our calculator provides the accurate, detailed estimates you need to make informed decisions.
            </p>
            <Button 
              onClick={scrollToCalculator}
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Start Calculating Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};