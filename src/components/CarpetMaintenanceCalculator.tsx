import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Wrench, Calculator, TrendingUp, AlertCircle } from "lucide-react";

export const CarpetMaintenanceCalculator = () => {
  const [initialCost, setInitialCost] = useState<string>('3000');
  const [squareFeet, setSquareFeet] = useState<string>('500');
  const [carpetQuality, setCarpetQuality] = useState<string>('mid-range');
  const [householdSize, setHouseholdSize] = useState<string>('2-3');
  const [hasPets, setHasPets] = useState<boolean>(false);
  const [trafficLevel, setTrafficLevel] = useState<string>('medium');
  const [result, setResult] = useState<{
    year5: { maintenance: number; replacement: number; total: number };
    year10: { maintenance: number; replacement: number; total: number };
    year15: { maintenance: number; replacement: number; total: number };
    monthlyAverage: number;
    replacementYear: number;
  } | null>(null);

  const carpetQualities = {
    'builder': { name: 'Builder Grade', lifespan: 5, cleaningFrequency: 1 },
    'mid-range': { name: 'Mid-Range', lifespan: 10, cleaningFrequency: 1.5 },
    'premium': { name: 'Premium', lifespan: 15, cleaningFrequency: 2 }
  };

  const householdSizes = {
    '1': { name: '1 Person', wearMultiplier: 0.7 },
    '2-3': { name: '2-3 People', wearMultiplier: 1.0 },
    '4-5': { name: '4-5 People', wearMultiplier: 1.3 },
    '6+': { name: '6+ People', wearMultiplier: 1.6 }
  };

  const trafficLevels = {
    'low': { name: 'Low Traffic', multiplier: 0.8 },
    'medium': { name: 'Medium Traffic', multiplier: 1.0 },
    'high': { name: 'High Traffic', multiplier: 1.4 }
  };

  const calculateMaintenance = () => {
    const sqft = parseFloat(squareFeet) || 500;
    const initial = parseFloat(initialCost) || 3000;
    
    const quality = carpetQualities[carpetQuality as keyof typeof carpetQualities];
    const household = householdSizes[householdSize as keyof typeof householdSizes];
    const traffic = trafficLevels[trafficLevel as keyof typeof trafficLevels];

    // Annual maintenance costs
    const deepCleaningCost = sqft * 0.35; // $0.35/sq ft for professional cleaning
    const cleaningsPerYear = quality.cleaningFrequency * household.wearMultiplier * traffic.multiplier;
    const petCleaningExtra = hasPets ? sqft * 0.15 : 0; // Extra for pet treatments
    const spotTreatments = 50 * household.wearMultiplier * traffic.multiplier;
    const protectorReapplication = (sqft * 0.20) / 2; // Every 2 years averaged

    const annualMaintenance = (deepCleaningCost * cleaningsPerYear) + petCleaningExtra + spotTreatments + protectorReapplication;

    // Adjusted lifespan based on usage
    const lifespanMultiplier = 1 / (household.wearMultiplier * traffic.multiplier * (hasPets ? 0.85 : 1));
    const adjustedLifespan = Math.round(quality.lifespan * lifespanMultiplier);
    const replacementYear = Math.max(5, Math.min(20, adjustedLifespan));

    // Calculate totals for each period
    const calculatePeriod = (years: number) => {
      const maintenance = annualMaintenance * years;
      const replacements = Math.floor(years / replacementYear);
      const replacement = replacements * initial;
      return { maintenance, replacement, total: maintenance + replacement + initial };
    };

    setResult({
      year5: calculatePeriod(5),
      year10: calculatePeriod(10),
      year15: calculatePeriod(15),
      monthlyAverage: (calculatePeriod(10).total) / 120,
      replacementYear
    });
  };

  return (
    <section id="maintenance-calculator" className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="calculator-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Wrench className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Carpet Maintenance Cost Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate long-term carpet maintenance and replacement costs over 5, 10, and 15 years.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Initial Costs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="initial-cost">Initial Carpet Cost ($)</Label>
              <Input
                id="initial-cost"
                type="number"
                value={initialCost}
                onChange={(e) => setInitialCost(e.target.value)}
                placeholder="3000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maint-sqft">Total Square Feet</Label>
              <Input
                id="maint-sqft"
                type="number"
                value={squareFeet}
                onChange={(e) => setSquareFeet(e.target.value)}
                placeholder="500"
              />
            </div>
          </div>

          {/* Usage Factors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Carpet Quality</Label>
              <Select value={carpetQuality} onValueChange={setCarpetQuality}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(carpetQualities).map(([key, q]) => (
                    <SelectItem key={key} value={key}>
                      {q.name} ({q.lifespan} yr lifespan)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Household Size</Label>
              <Select value={householdSize} onValueChange={setHouseholdSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(householdSizes).map(([key, h]) => (
                    <SelectItem key={key} value={key}>{h.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Traffic Level</Label>
              <Select value={trafficLevel} onValueChange={setTrafficLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(trafficLevels).map(([key, t]) => (
                    <SelectItem key={key} value={key}>{t.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pets */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="pets"
              checked={hasPets}
              onChange={(e) => setHasPets(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="pets" className="text-sm font-medium">
              Have pets (increases cleaning costs and reduces carpet lifespan)
            </label>
          </div>

          <Button onClick={calculateMaintenance} className="w-full" size="lg">
            <Calculator className="h-5 w-5 mr-2" />
            Calculate Long-Term Costs
          </Button>

          {/* Results */}
          {result && (
            <div className="calculator-result space-y-4">
              <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Long-Term Cost Projections
              </h3>

              <div className="p-3 bg-warning/10 rounded-lg flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span>Expected carpet replacement: Every <strong>{result.replacementYear} years</strong></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-background/50 rounded-lg text-center">
                  <Badge className="mb-2">5 Years</Badge>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maintenance:</span>
                      <span>${result.year5.maintenance.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Replacement:</span>
                      <span>${result.year5.replacement.toFixed(0)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="text-lg font-bold text-primary">
                      ${result.year5.total.toFixed(0)}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background/50 rounded-lg text-center border-2 border-primary">
                  <Badge variant="default" className="mb-2">10 Years</Badge>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maintenance:</span>
                      <span>${result.year10.maintenance.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Replacement:</span>
                      <span>${result.year10.replacement.toFixed(0)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="text-xl font-bold text-primary">
                      ${result.year10.total.toFixed(0)}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background/50 rounded-lg text-center">
                  <Badge className="mb-2">15 Years</Badge>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maintenance:</span>
                      <span>${result.year15.maintenance.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Replacement:</span>
                      <span>${result.year15.replacement.toFixed(0)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="text-lg font-bold text-primary">
                      ${result.year15.total.toFixed(0)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-sm text-muted-foreground">Average Monthly Cost (10 Year)</div>
                <div className="text-2xl font-bold text-success">${result.monthlyAverage.toFixed(2)}/month</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};