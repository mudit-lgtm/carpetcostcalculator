import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpDown, Calculator, Download, Home, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const StairCalculator = () => {
  const [stairType, setStairType] = useState<string>('straight');
  const [numberOfStairs, setNumberOfStairs] = useState<string>('13');
  const [stairWidth, setStairWidth] = useState<string>('36');
  const [coverageType, setCoverageType] = useState<string>('full');
  const [includeLanding, setIncludeLanding] = useState<boolean>(true);
  const [landingSize, setLandingSize] = useState<string>('12');
  const [carpetType, setCarpetType] = useState<string>('nylon');
  const [result, setResult] = useState<{
    stairsCost: number;
    landingCost: number;
    materialCost: number;
    laborCost: number;
    totalCost: number;
    perStepCost: number;
  } | null>(null);

  const stairTypes = {
    straight: { name: 'Straight Stairs', laborMultiplier: 1.0 },
    'l-shaped': { name: 'L-Shaped Stairs', laborMultiplier: 1.25 },
    curved: { name: 'Curved/Spiral Stairs', laborMultiplier: 1.75 },
    winder: { name: 'Winder Stairs', laborMultiplier: 1.50 }
  };

  const coverageTypes = {
    full: { name: 'Full Coverage (Wall-to-Wall)', materialMultiplier: 1.0 },
    runner: { name: 'Stair Runner (Center)', materialMultiplier: 0.65 },
    'runner-rods': { name: 'Runner with Rods', materialMultiplier: 0.70 }
  };

  const carpetTypes = {
    polyester: { name: 'Polyester', price: 3.50 },
    nylon: { name: 'Nylon', price: 5.00 },
    wool: { name: 'Wool', price: 10.00 },
    berber: { name: 'Berber', price: 4.50 }
  };

  const widthOptions = [
    { value: '36', label: '36" (Standard)' },
    { value: '42', label: '42" (Wide)' },
    { value: '48', label: '48" (Extra Wide)' },
    { value: '60', label: '60" (Commercial)' }
  ];

  const calculateCost = () => {
    const stairs = parseInt(numberOfStairs) || 13;
    const width = parseInt(stairWidth) || 36;
    const landing = parseInt(landingSize) || 12;
    
    const stairTypeData = stairTypes[stairType as keyof typeof stairTypes];
    const coverageData = coverageTypes[coverageType as keyof typeof coverageTypes];
    const carpet = carpetTypes[carpetType as keyof typeof carpetTypes];
    
    // Calculate sq ft per step (tread + riser = ~2.5 sq ft for 36" width)
    const sqftPerStep = (width / 12) * 2.5;
    const totalStairSqft = sqftPerStep * stairs * coverageData.materialMultiplier;
    
    // Landing calculation
    const landingSqft = includeLanding ? (landing * (width / 12)) : 0;
    
    // Material costs
    const materialCost = (totalStairSqft + landingSqft) * carpet.price;
    
    // Labor costs ($15-$25 per step base, adjusted for complexity)
    const baseLabor = 20;
    const laborPerStep = baseLabor * stairTypeData.laborMultiplier;
    const laborCost = (stairs * laborPerStep) + (includeLanding ? 75 : 0);
    
    const totalCost = materialCost + laborCost;
    const perStepCost = totalCost / stairs;

    setResult({
      stairsCost: stairs * laborPerStep + (totalStairSqft * carpet.price),
      landingCost: includeLanding ? 75 + (landingSqft * carpet.price) : 0,
      materialCost,
      laborCost,
      totalCost,
      perStepCost
    });
  };

  const downloadPDF = async () => {
    if (!result) return;
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF();
    
    pdf.setFontSize(20);
    pdf.text('Stair Carpet Installation Estimate 2026', 20, 30);
    
    pdf.setFontSize(12);
    const details = [
      `Date: ${new Date().toLocaleDateString()}`,
      `Stair Type: ${stairTypes[stairType as keyof typeof stairTypes].name}`,
      `Number of Stairs: ${numberOfStairs}`,
      `Stair Width: ${stairWidth}"`,
      `Coverage: ${coverageTypes[coverageType as keyof typeof coverageTypes].name}`,
      `Landing: ${includeLanding ? 'Yes' : 'No'}`,
      `Carpet Type: ${carpetTypes[carpetType as keyof typeof carpetTypes].name}`,
      '',
      'Cost Breakdown:',
      `Material Cost: $${result.materialCost.toFixed(2)}`,
      `Labor Cost: $${result.laborCost.toFixed(2)}`,
      `Cost per Step: $${result.perStepCost.toFixed(2)}`,
      '',
      `TOTAL COST: $${result.totalCost.toFixed(2)}`
    ];

    details.forEach((line, index) => {
      pdf.text(line, 20, 50 + (index * 7));
    });

    pdf.save('stair-carpet-estimate-2026.pdf');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Stair Carpet Calculator</span>
        </nav>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
              <ArrowUpDown className="h-10 w-10 text-primary" />
              Stair Carpet Installation Cost Calculator 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate the cost to carpet stairs including straight, curved, L-shaped, and spiral staircases. 
              Get accurate estimates for runners and full coverage installations.
            </p>
          </div>

          <Card className="calculator-card">
            <CardHeader>
              <CardTitle className="text-xl">Stair Details</CardTitle>
              <CardDescription>
                Enter your stair specifications for an accurate carpet installation estimate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Stair Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Stair Type</Label>
                  <Select value={stairType} onValueChange={setStairType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(stairTypes).map(([key, type]) => (
                        <SelectItem key={key} value={key}>
                          {type.name} {type.laborMultiplier > 1 && `(+${((type.laborMultiplier - 1) * 100).toFixed(0)}% labor)`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Coverage Type</Label>
                  <Select value={coverageType} onValueChange={setCoverageType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(coverageTypes).map(([key, type]) => (
                        <SelectItem key={key} value={key}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Number of Stairs and Width */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stairs">Number of Stairs</Label>
                  <Input
                    id="stairs"
                    type="number"
                    value={numberOfStairs}
                    onChange={(e) => setNumberOfStairs(e.target.value)}
                    placeholder="13"
                  />
                  <p className="text-xs text-muted-foreground">Most homes have 13 stairs per flight</p>
                </div>
                <div className="space-y-2">
                  <Label>Stair Width</Label>
                  <Select value={stairWidth} onValueChange={setStairWidth}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {widthOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Landing */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="landing"
                    checked={includeLanding}
                    onChange={(e) => setIncludeLanding(e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="landing" className="text-sm font-medium">
                    Include Landing
                  </label>
                </div>
                {includeLanding && (
                  <div className="space-y-2">
                    <Label htmlFor="landingSize">Landing Size (sq ft)</Label>
                    <Input
                      id="landingSize"
                      type="number"
                      value={landingSize}
                      onChange={(e) => setLandingSize(e.target.value)}
                      placeholder="12"
                    />
                  </div>
                )}
              </div>

              <Separator />

              {/* Carpet Type */}
              <div className="space-y-2">
                <Label>Carpet Material</Label>
                <Select value={carpetType} onValueChange={setCarpetType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(carpetTypes).map(([key, carpet]) => (
                      <SelectItem key={key} value={key}>
                        {carpet.name} - ${carpet.price.toFixed(2)}/sq ft
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateCost} className="w-full" size="lg">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Stair Carpet Cost
              </Button>

              {/* Results */}
              {result && (
                <div className="calculator-result space-y-4">
                  <h3 className="text-xl font-bold text-center">Stair Carpet Installation Estimate</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-background/50 rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Material Cost</div>
                      <div className="text-lg font-bold">${result.materialCost.toFixed(2)}</div>
                    </div>
                    <div className="p-3 bg-background/50 rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Labor Cost</div>
                      <div className="text-lg font-bold">${result.laborCost.toFixed(2)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-background/50 rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Cost per Step</div>
                      <div className="text-lg font-bold text-primary">${result.perStepCost.toFixed(2)}</div>
                    </div>
                    <div className="p-3 bg-background/50 rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Total Cost</div>
                      <div className="text-2xl font-bold text-success">${result.totalCost.toFixed(2)}</div>
                    </div>
                  </div>

                  <Button onClick={downloadPDF} variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" /> Download PDF Estimate
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="calculator-card">
            <CardHeader>
              <CardTitle>Stair Carpet Installation Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" /> Cost Factors
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Straight stairs: $15-$25 per step</li>
                    <li>• Curved/spiral: $25-$40 per step</li>
                    <li>• Landing: $50-$150 additional</li>
                    <li>• Runner installation: 35% less material</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" /> Pro Tips
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Runners are easier to replace</li>
                    <li>• Nylon is most durable for stairs</li>
                    <li>• Add 10% for waste and cuts</li>
                    <li>• Consider non-slip padding</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/#calculator">
              <Button variant="outline" size="lg">
                <Home className="h-4 w-4 mr-2" /> Back to Main Calculator
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StairCalculator;