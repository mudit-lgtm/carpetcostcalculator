import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, MapPin, Clock } from "lucide-react";

export const ConversionTables = () => {
  const conversionData = [
    { sqft: 100, sqyd: 11.1, sqm: 9.3, cost_low: 350, cost_high: 650 },
    { sqft: 200, sqyd: 22.2, sqm: 18.6, cost_low: 700, cost_high: 1300 },
    { sqft: 300, sqyd: 33.3, sqm: 27.9, cost_low: 1050, cost_high: 1950 },
    { sqft: 500, sqyd: 55.6, sqm: 46.5, cost_low: 1750, cost_high: 3250 },
    { sqft: 1000, sqyd: 111.1, sqm: 92.9, cost_low: 3500, cost_high: 6500 }
  ];

  const regionalPricing = [
    { region: "Northeast", multiplier: "1.2x - 1.4x", note: "NYC, Boston highest" },
    { region: "West Coast", multiplier: "1.15x - 1.3x", note: "SF, LA, Seattle premium" },
    { region: "Southeast", multiplier: "0.9x - 1.1x", note: "Competitive pricing" },
    { region: "Midwest", multiplier: "0.85x - 1.0x", note: "Best value region" },
    { region: "Southwest", multiplier: "0.95x - 1.15x", note: "Varies by city" },
    { region: "Mountain West", multiplier: "1.0x - 1.2x", note: "Denver, Salt Lake higher" }
  ];

  const carpetLifespan = [
    { type: "Budget Polyester", years: "5-8", annual_cost: "$0.50-1.30", traffic: "Low" },
    { type: "Mid-Range Nylon", years: "8-12", annual_cost: "$0.46-1.13", traffic: "Medium" },
    { type: "Premium Nylon", years: "12-18", annual_cost: "$0.31-0.75", traffic: "High" },
    { type: "Wool Carpet", years: "15-25", annual_cost: "$0.34-1.07", traffic: "Medium-High" },
    { type: "Commercial Berber", years: "10-15", annual_cost: "$0.33-0.85", traffic: "Very High" }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Calculator className="h-8 w-8 text-primary" />
          Conversion Tables & Regional Pricing
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Convert between measurement units, understand regional pricing variations, 
          and calculate long-term carpet value with our comprehensive reference tables.
        </p>
      </div>

      {/* Unit Conversion Table */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-2xl">Carpet Measurement Conversions</CardTitle>
          <p className="text-muted-foreground">Convert between square feet, square yards, and square meters</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Square Feet</th>
                  <th className="text-left py-3 px-4 font-semibold">Square Yards</th>
                  <th className="text-left py-3 px-4 font-semibold">Square Meters</th>
                  <th className="text-left py-3 px-4 font-semibold">Est. Cost Range</th>
                </tr>
              </thead>
              <tbody>
                {conversionData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 font-medium text-primary">{row.sqft} sq ft</td>
                    <td className="py-4 px-4">{row.sqyd} sq yd</td>
                    <td className="py-4 px-4">{row.sqm} sq m</td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary" className="font-semibold">
                        ${row.cost_low.toLocaleString()} - ${row.cost_high.toLocaleString()}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-primary-light/20 rounded-lg">
            <h4 className="font-semibold mb-2">Quick Conversion Formulas:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Sq Ft → Sq Yd:</span> Divide by 9
              </div>
              <div>
                <span className="font-medium">Sq Ft → Sq M:</span> Multiply by 0.0929
              </div>
              <div>
                <span className="font-medium">Sq Yd → Sq Ft:</span> Multiply by 9
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional Pricing Variations */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            Regional Labor Cost Variations
          </CardTitle>
          <p className="text-muted-foreground">How location affects carpet installation pricing across the US</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalPricing.map((region, index) => (
              <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{region.region}</h4>
                  <Badge variant={region.multiplier.includes('1.2x') || region.multiplier.includes('1.3x') || region.multiplier.includes('1.4x') ? 'destructive' : 
                               region.multiplier.includes('0.8') || region.multiplier.includes('0.9') ? 'default' : 'secondary'}>
                    {region.multiplier}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{region.note}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-primary-light/20 rounded-lg">
            <p className="text-sm">
              <span className="font-medium">Base calculation:</span> Use our calculator's standard pricing, 
              then multiply by your region's factor. Urban areas within each region typically cost 10-20% more than suburban/rural areas.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Carpet Lifespan & Annual Cost */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Carpet Lifespan & Annual Cost Analysis
          </CardTitle>
          <p className="text-muted-foreground">Calculate the true value of your carpet investment over time</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Carpet Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Expected Lifespan</th>
                  <th className="text-left py-3 px-4 font-semibold">Annual Cost/sq ft</th>
                  <th className="text-left py-3 px-4 font-semibold">Best Traffic Level</th>
                </tr>
              </thead>
              <tbody>
                {carpetLifespan.map((carpet, index) => (
                  <tr key={index} className="border-b hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 font-medium">{carpet.type}</td>
                    <td className="py-4 px-4 text-primary font-semibold">{carpet.years} years</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="font-semibold">
                        {carpet.annual_cost}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={carpet.traffic === 'Very High' ? 'default' : 
                                   carpet.traffic === 'High' || carpet.traffic === 'Medium-High' ? 'secondary' : 'outline'}>
                        {carpet.traffic}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-primary-light/20 rounded-lg">
            <h4 className="font-semibold mb-2">Value Calculation Tips:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Higher initial investment often means lower annual cost</li>
              <li>• Consider maintenance costs - some carpets require professional cleaning more frequently</li>
              <li>• Traffic level significantly affects lifespan - choose accordingly</li>
              <li>• Quality padding can extend carpet life by 50% or more</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};