import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Calculator, Star, CheckCircle, X, Droplets, PawPrint } from "lucide-react";

export const FloorComparisonTool = () => {
  const [squareFeet, setSquareFeet] = useState<string>('300');
  const [showResults, setShowResults] = useState(false);

  const floorTypes = [
    {
      name: "Carpet",
      icon: "🧶",
      materialLow: 2.50,
      materialHigh: 8.00,
      laborLow: 1.50,
      laborHigh: 3.50,
      lifespan: 10,
      annualMaintenance: 0.35,
      comfort: 5,
      durability: 3,
      waterResistance: 1,
      petFriendly: 2,
      diyDifficulty: "Medium",
      resaleImpact: "Neutral",
      bestRooms: ["Bedrooms", "Living Room", "Basement"],
      pros: ["Warmth & comfort", "Sound absorption", "Affordable options", "Cozy feel"],
      cons: ["Stains easily", "Needs regular cleaning", "Allergen trap", "Shorter lifespan"]
    },
    {
      name: "Hardwood",
      icon: "🪵",
      materialLow: 6.00,
      materialHigh: 14.00,
      laborLow: 3.00,
      laborHigh: 8.00,
      lifespan: 25,
      annualMaintenance: 0.15,
      comfort: 3,
      durability: 4,
      waterResistance: 2,
      petFriendly: 3,
      diyDifficulty: "Hard",
      resaleImpact: "+5-10% home value",
      bestRooms: ["Living Room", "Dining Room", "Hallways"],
      pros: ["Increases home value", "Long lifespan", "Refinishable", "Timeless look"],
      cons: ["Expensive upfront", "Scratches from pets", "Water damage risk", "Cold feel"]
    },
    {
      name: "Laminate",
      icon: "📐",
      materialLow: 2.00,
      materialHigh: 5.00,
      laborLow: 1.50,
      laborHigh: 3.00,
      lifespan: 15,
      annualMaintenance: 0.10,
      comfort: 3,
      durability: 4,
      waterResistance: 3,
      petFriendly: 4,
      diyDifficulty: "Easy",
      resaleImpact: "Neutral",
      bestRooms: ["Bedrooms", "Living Room", "Office"],
      pros: ["DIY-friendly", "Scratch resistant", "Affordable", "Many styles"],
      cons: ["Cannot refinish", "Hollow sound", "Water can damage", "Less premium feel"]
    },
    {
      name: "Vinyl/LVP",
      icon: "💧",
      materialLow: 2.50,
      materialHigh: 7.00,
      laborLow: 1.50,
      laborHigh: 4.00,
      lifespan: 20,
      annualMaintenance: 0.08,
      comfort: 4,
      durability: 5,
      waterResistance: 5,
      petFriendly: 5,
      diyDifficulty: "Easy",
      resaleImpact: "Neutral to positive",
      bestRooms: ["Kitchen", "Bathroom", "Basement", "Laundry"],
      pros: ["100% waterproof", "Pet-proof", "Easy install", "Low maintenance"],
      cons: ["Can dent", "Less natural look", "VOC concerns", "Temperature sensitive"]
    }
  ];

  const sqft = parseFloat(squareFeet) || 300;

  const calculateCosts = (floor: typeof floorTypes[0]) => {
    const materialLow = sqft * floor.materialLow;
    const materialHigh = sqft * floor.materialHigh;
    const laborLow = sqft * floor.laborLow;
    const laborHigh = sqft * floor.laborHigh;
    const totalLow = materialLow + laborLow;
    const totalHigh = materialHigh + laborHigh;
    const tenYearMaintenance = sqft * floor.annualMaintenance * 10;
    const tenYearTotal = ((totalLow + totalHigh) / 2) + tenYearMaintenance;
    
    return { materialLow, materialHigh, laborLow, laborHigh, totalLow, totalHigh, tenYearMaintenance, tenYearTotal };
  };

  const RatingStars = ({ rating, max = 5 }: { rating: number; max?: number }) => (
    <div className="flex gap-0.5">
      {[...Array(max)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-3 w-3 ${i < rating ? 'fill-warning text-warning' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="floor-comparison" className="w-full max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Layers className="h-8 w-8 text-primary" />
          Floor Comparison Tool 2026
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare carpet vs hardwood vs laminate vs vinyl flooring costs, durability, and features.
        </p>
      </div>

      {/* Input */}
      <Card className="calculator-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
            <div className="space-y-2 w-full md:w-64">
              <Label htmlFor="floor-sqft">Room Size (Square Feet)</Label>
              <Input
                id="floor-sqft"
                type="number"
                value={squareFeet}
                onChange={(e) => setSquareFeet(e.target.value)}
                placeholder="300"
              />
            </div>
            <Button onClick={() => setShowResults(true)} size="lg">
              <Calculator className="h-4 w-4 mr-2" /> Compare All Flooring
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Grid */}
      {showResults && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {floorTypes.map((floor) => {
            const costs = calculateCosts(floor);
            
            return (
              <Card key={floor.name} className="calculator-card">
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-1">{floor.icon}</div>
                  <CardTitle className="text-lg">{floor.name}</CardTitle>
                  <div className="text-xs text-muted-foreground">{floor.lifespan} year lifespan</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Price Summary */}
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-xs text-muted-foreground">Installed Cost</div>
                    <div className="text-lg font-bold text-primary">
                      ${costs.totalLow.toFixed(0)} - ${costs.totalHigh.toFixed(0)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      10-Year Total: ${costs.tenYearTotal.toFixed(0)}
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Comfort</span>
                      <RatingStars rating={floor.comfort} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Durability</span>
                      <RatingStars rating={floor.durability} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Droplets className="h-3 w-3" /> Water
                      </span>
                      <RatingStars rating={floor.waterResistance} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <PawPrint className="h-3 w-3" /> Pets
                      </span>
                      <RatingStars rating={floor.petFriendly} />
                    </div>
                  </div>

                  {/* Best Rooms */}
                  <div className="flex flex-wrap gap-1">
                    {floor.bestRooms.slice(0, 3).map((room, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{room}</Badge>
                    ))}
                  </div>

                  {/* Pros/Cons */}
                  <div className="space-y-1 text-xs">
                    {floor.pros.slice(0, 2).map((pro, i) => (
                      <div key={i} className="flex items-start gap-1 text-success">
                        <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                    {floor.cons.slice(0, 1).map((con, i) => (
                      <div key={i} className="flex items-start gap-1 text-destructive">
                        <X className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-2 border-t text-xs text-center">
                    <div className="text-muted-foreground">DIY: {floor.diyDifficulty}</div>
                    <div className="font-medium text-primary">{floor.resaleImpact}</div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="font-semibold">Best for Bedrooms</div>
                <div className="text-muted-foreground">🧶 Carpet</div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="font-semibold">Best for Pets</div>
                <div className="text-muted-foreground">💧 Vinyl/LVP</div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="font-semibold">Best Value</div>
                <div className="text-muted-foreground">📐 Laminate</div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="font-semibold">Best Investment</div>
                <div className="text-muted-foreground">🪵 Hardwood</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};