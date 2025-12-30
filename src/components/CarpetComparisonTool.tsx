import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Store, Star, TrendingDown, Clock, CheckCircle, Calculator } from "lucide-react";

export const CarpetComparisonTool = () => {
  const [squareFeet, setSquareFeet] = useState<string>('300');
  const [showResults, setShowResults] = useState(false);

  const retailers = [
    {
      name: "Lowe's",
      logo: "🔵",
      materialLow: 2.50,
      materialHigh: 6.00,
      laborLow: 1.50,
      laborHigh: 3.00,
      rating: 4.3,
      warranty: "1-year labor, varies by carpet",
      timeline: "1-2 weeks",
      pros: ["5-10% lower than Home Depot", "Military discounts", "Frequent promotions", "Free in-home estimates"],
      cons: ["Limited premium selection", "Varies by location"],
      bestFor: "Budget-conscious homeowners"
    },
    {
      name: "Home Depot",
      logo: "🏠",
      materialLow: 2.75,
      materialHigh: 7.00,
      laborLow: 1.75,
      laborHigh: 3.50,
      rating: 4.2,
      warranty: "1-year installation",
      timeline: "1-2 weeks",
      pros: ["Wide selection", "Price matching", "Special financing", "Professional network"],
      cons: ["Slightly higher prices", "Busy scheduling"],
      bestFor: "DIY-friendly options"
    },
    {
      name: "Costco",
      logo: "📦",
      materialLow: 2.25,
      materialHigh: 5.50,
      laborLow: 1.25,
      laborHigh: 2.50,
      rating: 4.5,
      warranty: "Lifetime installation",
      timeline: "2-3 weeks",
      pros: ["15% lower overall", "Lifetime warranty", "Premium brands (Shaw, Mohawk)", "Free furniture moving"],
      cons: ["Membership required", "Limited styles in-store"],
      bestFor: "Best overall value"
    },
    {
      name: "Local Contractor",
      logo: "🔨",
      materialLow: 2.00,
      materialHigh: 5.00,
      laborLow: 1.25,
      laborHigh: 2.75,
      rating: 4.4,
      warranty: "Varies (1-5 years)",
      timeline: "3-7 days",
      pros: ["20% lower prices", "Flexible scheduling", "Personalized service", "Local expertise"],
      cons: ["Quality varies", "Less warranty protection"],
      bestFor: "Custom solutions"
    }
  ];

  const sqft = parseFloat(squareFeet) || 300;

  const calculateCosts = (retailer: typeof retailers[0]) => {
    const materialLow = sqft * retailer.materialLow;
    const materialHigh = sqft * retailer.materialHigh;
    const laborLow = sqft * retailer.laborLow;
    const laborHigh = sqft * retailer.laborHigh;
    const paddingLow = sqft * 0.65;
    const paddingHigh = sqft * 1.25;
    
    return {
      materialLow,
      materialHigh,
      laborLow,
      laborHigh,
      totalLow: materialLow + laborLow + paddingLow,
      totalHigh: materialHigh + laborHigh + paddingHigh,
      perSqFtLow: retailer.materialLow + retailer.laborLow + 0.65,
      perSqFtHigh: retailer.materialHigh + retailer.laborHigh + 1.25
    };
  };

  const allCosts = retailers.map(r => ({ ...r, costs: calculateCosts(r) }));
  const lowestTotal = Math.min(...allCosts.map(r => r.costs.totalLow));

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );

  return (
    <section id="comparison-tool" className="w-full max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Store className="h-8 w-8 text-primary" />
          Carpet Price Comparison Tool 2026
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare carpet installation prices from Lowe's, Home Depot, Costco, and local contractors side-by-side.
        </p>
      </div>

      {/* Input */}
      <Card className="calculator-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
            <div className="space-y-2 w-full md:w-64">
              <Label htmlFor="sqft">Room Size (Square Feet)</Label>
              <Input
                id="sqft"
                type="number"
                value={squareFeet}
                onChange={(e) => setSquareFeet(e.target.value)}
                placeholder="300"
              />
            </div>
            <Button onClick={() => setShowResults(true)} size="lg">
              <Calculator className="h-4 w-4 mr-2" /> Compare All Retailers
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Grid */}
      {showResults && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allCosts.map((retailer) => {
            const isBestValue = retailer.costs.totalLow === lowestTotal;
            
            return (
              <Card key={retailer.name} className={`calculator-card relative ${isBestValue ? 'ring-2 ring-success' : ''}`}>
                {isBestValue && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-success text-success-foreground">
                      <TrendingDown className="h-3 w-3 mr-1" /> Best Value
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-1">{retailer.logo}</div>
                  <CardTitle className="text-lg">{retailer.name}</CardTitle>
                  <StarRating rating={retailer.rating} />
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Price Summary */}
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-xs text-muted-foreground">Total Estimate</div>
                    <div className="text-lg font-bold text-primary">
                      ${retailer.costs.totalLow.toFixed(0)} - ${retailer.costs.totalHigh.toFixed(0)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ${retailer.costs.perSqFtLow.toFixed(2)} - ${retailer.costs.perSqFtHigh.toFixed(2)}/sq ft
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span>${retailer.materialLow}-${retailer.materialHigh}/sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Labor:</span>
                      <span>${retailer.laborLow}-${retailer.laborHigh}/sq ft</span>
                    </div>
                  </div>

                  {/* Pros */}
                  <div className="space-y-1">
                    {retailer.pros.slice(0, 3).map((pro, i) => (
                      <div key={i} className="flex items-start gap-1 text-xs">
                        <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{pro}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-2 border-t space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {retailer.timeline}
                      </span>
                      <Badge variant="outline" className="text-xs">{retailer.bestFor}</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Warranty: {retailer.warranty}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {showResults && (
        <Card className="calculator-card">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">💡 Pro Tip for {sqft} sq ft</h3>
              <p className="text-muted-foreground">
                For a {sqft} sq ft room, you could save <strong className="text-success">${(allCosts[1].costs.totalLow - allCosts[2].costs.totalLow).toFixed(0)}-${(allCosts[1].costs.totalHigh - allCosts[2].costs.totalHigh).toFixed(0)}</strong> by 
                choosing Costco over Home Depot. Always get at least 3 quotes and factor in warranty, timeline, and service quality.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};