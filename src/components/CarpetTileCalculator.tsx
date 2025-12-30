import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Grid3X3, Calculator, Info } from "lucide-react";

export const CarpetTileCalculator = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [tileSize, setTileSize] = useState<string>('24');
  const [pattern, setPattern] = useState<string>('monolithic');
  const [installationType, setInstallationType] = useState<string>('peel-stick');
  const [tileGrade, setTileGrade] = useState<string>('commercial');
  const [result, setResult] = useState<{
    sqft: number;
    tilesNeeded: number;
    tilesWithWaste: number;
    materialCost: number;
    laborCost: number;
    totalCost: number;
    costPerTile: number;
  } | null>(null);

  const tileSizes = {
    '12': { name: '12" x 12"', sqftPerTile: 1 },
    '18': { name: '18" x 18"', sqftPerTile: 2.25 },
    '24': { name: '24" x 24"', sqftPerTile: 4 }
  };

  const patterns = {
    'monolithic': { name: 'Monolithic (Same Direction)', wastePercent: 5 },
    'quarter-turn': { name: 'Quarter Turn (Checkerboard)', wastePercent: 8 },
    'ashlar': { name: 'Ashlar (Brick Pattern)', wastePercent: 12 },
    'random': { name: 'Random/Mixed Colors', wastePercent: 10 }
  };

  const installationTypes = {
    'peel-stick': { name: 'Peel & Stick (DIY)', laborPerSqFt: 0.50 },
    'glue-down': { name: 'Glue-Down (Professional)', laborPerSqFt: 2.00 },
    'loose-lay': { name: 'Loose Lay', laborPerSqFt: 1.25 }
  };

  const tileGrades = {
    'residential': { name: 'Residential Grade', pricePerSqFt: 2.50, brands: 'Mohawk, Shaw' },
    'commercial': { name: 'Commercial Grade', pricePerSqFt: 4.00, brands: 'Interface, Milliken' },
    'premium': { name: 'Premium/Designer', pricePerSqFt: 7.00, brands: 'Interface FLOR, Patcraft' }
  };

  const calculateCost = () => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    if (l === 0 || w === 0) return;

    const sqft = l * w;
    const tile = tileSizes[tileSize as keyof typeof tileSizes];
    const patternData = patterns[pattern as keyof typeof patterns];
    const installation = installationTypes[installationType as keyof typeof installationTypes];
    const grade = tileGrades[tileGrade as keyof typeof tileGrades];

    const tilesNeeded = Math.ceil(sqft / tile.sqftPerTile);
    const wasteMultiplier = 1 + (patternData.wastePercent / 100);
    const tilesWithWaste = Math.ceil(tilesNeeded * wasteMultiplier);

    const materialCost = sqft * grade.pricePerSqFt * wasteMultiplier;
    const laborCost = sqft * installation.laborPerSqFt;
    const totalCost = materialCost + laborCost;

    setResult({
      sqft,
      tilesNeeded,
      tilesWithWaste,
      materialCost,
      laborCost,
      totalCost,
      costPerTile: totalCost / tilesWithWaste
    });
  };

  return (
    <section id="tile-calculator" className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="calculator-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Grid3X3 className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Carpet Tile Calculator - Modular Carpet Squares</CardTitle>
          </div>
          <CardDescription>
            Calculate costs for modular carpet tiles with different sizes, patterns, and installation methods.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Room Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tile-length">Room Length (feet)</Label>
              <Input
                id="tile-length"
                type="number"
                placeholder="15"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tile-width">Room Width (feet)</Label>
              <Input
                id="tile-width"
                type="number"
                placeholder="12"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
          </div>

          {/* Tile Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tile Size</Label>
              <Select value={tileSize} onValueChange={setTileSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(tileSizes).map(([key, tile]) => (
                    <SelectItem key={key} value={key}>
                      {tile.name} ({tile.sqftPerTile} sq ft each)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Pattern Layout</Label>
              <Select value={pattern} onValueChange={setPattern}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(patterns).map(([key, p]) => (
                    <SelectItem key={key} value={key}>
                      {p.name} (+{p.wastePercent}% waste)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Grade and Installation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tile Grade</Label>
              <Select value={tileGrade} onValueChange={setTileGrade}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(tileGrades).map(([key, grade]) => (
                    <SelectItem key={key} value={key}>
                      {grade.name} - ${grade.pricePerSqFt}/sq ft
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Installation Type</Label>
              <Select value={installationType} onValueChange={setInstallationType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(installationTypes).map(([key, type]) => (
                    <SelectItem key={key} value={key}>
                      {type.name} - ${type.laborPerSqFt}/sq ft labor
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={calculateCost} className="w-full" size="lg">
            <Calculator className="h-5 w-5 mr-2" />
            Calculate Carpet Tile Cost
          </Button>

          {/* Results */}
          {result && (
            <div className="calculator-result space-y-4">
              <h3 className="text-xl font-bold text-center">Carpet Tile Estimate</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 bg-background/50 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground">Room Size</div>
                  <div className="text-lg font-bold">{result.sqft} sq ft</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground">Tiles Needed</div>
                  <div className="text-lg font-bold">{result.tilesNeeded}</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground">With Waste</div>
                  <div className="text-lg font-bold text-warning">{result.tilesWithWaste}</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground">Cost/Tile</div>
                  <div className="text-lg font-bold">${result.costPerTile.toFixed(2)}</div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Materials</div>
                  <div className="text-lg font-bold">${result.materialCost.toFixed(2)}</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Labor</div>
                  <div className="text-lg font-bold">${result.laborCost.toFixed(2)}</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Total</div>
                  <div className="text-xl font-bold text-success">${result.totalCost.toFixed(2)}</div>
                </div>
              </div>
            </div>
          )}

          {/* Info */}
          <div className="p-4 bg-secondary/20 rounded-lg flex items-start gap-3">
            <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Why Choose Carpet Tiles?</p>
              <ul className="space-y-1">
                <li>• Easy to replace individual damaged tiles</li>
                <li>• DIY-friendly peel-and-stick options</li>
                <li>• Great for offices and commercial spaces</li>
                <li>• Create custom patterns with mixed colors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};