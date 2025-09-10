import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Calculator, Home, Building2, DollarSign, ArrowUpDown, Package, MapPin, Download, Trash2, Settings } from "lucide-react";

interface CalculationResult {
  squareFootage: number;
  carpetCost: number;
  installationCost: number;
  paddingCost: number;
  stairsCost: number;
  removalCost: number;
  furnitureMovingCost: number;
  totalCost: number;
  pricePerSqFt: number;
  diyComparison?: {
    materialCost: number;
    toolsCost: number;
    totalDIY: number;
    savings: number;
  };
}

export const CarpetCalculator = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [carpetType, setCarpetType] = useState<string>('');
  const [retailer, setRetailer] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('residential');
  const [paddingType, setPaddingType] = useState<string>('standard');
  const [stairs, setStairs] = useState<string>('0');
  const [region, setRegion] = useState<string>('midwest');
  const [wastePercentage, setWastePercentage] = useState<number[]>([10]);
  const [includeRemoval, setIncludeRemoval] = useState<boolean>(false);
  const [includeFurnitureMoving, setIncludeFurnitureMoving] = useState<boolean>(false);
  const [showDIYComparison, setShowDIYComparison] = useState<boolean>(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const carpetTypes = {
    polyester: { name: 'Polyester', price: 3.25, installation: 2.00, durability: 'Good' },
    nylon: { name: 'Nylon', price: 4.75, installation: 2.50, durability: 'Excellent' },
    wool: { name: 'Wool', price: 9.00, installation: 3.25, durability: 'Very Good' },
    berber: { name: 'Berber', price: 4.25, installation: 2.50, durability: 'Very Good' },
    olefin: { name: 'Olefin/Polypropylene', price: 2.75, installation: 1.85, durability: 'Fair' },
    triexta: { name: 'Triexta (SmartStrand)', price: 5.25, installation: 2.75, durability: 'Very Good' },
    ecofriendly: { name: 'Eco-Friendly', price: 5.75, installation: 2.85, durability: 'Good' }
  };

  const retailerMultipliers = {
    'home-depot': { name: 'Home Depot', multiplier: 1.0 },
    'lowes': { name: "Lowe's", multiplier: 0.95 },
    'costco': { name: 'Costco', multiplier: 0.85 },
    'menards': { name: 'Menards', multiplier: 0.90 },
    'carpet-one': { name: 'Carpet One', multiplier: 1.05 },
    'local': { name: 'Local Contractor', multiplier: 0.80 }
  };

  const paddingTypes = {
    basic: { name: 'Basic Foam', price: 0.65 },
    standard: { name: 'Standard Pad', price: 0.85 },
    premium: { name: 'Premium Cushion', price: 1.25 },
    moisture: { name: 'Moisture Barrier', price: 1.45 }
  };

  const regionalMultipliers = {
    northeast: { name: 'Northeast', multiplier: 1.25 },
    west: { name: 'West Coast', multiplier: 1.20 },
    southeast: { name: 'Southeast', multiplier: 1.00 },
    midwest: { name: 'Midwest', multiplier: 0.90 },
    southwest: { name: 'Southwest', multiplier: 1.05 },
    mountain: { name: 'Mountain West', multiplier: 1.10 }
  };

  const calculateCost = () => {
    if (!length || !width || !carpetType) return;

    const baseSquareFootage = parseFloat(length) * parseFloat(width);
    const wasteMultiplier = 1 + (wastePercentage[0] / 100);
    const squareFootage = baseSquareFootage * wasteMultiplier;
    
    const carpet = carpetTypes[carpetType as keyof typeof carpetTypes];
    const retailerData = retailer ? retailerMultipliers[retailer as keyof typeof retailerMultipliers] : { multiplier: 1.0 };
    const padding = paddingTypes[paddingType as keyof typeof paddingTypes];
    const regionData = regionalMultipliers[region as keyof typeof regionalMultipliers];
    
    const commercialMultiplier = projectType === 'commercial' ? 1.25 : 1.0;
    
    // Calculate costs
    const carpetCost = squareFootage * carpet.price * retailerData.multiplier;
    const paddingCost = squareFootage * padding.price * retailerData.multiplier;
    const installationCost = squareFootage * carpet.installation * commercialMultiplier * retailerData.multiplier * regionData.multiplier;
    
    // Additional services
    const stairsCost = parseInt(stairs) * 20 * retailerData.multiplier;
    const removalCost = includeRemoval ? squareFootage * 1.50 : 0;
    const furnitureMovingCost = includeFurnitureMoving ? 100 * retailerData.multiplier : 0;
    
    const totalCost = carpetCost + paddingCost + installationCost + stairsCost + removalCost + furnitureMovingCost;
    const pricePerSqFt = totalCost / baseSquareFootage;

    // DIY Comparison
    let diyComparison = undefined;
    if (showDIYComparison) {
      const diyMaterialCost = carpetCost + paddingCost;
      const diyToolsCost = 150; // Estimate for tools rental/purchase
      const diyTotal = diyMaterialCost + diyToolsCost + removalCost + furnitureMovingCost;
      const savings = totalCost - diyTotal;
      
      diyComparison = {
        materialCost: diyMaterialCost,
        toolsCost: diyToolsCost,
        totalDIY: diyTotal,
        savings: savings
      };
    }

    setResult({
      squareFootage: baseSquareFootage,
      carpetCost,
      installationCost,
      paddingCost,
      stairsCost,
      removalCost,
      furnitureMovingCost,
      totalCost,
      pricePerSqFt,
      diyComparison
    });
  };

  const downloadPDF = async () => {
    const { jsPDF } = await import('jspdf');
    
    if (!result) return;

    const pdf = new jsPDF();
    
    // Add header
    pdf.setFontSize(20);
    pdf.text('Carpet Installation Cost Estimate', 20, 30);
    
    // Add calculation details
    pdf.setFontSize(12);
    const details = [
      `Date: ${new Date().toLocaleDateString()}`,
      `Room Size: ${length}' x ${width}' (${result.squareFootage} sq ft)`,
      `Carpet Type: ${carpetTypes[carpetType as keyof typeof carpetTypes]?.name || carpetType}`,
      `Project Type: ${projectType}`,
      `Region: ${region}`,
      ``,
      `Cost Breakdown:`,
      `Carpet Material: $${result.carpetCost.toFixed(2)}`,
      `Installation Labor: $${result.installationCost.toFixed(2)}`,
      `Padding: $${result.paddingCost.toFixed(2)}`,
      result.stairsCost > 0 ? `Stairs: $${result.stairsCost.toFixed(2)}` : '',
      result.removalCost > 0 ? `Old Carpet Removal: $${result.removalCost.toFixed(2)}` : '',
      result.furnitureMovingCost > 0 ? `Furniture Moving: $${result.furnitureMovingCost.toFixed(2)}` : '',
      ``,
      `Total Cost: $${result.totalCost.toFixed(2)}`,
      `Price per Sq Ft: $${result.pricePerSqFt.toFixed(2)}`
    ].filter(line => line !== '');

    details.forEach((line, index) => {
      pdf.text(line, 20, 50 + (index * 7));
    });

    pdf.save('carpet-installation-estimate-2025.pdf');
  };

  const printEstimate = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="calculator-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Carpet Installation Cost Calculator</CardTitle>
          </div>
          <CardDescription>
            Get accurate estimates for carpet materials and installation costs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Room Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="length">Room Length (feet)</Label>
              <Input
                id="length"
                type="number"
                placeholder="12"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="transition-smooth"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Room Width (feet)</Label>
              <Input
                id="width"
                type="number"
                placeholder="10"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="transition-smooth"
              />
            </div>
          </div>

          {/* Carpet Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="carpet-type">Carpet Material</Label>
            <Select value={carpetType} onValueChange={setCarpetType}>
              <SelectTrigger>
                <SelectValue placeholder="Select carpet material" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(carpetTypes).map(([key, carpet]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex justify-between items-center w-full">
                      <span>{carpet.name}</span>
                      <Badge variant="outline" className="ml-2">
                        ${carpet.price}/sq ft
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Padding Selection */}
          <div className="space-y-2">
            <Label htmlFor="padding-type">Carpet Padding</Label>
            <Select value={paddingType} onValueChange={setPaddingType}>
              <SelectTrigger>
                <SelectValue placeholder="Select padding type" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(paddingTypes).map(([key, padding]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex justify-between items-center w-full">
                      <span>{padding.name}</span>
                      <Badge variant="outline" className="ml-2">
                        ${padding.price}/sq ft
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <Label>Project Type</Label>
            <div className="flex gap-2">
              <Button
                variant={projectType === 'residential' ? 'default' : 'outline'}
                onClick={() => setProjectType('residential')}
                className="flex-1"
              >
                <Home className="h-4 w-4 mr-2" />
                Residential
              </Button>
              <Button
                variant={projectType === 'commercial' ? 'default' : 'outline'}
                onClick={() => setProjectType('commercial')}
                className="flex-1"
              >
                <Building2 className="h-4 w-4 mr-2" />
                Commercial
              </Button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="stairs">Number of Stairs</Label>
              <Input
                id="stairs"
                type="number"
                placeholder="0"
                value={stairs}
                onChange={(e) => setStairs(e.target.value)}
                className="transition-smooth"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your region" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(regionalMultipliers).map(([key, regionData]) => (
                    <SelectItem key={key} value={key}>
                      {regionData.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Waste Factor Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Waste Factor: {wastePercentage[0]}%</Label>
              <Badge variant="outline">{wastePercentage[0]}% extra for cuts & seams</Badge>
            </div>
            <Slider
              value={wastePercentage}
              onValueChange={setWastePercentage}
              max={20}
              min={5}
              step={1}
              className="w-full"
            />
          </div>

          <Separator />

          {/* Extra Services */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Additional Services
            </Label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="removal"
                  checked={includeRemoval}
                  onChange={(e) => setIncludeRemoval(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="removal" className="text-sm font-medium">
                  Old carpet removal (+$1.50/sq ft)
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="furniture"
                  checked={includeFurnitureMoving}
                  onChange={(e) => setIncludeFurnitureMoving(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="furniture" className="text-sm font-medium">
                  Furniture moving (+$100)
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="diy"
                  checked={showDIYComparison}
                  onChange={(e) => setShowDIYComparison(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="diy" className="text-sm font-medium">
                  Show DIY comparison
                </label>
              </div>
            </div>
          </div>

          {/* Retailer Selection */}
          <div className="space-y-2">
            <Label htmlFor="retailer">Retailer (Optional)</Label>
            <Select value={retailer} onValueChange={setRetailer}>
              <SelectTrigger>
                <SelectValue placeholder="Select retailer for specific pricing" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(retailerMultipliers).map(([key, retailerData]) => (
                  <SelectItem key={key} value={key}>
                    {retailerData.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Calculate Button */}
          <Button 
            onClick={calculateCost} 
            className="w-full bg-primary hover:bg-primary-dark transition-smooth text-lg py-6"
            disabled={!length || !width || !carpetType}
          >
            <DollarSign className="h-5 w-5 mr-2" />
            Calculate Carpet Installation Cost
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <Card className="calculator-result">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-success flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Cost Estimate Results
                </CardTitle>
                <Button onClick={downloadPDF} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2 text-blue-500" />
                  Download PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary">
                    {result.squareFootage.toFixed(0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Square Feet</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary">
                    ${result.carpetCost.toFixed(0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Carpet Cost</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary">
                    ${result.paddingCost.toFixed(0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Padding Cost</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary">
                    ${result.installationCost.toFixed(0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Installation</div>
                </div>
              </div>

              {/* Additional costs if any */}
              {(result.stairsCost > 0 || result.removalCost > 0 || result.furnitureMovingCost > 0) && (
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold">Additional Services:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    {result.stairsCost > 0 && (
                      <div className="flex justify-between p-2 bg-secondary/20 rounded">
                        <span>Stairs ({stairs} steps)</span>
                        <span className="font-semibold">${result.stairsCost.toFixed(0)}</span>
                      </div>
                    )}
                    {result.removalCost > 0 && (
                      <div className="flex justify-between p-2 bg-secondary/20 rounded">
                        <span>Carpet Removal</span>
                        <span className="font-semibold">${result.removalCost.toFixed(0)}</span>
                      </div>
                    )}
                    {result.furnitureMovingCost > 0 && (
                      <div className="flex justify-between p-2 bg-secondary/20 rounded">
                        <span>Furniture Moving</span>
                        <span className="font-semibold">${result.furnitureMovingCost.toFixed(0)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="text-center p-6 bg-success-light rounded-lg border border-success/20">
                <div className="text-3xl font-bold text-success mb-2">
                  ${result.totalCost.toFixed(0)}
                </div>
                <div className="text-success/80 mb-2">Total Project Cost</div>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  ${result.pricePerSqFt.toFixed(2)} per sq ft
                </Badge>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                {retailer && (
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    {retailerMultipliers[retailer as keyof typeof retailerMultipliers].name} Pricing
                  </Badge>
                )}
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {regionalMultipliers[region as keyof typeof regionalMultipliers].name} Region
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {wastePercentage[0]}% Waste Factor
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* DIY Comparison */}
          {result.diyComparison && (
            <Card className="calculator-card bg-primary-light/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  DIY vs Professional Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">DIY Costs:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Materials (Carpet + Padding)</span>
                        <span>${result.diyComparison.materialCost.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tools & Supplies</span>
                        <span>${result.diyComparison.toolsCost.toFixed(0)}</span>
                      </div>
                      {result.removalCost > 0 && (
                        <div className="flex justify-between">
                          <span>Removal/Disposal</span>
                          <span>${result.removalCost.toFixed(0)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>DIY Total</span>
                        <span>${result.diyComparison.totalDIY.toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">
                      {result.diyComparison.savings > 0 ? (
                        <span className="text-success">Save ${result.diyComparison.savings.toFixed(0)}</span>
                      ) : (
                        <span className="text-destructive">Pay ${Math.abs(result.diyComparison.savings).toFixed(0)} More</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {result.diyComparison.savings > 0 ? 'with DIY installation' : 'for professional installation'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};