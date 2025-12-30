import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ArrowUpDown, Calculator, Download, DollarSign, Ruler, Info, Lightbulb, CheckCircle } from "lucide-react";

interface CostResult {
  materialCost: number;
  laborCost: number;
  paddingCost: number;
  totalCost: number;
  pricePerStep: number;
  carpetNeeded: number;
}

export const StairCalculatorSection = () => {
  const [numberOfSteps, setNumberOfSteps] = useState(13);
  const [stairType, setStairType] = useState("straight");
  const [stairWidth, setStairWidth] = useState("36");
  const [coverageType, setCoverageType] = useState("full");
  const [carpetType, setCarpetType] = useState("mid-range");
  const [includePadding, setIncludePadding] = useState(true);
  const [includeRemoval, setIncludeRemoval] = useState(false);
  const [result, setResult] = useState<CostResult | null>(null);

  const stairTypes = [
    { value: "straight", label: "Straight Stairs", multiplier: 1.0 },
    { value: "curved", label: "Curved Stairs", multiplier: 1.4 },
    { value: "spiral", label: "Spiral Stairs", multiplier: 1.6 },
    { value: "lshaped", label: "L-Shaped Stairs", multiplier: 1.2 },
    { value: "ushaped", label: "U-Shaped Stairs", multiplier: 1.3 },
  ];

  const coverageTypes = [
    { value: "full", label: "Full Coverage (Wall to Wall)", multiplier: 1.0 },
    { value: "runner", label: "Runner (Center Strip)", multiplier: 0.65 },
    { value: "runner-rods", label: "Runner with Rods", multiplier: 0.7 },
  ];

  const carpetTypes = [
    { value: "budget", label: "Budget ($1-2/sq ft)", pricePerSqFt: 1.5 },
    { value: "mid-range", label: "Mid-Range ($2-4/sq ft)", pricePerSqFt: 3 },
    { value: "premium", label: "Premium ($4-7/sq ft)", pricePerSqFt: 5.5 },
    { value: "luxury", label: "Luxury ($7-12/sq ft)", pricePerSqFt: 9.5 },
  ];

  const stairWidths = [
    { value: "30", label: "30 inches (Narrow)" },
    { value: "36", label: "36 inches (Standard)" },
    { value: "42", label: "42 inches (Wide)" },
    { value: "48", label: "48 inches (Extra Wide)" },
  ];

  const calculateCost = () => {
    const stairTypeData = stairTypes.find(s => s.value === stairType);
    const coverageData = coverageTypes.find(c => c.value === coverageType);
    const carpetData = carpetTypes.find(c => c.value === carpetType);
    const widthInches = parseInt(stairWidth);

    if (!stairTypeData || !coverageData || !carpetData) return;

    // Calculate carpet needed (tread depth ~10" + riser height ~7.5" = ~17.5" per step)
    const sqFtPerStep = (widthInches / 12) * (17.5 / 12);
    const totalSqFt = sqFtPerStep * numberOfSteps * coverageData.multiplier;
    const carpetWithWaste = totalSqFt * 1.1; // 10% waste factor

    // Material costs
    const materialCost = carpetWithWaste * carpetData.pricePerSqFt;
    
    // Labor costs ($3-8 per step based on complexity)
    const baseLaborPerStep = 5;
    const laborCost = numberOfSteps * baseLaborPerStep * stairTypeData.multiplier;
    
    // Padding costs ($0.50-1.50 per sq ft)
    const paddingCost = includePadding ? carpetWithWaste * 1 : 0;
    
    // Old carpet removal ($1-2 per step)
    const removalCost = includeRemoval ? numberOfSteps * 1.5 : 0;
    
    const totalCost = materialCost + laborCost + paddingCost + removalCost;

    setResult({
      materialCost,
      laborCost: laborCost + removalCost,
      paddingCost,
      totalCost,
      pricePerStep: totalCost / numberOfSteps,
      carpetNeeded: carpetWithWaste,
    });
  };

  const downloadPDF = async () => {
    if (!result) return;
    
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text("Stair Carpet Installation Estimate", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 35);
    
    doc.setFontSize(14);
    doc.text("Project Details:", 20, 50);
    doc.setFontSize(11);
    doc.text(`Number of Steps: ${numberOfSteps}`, 25, 60);
    doc.text(`Stair Type: ${stairTypes.find(s => s.value === stairType)?.label}`, 25, 68);
    doc.text(`Coverage: ${coverageTypes.find(c => c.value === coverageType)?.label}`, 25, 76);
    doc.text(`Carpet Quality: ${carpetTypes.find(c => c.value === carpetType)?.label}`, 25, 84);
    doc.text(`Stair Width: ${stairWidth} inches`, 25, 92);
    
    doc.setFontSize(14);
    doc.text("Cost Breakdown:", 20, 110);
    doc.setFontSize(11);
    doc.text(`Carpet Material: $${result.materialCost.toFixed(2)}`, 25, 120);
    doc.text(`Labor & Installation: $${result.laborCost.toFixed(2)}`, 25, 128);
    doc.text(`Padding: $${result.paddingCost.toFixed(2)}`, 25, 136);
    doc.text(`Carpet Needed: ${result.carpetNeeded.toFixed(1)} sq ft`, 25, 144);
    
    doc.setFontSize(16);
    doc.text(`Total Estimated Cost: $${result.totalCost.toFixed(2)}`, 20, 160);
    doc.text(`Cost Per Step: $${result.pricePerStep.toFixed(2)}`, 20, 170);
    
    doc.setFontSize(10);
    doc.text("Generated by Carpet Cost Calculator - carpetcostcalculator.vercel.app", 20, 280);
    
    doc.save("stair-carpet-estimate.pdf");
  };

  return (
    <section id="stair-carpet-calculator" className="py-12 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowUpDown className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Stair Carpet Calculator</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate the cost to carpet your stairs including straight, curved, spiral, and L-shaped configurations. 
            Get accurate estimates for materials, labor, and installation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Stair Details
              </CardTitle>
              <CardDescription>
                Enter your stair specifications for an accurate cost estimate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Number of Steps */}
              <div className="space-y-3">
                <Label className="flex items-center justify-between">
                  <span>Number of Steps</span>
                  <span className="text-lg font-bold text-primary">{numberOfSteps}</span>
                </Label>
                <Slider
                  value={[numberOfSteps]}
                  onValueChange={(value) => setNumberOfSteps(value[0])}
                  min={3}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Average home staircase: 12-14 steps
                </p>
              </div>

              {/* Stair Type */}
              <div className="space-y-2">
                <Label>Stair Type</Label>
                <Select value={stairType} onValueChange={setStairType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stair type" />
                  </SelectTrigger>
                  <SelectContent>
                    {stairTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Stair Width */}
              <div className="space-y-2">
                <Label>Stair Width</Label>
                <Select value={stairWidth} onValueChange={setStairWidth}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select width" />
                  </SelectTrigger>
                  <SelectContent>
                    {stairWidths.map((width) => (
                      <SelectItem key={width.value} value={width.value}>
                        {width.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Coverage Type */}
              <div className="space-y-2">
                <Label>Coverage Type</Label>
                <Select value={coverageType} onValueChange={setCoverageType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    {coverageTypes.map((coverage) => (
                      <SelectItem key={coverage.value} value={coverage.value}>
                        {coverage.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Carpet Type */}
              <div className="space-y-2">
                <Label>Carpet Quality</Label>
                <Select value={carpetType} onValueChange={setCarpetType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select carpet quality" />
                  </SelectTrigger>
                  <SelectContent>
                    {carpetTypes.map((carpet) => (
                      <SelectItem key={carpet.value} value={carpet.value}>
                        {carpet.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Options */}
              <div className="space-y-3">
                <Label>Additional Options</Label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includePadding}
                      onChange={(e) => setIncludePadding(e.target.checked)}
                      className="rounded border-border"
                    />
                    <span className="text-sm">Include Padding (+$1/sq ft)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeRemoval}
                      onChange={(e) => setIncludeRemoval(e.target.checked)}
                      className="rounded border-border"
                    />
                    <span className="text-sm">Old Carpet Removal (+$1.50/step)</span>
                  </label>
                </div>
              </div>

              <Button 
                onClick={calculateCost} 
                className="w-full"
                size="lg"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Cost
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <div className="space-y-6">
            {result ? (
              <Card className="shadow-lg border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <DollarSign className="h-5 w-5" />
                    Cost Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold text-primary">
                      ${result.totalCost.toFixed(2)}
                    </div>
                    <div className="text-muted-foreground">
                      Total Estimated Cost
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-lg p-4 text-center">
                      <div className="text-xl font-semibold">${result.pricePerStep.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">Per Step</div>
                    </div>
                    <div className="bg-background rounded-lg p-4 text-center">
                      <div className="text-xl font-semibold">{result.carpetNeeded.toFixed(1)} sq ft</div>
                      <div className="text-sm text-muted-foreground">Carpet Needed</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Carpet Material</span>
                      <span className="font-medium">${result.materialCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Labor & Installation</span>
                      <span className="font-medium">${result.laborCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Padding</span>
                      <span className="font-medium">${result.paddingCost.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={downloadPDF} 
                    variant="outline" 
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF Estimate
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="py-12 text-center">
                  <Ruler className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Enter Your Stair Details</h3>
                  <p className="text-muted-foreground">
                    Fill in the form and click "Calculate Cost" to get your personalized estimate
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Info Cards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Info className="h-4 w-4 text-primary" />
                  Cost Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong>Stair Type:</strong> Curved and spiral stairs require more labor and precise cutting</p>
                <p><strong>Runner vs Full:</strong> Runners use 30-35% less carpet but need finishing edges</p>
                <p><strong>Padding:</strong> Always recommended for stairs for comfort and carpet longevity</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Choose low-pile or loop carpet for high-traffic stairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Consider pattern or darker colors to hide wear and stains</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Waterfall installation is easier than Hollywood (wrapped) style</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};