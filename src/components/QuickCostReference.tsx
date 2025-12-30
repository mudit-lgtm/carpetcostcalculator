import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Home, Building2, ArrowUpDown, Store } from "lucide-react";

export const QuickCostReference = () => {
  const roomCosts = [
    { size: "10x12", sqft: 120, budget: "$420-$540", mid: "$660-$840", premium: "$840-$1,080" },
    { size: "12x12", sqft: 144, budget: "$504-$648", mid: "$792-$1,008", premium: "$1,008-$1,296" },
    { size: "12x15", sqft: 180, budget: "$630-$810", mid: "$990-$1,260", premium: "$1,260-$1,620" },
    { size: "15x20", sqft: 300, budget: "$1,050-$1,350", mid: "$1,650-$2,100", premium: "$2,100-$2,700" },
    { size: "20x20", sqft: 400, budget: "$1,400-$1,800", mid: "$2,200-$2,800", premium: "$2,800-$3,600" },
  ];

  const sqftCosts = [
    { sqft: "300 sq ft", budget: "$1,050-$1,350", mid: "$1,650-$2,100", premium: "$2,100-$2,700" },
    { sqft: "500 sq ft", budget: "$1,750-$2,250", mid: "$2,750-$3,500", premium: "$3,500-$4,500" },
    { sqft: "700 sq ft", budget: "$2,450-$3,150", mid: "$3,850-$4,900", premium: "$4,900-$6,300" },
    { sqft: "1000 sq ft", budget: "$3,500-$4,500", mid: "$5,500-$7,000", premium: "$7,000-$9,000" },
    { sqft: "1500 sq ft", budget: "$5,250-$6,750", mid: "$8,250-$10,500", premium: "$10,500-$13,500" },
    { sqft: "2000 sq ft", budget: "$7,000-$9,000", mid: "$11,000-$14,000", premium: "$14,000-$18,000" },
  ];

  const retailerPrices = [
    { name: "Lowe's", labor: "$1.50-$3.00/sq ft", total: "$3.50-$8.00/sq ft", note: "5-10% less than Home Depot" },
    { name: "Home Depot", labor: "$1.75-$3.50/sq ft", total: "$4.00-$9.00/sq ft", note: "Starting at $0.49/sq ft promos" },
    { name: "Costco", labor: "$1.25-$2.50/sq ft", total: "$3.00-$7.00/sq ft", note: "Membership required, best value" },
    { name: "Local Contractor", labor: "$1.25-$2.75/sq ft", total: "$3.25-$7.50/sq ft", note: "15-20% lower, varies by quality" },
  ];

  const stairCosts = [
    { stairs: "10 stairs", labor: "$150-$250", total: "$230-$385" },
    { stairs: "13 stairs", labor: "$195-$325", total: "$300-$500" },
    { stairs: "15 stairs", labor: "$225-$375", total: "$345-$575" },
    { stairs: "Stairs + Landing", labor: "$245-$475", total: "$400-$800" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-8 py-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <DollarSign className="h-8 w-8 text-primary" />
          Quick Carpet Cost Reference 2026
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Instant carpet installation cost estimates for common room sizes. Use our free carpet cost calculator above for detailed personalized estimates.
        </p>
      </div>

      {/* Room Size Costs */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            Carpet Cost by Room Size (Installed)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Room Size</th>
                  <th className="text-left py-3 px-4 font-semibold">Sq Ft</th>
                  <th className="text-left py-3 px-4 font-semibold">Budget</th>
                  <th className="text-left py-3 px-4 font-semibold">Mid-Range</th>
                  <th className="text-left py-3 px-4 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {roomCosts.map((room, index) => (
                  <tr key={index} className="border-b hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-4 font-medium">{room.size}</td>
                    <td className="py-3 px-4 text-muted-foreground">{room.sqft}</td>
                    <td className="py-3 px-4"><Badge variant="outline">{room.budget}</Badge></td>
                    <td className="py-3 px-4"><Badge variant="secondary">{room.mid}</Badge></td>
                    <td className="py-3 px-4"><Badge>{room.premium}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Square Footage Costs */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Carpet Cost by Square Footage (Installed)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Area</th>
                  <th className="text-left py-3 px-4 font-semibold">Budget ($3.50-$4.50/sq ft)</th>
                  <th className="text-left py-3 px-4 font-semibold">Mid-Range ($5.50-$7.00/sq ft)</th>
                  <th className="text-left py-3 px-4 font-semibold">Premium ($7.00-$9.00/sq ft)</th>
                </tr>
              </thead>
              <tbody>
                {sqftCosts.map((cost, index) => (
                  <tr key={index} className="border-b hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-4 font-medium">{cost.sqft}</td>
                    <td className="py-3 px-4"><Badge variant="outline">{cost.budget}</Badge></td>
                    <td className="py-3 px-4"><Badge variant="secondary">{cost.mid}</Badge></td>
                    <td className="py-3 px-4"><Badge>{cost.premium}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Retailer Comparison */}
        <Card className="calculator-card">
          <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Store className="h-5 w-5 text-primary" />
            Retailer Installation Prices 2026
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {retailerPrices.map((retailer, index) => (
                <div key={index} className="p-3 bg-secondary/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{retailer.name}</span>
                    <Badge variant="secondary">{retailer.total}</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Labor: {retailer.labor}</span>
                    <span className="text-xs">{retailer.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stair Costs */}
        <Card className="calculator-card">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ArrowUpDown className="h-5 w-5 text-primary" />
              Stair Carpet Installation Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stairCosts.map((stair, index) => (
                <div key={index} className="p-3 bg-secondary/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{stair.stairs}</span>
                    <Badge variant="secondary">{stair.total}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Labor only: {stair.labor}
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground mt-2">
                * Based on $15-$25 per step for standard straight stairs
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
