import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ruler, Package, Settings, Plus, MapPin, Calculator, CheckCircle } from "lucide-react";

export const StepByStepGuide = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: 1,
      icon: Ruler,
      title: "Enter Room Dimensions",
      description: "Measure your room's length and width in feet",
      details: [
        "Measure at the longest points for irregular rooms",
        "Use a tape measure for accuracy",
        "Round up to the nearest half foot",
        "For L-shaped rooms, break into rectangles"
      ],
      tip: "Pro Tip: Always add 10% extra for waste and pattern matching"
    },
    {
      number: 2,
      icon: Package,
      title: "Choose Carpet Type & Material",
      description: "Select from nylon, wool, polyester, berber, and eco-friendly options",
      details: [
        "Nylon: Most durable, best for high-traffic areas",
        "Wool: Luxurious, natural, excellent insulation",
        "Polyester: Budget-friendly, stain-resistant",
        "Berber: Loop pile, great for commercial use"
      ],
      tip: "Consider traffic level and room usage when choosing"
    },
    {
      number: 3,
      icon: Settings,
      title: "Select Padding & Underlay",
      description: "Choose from basic foam, premium pad, or moisture barrier options",
      details: [
        "Basic foam: Standard comfort and support",
        "Premium pad: Enhanced comfort and durability",
        "Moisture barrier: Essential for basements",
        "Thickness affects comfort and carpet life"
      ],
      tip: "Quality padding extends carpet life by 50% or more"
    },
    {
      number: 4,
      icon: Plus,
      title: "Add Extras & Services",
      description: "Include stairs, furniture moving, old carpet removal, and trim work",
      details: [
        "Stair installation: $15-25 per step",
        "Furniture moving: $50-150 per room",
        "Old carpet removal: $1-2 per sq ft",
        "Baseboards & trim: $2-5 per linear foot"
      ],
      tip: "Bundle services often cost less than individual pricing"
    },
    {
      number: 5,
      icon: MapPin,
      title: "Choose Your Region",
      description: "Labor costs vary significantly by geographic location",
      details: [
        "Urban areas typically cost 20-30% more",
        "Northeast and West Coast are most expensive",
        "Midwest and South offer better value",
        "Local contractors often beat big box stores"
      ],
      tip: "Get quotes from both local and national installers"
    },
    {
      number: 6,
      icon: Calculator,
      title: "Get Instant Estimate",
      description: "Click calculate to see detailed cost breakdown and compare options",
      details: [
        "Materials cost breakdown",
        "Labor and installation fees",
        "Total project cost with tax",
        "Cost per square foot comparison"
      ],
      tip: "Save or print your estimate for contractor meetings"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">How to Use the Carpet Installation Cost Calculator</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Follow this step-by-step guide to get the most accurate carpet installation estimate. 
          Our calculator considers all factors that affect your final cost.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <Card key={step.number} className="calculator-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full flex-shrink-0">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Considerations:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary-light/20 rounded-lg p-4">
                    <Badge variant="secondary" className="mb-2">
                      💡 Expert Tip
                    </Badge>
                    <p className="text-sm text-muted-foreground">{step.tip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="calculator-card bg-primary-light/10">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Carpet Installation Cost?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Now that you understand how our calculator works, try it yourself! 
            Get accurate estimates for your specific project in just minutes.
          </p>
          <Button 
            onClick={scrollToCalculator}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-lg px-8 py-6"
          >
            <Calculator className="h-5 w-5 mr-2" />
            Start Your Calculation
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};