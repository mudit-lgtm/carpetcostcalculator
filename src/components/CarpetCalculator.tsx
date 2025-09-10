import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Home, Building2, DollarSign } from "lucide-react";

interface CalculationResult {
  squareFootage: number;
  carpetCost: number;
  installationCost: number;
  totalCost: number;
  pricePerSqFt: number;
}

export const CarpetCalculator = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [carpetType, setCarpetType] = useState<string>('');
  const [retailer, setRetailer] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('residential');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const carpetTypes = {
    berber: { name: 'Berber', price: 3.50, installation: 2.50 },
    plush: { name: 'Plush', price: 4.25, installation: 2.75 },
    frieze: { name: 'Frieze', price: 3.75, installation: 2.50 },
    textured: { name: 'Textured', price: 4.50, installation: 3.00 },
    loop: { name: 'Loop Pile', price: 3.25, installation: 2.25 },
    luxury: { name: 'Luxury', price: 6.50, installation: 3.50 }
  };

  const retailerMultipliers = {
    'home-depot': { name: 'Home Depot', multiplier: 1.0 },
    'lowes': { name: "Lowe's", multiplier: 0.95 },
    'costco': { name: 'Costco', multiplier: 0.85 },
    'local': { name: 'Local Contractor', multiplier: 0.80 }
  };

  const calculateCost = () => {
    if (!length || !width || !carpetType) return;

    const squareFootage = parseFloat(length) * parseFloat(width);
    const carpet = carpetTypes[carpetType as keyof typeof carpetTypes];
    const retailerData = retailer ? retailerMultipliers[retailer as keyof typeof retailerMultipliers] : { multiplier: 1.0 };
    
    const baseInstallation = carpet.installation;
    const commercialMultiplier = projectType === 'commercial' ? 1.25 : 1.0;
    
    const carpetCost = squareFootage * carpet.price * retailerData.multiplier;
    const installationCost = squareFootage * baseInstallation * commercialMultiplier * retailerData.multiplier;
    const totalCost = carpetCost + installationCost;
    const pricePerSqFt = totalCost / squareFootage;

    setResult({
      squareFootage,
      carpetCost,
      installationCost,
      totalCost,
      pricePerSqFt
    });
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
            <Label htmlFor="carpet-type">Carpet Type</Label>
            <Select value={carpetType} onValueChange={setCarpetType}>
              <SelectTrigger>
                <SelectValue placeholder="Select carpet type" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(carpetTypes).map(([key, carpet]) => (
                  <SelectItem key={key} value={key}>
                    {carpet.name} - ${carpet.price}/sq ft
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
        <Card className="calculator-result">
          <CardHeader>
            <CardTitle className="text-success flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Cost Estimate Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  ${result.installationCost.toFixed(0)}
                </div>
                <div className="text-sm text-muted-foreground">Installation Cost</div>
              </div>
              <div className="text-center p-4 bg-success-light rounded-lg border border-success/20">
                <div className="text-2xl font-bold text-success">
                  ${result.totalCost.toFixed(0)}
                </div>
                <div className="text-sm text-success/80">Total Cost</div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <Badge variant="secondary" className="text-base px-4 py-2">
                ${result.pricePerSqFt.toFixed(2)} per sq ft
              </Badge>
              {retailer && (
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {retailerMultipliers[retailer as keyof typeof retailerMultipliers].name} Pricing
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};