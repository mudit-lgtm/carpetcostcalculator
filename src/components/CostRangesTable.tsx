import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, DollarSign, Info } from "lucide-react";

export const CostRangesTable = () => {
  const carpetTypes = [
    {
      type: "Polyester",
      priceRange: "$2.50 - $4.00",
      installation: "$1.50 - $2.50",
      total: "$4.00 - $6.50",
      durability: "Good",
      bestFor: "Low-traffic areas, bedrooms",
      notes: "Budget-friendly, stain-resistant"
    },
    {
      type: "Nylon",
      priceRange: "$3.50 - $6.00",
      installation: "$2.00 - $3.00",
      total: "$5.50 - $9.00",
      durability: "Excellent",
      bestFor: "High-traffic areas, living rooms",
      notes: "Most durable, easy to clean"
    },
    {
      type: "Wool",
      priceRange: "$6.00 - $12.00",
      installation: "$2.50 - $4.00",
      total: "$8.50 - $16.00",
      durability: "Very Good",
      bestFor: "Luxury areas, formal rooms",
      notes: "Natural, premium feel, excellent insulation"
    },
    {
      type: "Olefin/Polypropylene",
      priceRange: "$2.00 - $3.50",
      installation: "$1.50 - $2.25",
      total: "$3.50 - $5.75",
      durability: "Fair",
      bestFor: "Outdoor, basement areas",
      notes: "Moisture-resistant, fade-resistant"
    },
    {
      type: "Berber",
      priceRange: "$3.00 - $5.50",
      installation: "$2.00 - $3.00",
      total: "$5.00 - $8.50",
      durability: "Very Good",
      bestFor: "Commercial, high-traffic residential",
      notes: "Loop pile, hides dirt well"
    }
  ];

  const laborCosts = [
    {
      type: "Basic Installation",
      cost: "$1.50 - $2.50",
      description: "Standard rooms, minimal prep work"
    },
    {
      type: "Complex Installation",
      cost: "$2.50 - $4.00",
      description: "Stairs, patterns, multiple rooms"
    },
    {
      type: "Commercial Installation",
      cost: "$3.00 - $5.00",
      description: "Heavy-duty padding, adhesive installation"
    }
  ];

  const additionalCosts = [
    {
      service: "Carpet Padding",
      cost: "$0.50 - $1.50",
      unit: "per sq ft",
      notes: "Essential for comfort and longevity"
    },
    {
      service: "Old Carpet Removal",
      cost: "$1.00 - $2.00",
      unit: "per sq ft",
      notes: "Includes disposal fees"
    },
    {
      service: "Furniture Moving",
      cost: "$50 - $150",
      unit: "per room",
      notes: "Heavy items may cost extra"
    },
    {
      service: "Stair Installation",
      cost: "$15 - $25",
      unit: "per step",
      notes: "Includes runner and padding"
    },
    {
      service: "Baseboards/Trim",
      cost: "$2 - $5",
      unit: "per linear ft",
      notes: "New or replacement trim work"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <DollarSign className="h-8 w-8 text-green-500" />
          Average Carpet Installation Cost Calculator by Square Foot
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive pricing breakdown for different carpet types, installation complexity, 
          and additional services. All prices are per square foot unless otherwise noted.
        </p>
      </div>

      {/* Carpet Types Pricing Table */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-2xl">Carpet Material Costs by Type</CardTitle>
          <p className="text-muted-foreground">Compare material costs, installation fees, and total project expenses</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Carpet Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Material Cost/sq ft</th>
                  <th className="text-left py-3 px-4 font-semibold">Installation/sq ft</th>
                  <th className="text-left py-3 px-4 font-semibold">Total/sq ft</th>
                  <th className="text-left py-3 px-4 font-semibold">Durability</th>
                  <th className="text-left py-3 px-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {carpetTypes.map((carpet, index) => (
                  <tr key={index} className="border-b hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium">{carpet.type}</div>
                        <div className="text-sm text-muted-foreground">{carpet.notes}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-primary">{carpet.priceRange}</td>
                    <td className="py-4 px-4">{carpet.installation}</td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary" className="font-semibold">
                        {carpet.total}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={carpet.durability === 'Excellent' ? 'default' : 
                                   carpet.durability === 'Very Good' ? 'secondary' : 'outline'}>
                        {carpet.durability}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{carpet.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Labor Costs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="calculator-card">
          <CardHeader>
            <CardTitle className="text-xl">Labor Cost Estimates</CardTitle>
            <p className="text-muted-foreground">Installation costs vary by project complexity</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {laborCosts.map((labor, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                  <div>
                    <div className="font-medium">{labor.type}</div>
                    <div className="text-sm text-muted-foreground">{labor.description}</div>
                  </div>
                  <Badge variant="outline" className="font-semibold">
                    {labor.cost}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="calculator-card">
          <CardHeader>
            <CardTitle className="text-xl">Additional Services & Costs</CardTitle>
            <p className="text-muted-foreground">Extra services that may affect your total</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {additionalCosts.map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium">{service.service}</div>
                      <div className="text-sm text-muted-foreground">{service.notes}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="font-semibold">
                        {service.cost}
                      </Badge>
                      <div className="text-xs text-muted-foreground mt-1">{service.unit}</div>
                    </div>
                  </div>
                  {index < additionalCosts.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Comparison Chart */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Average Total Project Costs by Room Size
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-secondary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">10x12 Room</div>
              <div className="text-muted-foreground mb-4">120 sq ft</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Budget Option:</span>
                  <span className="font-semibold">$480 - $780</span>
                </div>
                <div className="flex justify-between">
                  <span>Mid-Range:</span>
                  <span className="font-semibold">$660 - $1,080</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium:</span>
                  <span className="font-semibold">$1,020 - $1,920</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-secondary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">12x15 Room</div>
              <div className="text-muted-foreground mb-4">180 sq ft</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Budget Option:</span>
                  <span className="font-semibold">$630 - $1,035</span>
                </div>
                <div className="flex justify-between">
                  <span>Mid-Range:</span>
                  <span className="font-semibold">$990 - $1,620</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium:</span>
                  <span className="font-semibold">$1,530 - $2,880</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-secondary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">15x20 Room</div>
              <div className="text-muted-foreground mb-4">300 sq ft</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Budget Option:</span>
                  <span className="font-semibold">$1,050 - $1,725</span>
                </div>
                <div className="flex justify-between">
                  <span>Mid-Range:</span>
                  <span className="font-semibold">$1,650 - $2,700</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium:</span>
                  <span className="font-semibold">$2,550 - $4,800</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary-light/20 rounded-lg flex items-start gap-3">
            <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium mb-1">Important Notes:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Prices include materials, basic padding, and standard installation</li>
                <li>• Additional services (stairs, furniture moving, removal) cost extra</li>
                <li>• Geographic location can affect prices by ±20%</li>
                <li>• Always get multiple quotes for accurate local pricing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};