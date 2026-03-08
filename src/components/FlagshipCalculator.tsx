import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Download, Printer, Plus, Trash2, Settings, ChevronRight } from "lucide-react";

// ─── Pricing Data ───────────────────────────────────────────────

const qualityTiers = {
  budget:   { label: 'Budget',   range: '$2–$3/sq ft', materialLow: 2.00, materialHigh: 3.00, installLow: 0.50, installHigh: 0.80, paddingLow: 0.50, paddingHigh: 0.65 },
  standard: { label: 'Standard', range: '$3–$5/sq ft', materialLow: 3.00, materialHigh: 5.00, installLow: 0.80, installHigh: 1.30, paddingLow: 0.65, paddingHigh: 0.85 },
  premium:  { label: 'Premium',  range: '$5–$9/sq ft', materialLow: 5.00, materialHigh: 9.00, installLow: 1.30, installHigh: 2.00, paddingLow: 0.85, paddingHigh: 1.25 },
};

const retailerMultipliers: Record<string, { name: string; multiplier: number }> = {
  'home-depot': { name: 'Home Depot', multiplier: 1.0 },
  'lowes':      { name: "Lowe's",     multiplier: 0.95 },
  'costco':     { name: 'Costco',     multiplier: 0.85 },
  'menards':    { name: 'Menards',    multiplier: 0.90 },
  'local':      { name: 'Local Contractor', multiplier: 0.80 },
};

const regionalMultipliers: Record<string, { name: string; multiplier: number }> = {
  northeast: { name: 'Northeast',     multiplier: 1.25 },
  west:      { name: 'West Coast',    multiplier: 1.20 },
  southeast: { name: 'Southeast',     multiplier: 1.00 },
  midwest:   { name: 'Midwest',       multiplier: 0.90 },
  southwest: { name: 'Southwest',     multiplier: 1.05 },
  mountain:  { name: 'Mountain West', multiplier: 1.10 },
};

const paddingTypes: Record<string, { name: string; price: number }> = {
  basic:    { name: 'Basic Foam',       price: 0.65 },
  standard: { name: 'Standard Pad',     price: 0.85 },
  premium:  { name: 'Premium Cushion',  price: 1.25 },
  moisture: { name: 'Moisture Barrier', price: 1.45 },
};

const quickPresets = [
  { label: '10×10', l: 10, w: 10 },
  { label: '10×12', l: 10, w: 12 },
  { label: '12×12', l: 12, w: 12 },
  { label: '15×15', l: 15, w: 15 },
  { label: '20×20', l: 20, w: 20 },
];

// ─── Types ──────────────────────────────────────────────────────

interface Room { name: string; length: string; width: string; }

interface Estimate {
  totalSqFt: number;
  totalSqYd: number;
  carpetLow: number;
  carpetHigh: number;
  paddingLow: number;
  paddingHigh: number;
  installLow: number;
  installHigh: number;
  stairsCost: number;
  removalCost: number;
  furnitureCost: number;
  grandLow: number;
  grandHigh: number;
  typical: number;
}

// ─── Component ──────────────────────────────────────────────────

export const FlagshipCalculator = () => {
  // Core inputs
  const [length, setLength] = useState('12');
  const [width, setWidth] = useState('12');
  const [quality, setQuality] = useState<'budget' | 'standard' | 'premium'>('standard');
  const [installMode, setInstallMode] = useState<'professional' | 'diy'>('professional');
  const [zipCode, setZipCode] = useState('');

  // Stairs
  const [includeStairs, setIncludeStairs] = useState(false);
  const [stairCount, setStairCount] = useState('13');
  const [stairType, setStairType] = useState<'straight' | 'lshaped'>('straight');

  // Multi-room
  const [rooms, setRooms] = useState<Room[]>([
    { name: 'Bedroom 1', length: '12', width: '12' },
    { name: 'Bedroom 2', length: '10', width: '12' },
  ]);

  // Advanced
  const [wastePercentage, setWastePercentage] = useState<number[]>([10]);
  const [paddingType, setPaddingType] = useState('standard');
  const [includeRemoval, setIncludeRemoval] = useState(false);
  const [includeFurniture, setIncludeFurniture] = useState(false);
  const [retailer, setRetailer] = useState('');
  const [region, setRegion] = useState('midwest');
  const [isBasement, setIsBasement] = useState(false);

  // Tab state
  const [activeTab, setActiveTab] = useState('single');

  // Result
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  // ─── Calculation ────────────────────────────────────────────

  const calculate = useCallback(() => {
    const tier = qualityTiers[quality];
    const waste = 1 + wastePercentage[0] / 100;
    const retMul = retailer ? (retailerMultipliers[retailer]?.multiplier ?? 1) : 1;
    const regMul = regionalMultipliers[region]?.multiplier ?? 1;
    const baseMul = isBasement ? 1.15 : 1;

    let baseSqFt = 0;

    if (activeTab === 'single') {
      const l = parseFloat(length) || 0;
      const w = parseFloat(width) || 0;
      baseSqFt = l * w;
    } else {
      // multi or combo
      rooms.forEach(r => {
        const l = parseFloat(r.length) || 0;
        const w = parseFloat(r.width) || 0;
        baseSqFt += l * w;
      });
    }

    if (baseSqFt <= 0 && !includeStairs) return;

    const adjSqFt = baseSqFt * waste;

    const carpetLow  = adjSqFt * tier.materialLow  * retMul;
    const carpetHigh = adjSqFt * tier.materialHigh * retMul;

    const pad = paddingTypes[paddingType]?.price ?? 0.85;
    const paddingLow  = adjSqFt * tier.paddingLow  * retMul * baseMul;
    const paddingHigh = adjSqFt * tier.paddingHigh * retMul * baseMul;

    const installLow  = installMode === 'professional' ? adjSqFt * tier.installLow  * regMul * baseMul * retMul : 0;
    const installHigh = installMode === 'professional' ? adjSqFt * tier.installHigh * regMul * baseMul * retMul : 0;

    // Stairs
    const showStairs = (activeTab === 'combo' || (activeTab === 'single' && includeStairs));
    const steps = showStairs ? (parseInt(stairCount) || 0) : 0;
    const stairLow = steps * 20;
    const stairHigh = steps * 70;
    const stairTypeMul = stairType === 'lshaped' ? 1.3 : 1;
    const stairsCostLow = stairLow * stairTypeMul * retMul;
    const stairsCostHigh = stairHigh * stairTypeMul * retMul;

    const removalCost = includeRemoval ? adjSqFt * 1.50 : 0;
    const furnitureCost = includeFurniture ? 100 * retMul : 0;

    const grandLow  = carpetLow  + paddingLow  + installLow  + stairsCostLow  + removalCost + furnitureCost;
    const grandHigh = carpetHigh + paddingHigh + installHigh + stairsCostHigh + removalCost + furnitureCost;

    setEstimate({
      totalSqFt: baseSqFt,
      totalSqYd: baseSqFt / 9,
      carpetLow, carpetHigh,
      paddingLow, paddingHigh,
      installLow, installHigh,
      stairsCost: (stairsCostLow + stairsCostHigh) / 2,
      removalCost,
      furnitureCost,
      grandLow,
      grandHigh,
      typical: (grandLow + grandHigh) / 2,
    });
  }, [length, width, quality, installMode, includeStairs, stairCount, stairType, rooms, wastePercentage, paddingType, includeRemoval, includeFurniture, retailer, region, isBasement, activeTab]);

  // Auto-calculate on input change
  useEffect(() => { calculate(); }, [calculate]);

  // ─── Multi-room helpers ─────────────────────────────────────

  const addRoom = () => setRooms(prev => [...prev, { name: `Room ${prev.length + 1}`, length: '12', width: '10' }]);
  const removeRoom = (i: number) => setRooms(prev => prev.filter((_, idx) => idx !== i));
  const updateRoom = (i: number, field: keyof Room, value: string) => {
    setRooms(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: value } : r));
  };

  // ─── PDF / Print ────────────────────────────────────────────

  const downloadPDF = async () => {
    if (!estimate) return;
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text('Carpet Installation Cost Estimate 2026', 20, 30);
    pdf.setFontSize(12);
    const lines = [
      `Date: ${new Date().toLocaleDateString()}`,
      `Total Area: ${estimate.totalSqFt.toFixed(0)} sq ft (${estimate.totalSqYd.toFixed(1)} sq yd)`,
      `Quality: ${qualityTiers[quality].label}`,
      `Installation: ${installMode === 'professional' ? 'Professional' : 'DIY'}`,
      zipCode ? `ZIP Code: ${zipCode}` : '',
      '',
      'Cost Breakdown:',
      `Carpet Material: $${estimate.carpetLow.toFixed(0)} – $${estimate.carpetHigh.toFixed(0)}`,
      `Padding: $${estimate.paddingLow.toFixed(0)} – $${estimate.paddingHigh.toFixed(0)}`,
      estimate.installLow > 0 ? `Installation Labor: $${estimate.installLow.toFixed(0)} – $${estimate.installHigh.toFixed(0)}` : '',
      estimate.stairsCost > 0 ? `Stairs: ~$${estimate.stairsCost.toFixed(0)}` : '',
      estimate.removalCost > 0 ? `Old Carpet Removal: $${estimate.removalCost.toFixed(0)}` : '',
      estimate.furnitureCost > 0 ? `Furniture Moving: $${estimate.furnitureCost.toFixed(0)}` : '',
      '',
      `TOTAL: $${estimate.grandLow.toFixed(0)} – $${estimate.grandHigh.toFixed(0)}`,
      `Typical: $${estimate.typical.toFixed(0)}`,
    ].filter(Boolean);
    lines.forEach((line, i) => pdf.text(line, 20, 50 + i * 7));
    pdf.save('carpet-cost-estimate-2026.pdf');
  };

  // ─── Shared Inputs ──────────────────────────────────────────

  const renderQualityAndInstall = () => (
    <div className="space-y-4">
      {/* Quality Tier */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold">Carpet Quality</Label>
        <RadioGroup value={quality} onValueChange={(v) => setQuality(v as typeof quality)} className="grid grid-cols-3 gap-2">
          {Object.entries(qualityTiers).map(([key, tier]) => (
            <Label
              key={key}
              htmlFor={`q-${key}`}
              className={`flex flex-col items-center gap-1 rounded-lg border-2 p-3 cursor-pointer transition-all text-center ${quality === key ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
            >
              <RadioGroupItem value={key} id={`q-${key}`} className="sr-only" />
              <span className="font-semibold text-sm">{tier.label}</span>
              <span className="text-xs text-muted-foreground">{tier.range}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Installation Mode */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold">Installation</Label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant={installMode === 'professional' ? 'default' : 'outline'}
            onClick={() => setInstallMode('professional')}
            className="text-sm"
          >
            Professional (default)
          </Button>
          <Button
            type="button"
            variant={installMode === 'diy' ? 'default' : 'outline'}
            onClick={() => setInstallMode('diy')}
            className="text-sm"
          >
            DIY (materials only)
          </Button>
        </div>
      </div>

      {/* ZIP Code */}
      <div className="space-y-1">
        <Label htmlFor="zip" className="text-sm">ZIP Code <span className="text-muted-foreground">(optional)</span></Label>
        <Input id="zip" placeholder="e.g. 75201" value={zipCode} onChange={e => setZipCode(e.target.value)} className="max-w-[140px]" maxLength={5} />
      </div>
    </div>
  );

  const renderStairsInput = () => (
    <div className="space-y-3 p-4 rounded-lg border border-border bg-secondary/20">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-sm">Number of Steps</Label>
          <Input type="number" value={stairCount} onChange={e => setStairCount(e.target.value)} placeholder="13" min="1" max="50" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Stair Type</Label>
          <Select value={stairType} onValueChange={(v) => setStairType(v as typeof stairType)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="straight">Straight</SelectItem>
              <SelectItem value="lshaped">L-Shaped / Turning</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderAdvancedOptions = () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="advanced" className="border-none">
        <AccordionTrigger className="text-sm text-muted-foreground hover:no-underline py-2">
          <span className="flex items-center gap-1"><Settings className="h-3.5 w-3.5" /> Advanced Options</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
          {/* Waste */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Label>Waste Factor</Label>
              <Badge variant="outline">{wastePercentage[0]}%</Badge>
            </div>
            <Slider value={wastePercentage} onValueChange={setWastePercentage} min={5} max={20} step={1} />
          </div>

          {/* Padding */}
          <div className="space-y-1">
            <Label className="text-sm">Padding Type</Label>
            <Select value={paddingType} onValueChange={setPaddingType}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(paddingTypes).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v.name} (${v.price}/sq ft)</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Retailer */}
          <div className="space-y-1">
            <Label className="text-sm">Retailer</Label>
            <Select value={retailer} onValueChange={setRetailer}>
              <SelectTrigger><SelectValue placeholder="Any / National average" /></SelectTrigger>
              <SelectContent>
                {Object.entries(retailerMultipliers).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Region */}
          <div className="space-y-1">
            <Label className="text-sm">Region</Label>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(regionalMultipliers).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={includeRemoval} onChange={e => setIncludeRemoval(e.target.checked)} className="rounded" />
              Old carpet removal (+$1.50/sq ft)
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={includeFurniture} onChange={e => setIncludeFurniture(e.target.checked)} className="rounded" />
              Furniture moving (+$100)
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={isBasement} onChange={e => setIsBasement(e.target.checked)} className="rounded" />
              Basement installation (+15% moisture protection)
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );

  // ─── Results Card ───────────────────────────────────────────

  const renderResults = () => {
    if (!estimate || (estimate.totalSqFt <= 0 && estimate.stairsCost <= 0)) return null;

    const sizeLabel = activeTab === 'single'
      ? `${length}×${width}`
      : `${estimate.totalSqFt.toFixed(0)} sq ft`;

    const zipLabel = zipCode ? ` in ${zipCode}` : '';

    return (
      <Card className="border-primary/30 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg md:text-xl text-center">
            Estimated cost to carpet your {sizeLabel} {activeTab === 'single' ? 'room' : 'home'}{zipLabel}:
          </CardTitle>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-primary">
              ${estimate.grandLow.toFixed(0)}–${estimate.grandHigh.toFixed(0)}
            </span>
            <div className="text-sm text-muted-foreground mt-1">
              {installMode === 'professional' ? 'materials + installation' : 'materials only'}
            </div>
          </div>
          <div className="text-center">
            <Badge className="text-base px-4 py-1 bg-primary/10 text-primary border-primary/30">
              Typical: <strong className="ml-1">${estimate.typical.toFixed(0)}</strong>
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Breakdown Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {estimate.totalSqFt > 0 && (
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-lg font-bold text-foreground">{estimate.totalSqFt.toFixed(0)} sq ft</div>
                <div className="text-xs text-muted-foreground">{estimate.totalSqYd.toFixed(1)} sq yd</div>
              </div>
            )}
            <div className="text-center p-3 bg-secondary/30 rounded-lg">
              <div className="text-lg font-bold text-foreground">${estimate.carpetLow.toFixed(0)}–${estimate.carpetHigh.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">Carpet Material</div>
            </div>
            <div className="text-center p-3 bg-secondary/30 rounded-lg">
              <div className="text-lg font-bold text-foreground">${estimate.paddingLow.toFixed(0)}–${estimate.paddingHigh.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">Padding</div>
            </div>
            {estimate.installLow > 0 && (
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-lg font-bold text-foreground">${estimate.installLow.toFixed(0)}–${estimate.installHigh.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">Installation Labor</div>
              </div>
            )}
            {estimate.stairsCost > 0 && (
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-lg font-bold text-foreground">~${estimate.stairsCost.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">Stairs ({stairCount} steps)</div>
              </div>
            )}
            {(estimate.removalCost > 0 || estimate.furnitureCost > 0) && (
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="text-lg font-bold text-foreground">${(estimate.removalCost + estimate.furnitureCost).toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">Additional Services</div>
              </div>
            )}
          </div>

          {/* Retailer mini-comparison */}
          {estimate.totalSqFt > 0 && (
            <div className="pt-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Estimated by retailer for this size:</p>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {['lowes', 'home-depot', 'costco'].map(ret => {
                  const mul = retailerMultipliers[ret].multiplier;
                  const low = estimate.grandLow * mul / (retailer ? retailerMultipliers[retailer]?.multiplier ?? 1 : 1);
                  const high = estimate.grandHigh * mul / (retailer ? retailerMultipliers[retailer]?.multiplier ?? 1 : 1);
                  return (
                    <div key={ret} className="p-2 rounded border border-border">
                      <div className="font-semibold">{retailerMultipliers[ret].name}</div>
                      <div className="text-muted-foreground">${low.toFixed(0)}–${high.toFixed(0)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Narrative */}
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            This estimate includes carpet, padding{installMode === 'professional' ? ', and professional installation' : ''} based on typical US prices in 2026. Actual quotes may vary by brand, store, and subfloor condition.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Button variant="outline" size="sm" onClick={downloadPDF}>
              <Download className="h-3.5 w-3.5 mr-1" /> Download PDF
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Printer className="h-3.5 w-3.5 mr-1" /> Print Estimate
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  // ─── Render ─────────────────────────────────────────────────

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="calculator-card">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl md:text-2xl">Carpet & Installation Cost Calculator</CardTitle>
          </div>
          <CardDescription className="text-sm max-w-2xl mx-auto">
            Enter your room size and stairs — get an instant carpet + padding + installation cost estimate.
            Compare <a href="https://www.lowes.com/l/floors/carpet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lowe's</a>,{' '}
            <a href="https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Home Depot</a>, and{' '}
            <a href="https://www.costco.com/carpet-flooring.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Costco</a> prices.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3 h-auto">
              <TabsTrigger value="single" className="text-xs sm:text-sm py-2">Single Room</TabsTrigger>
              <TabsTrigger value="multi" className="text-xs sm:text-sm py-2">Multi-Room</TabsTrigger>
              <TabsTrigger value="combo" className="text-xs sm:text-sm py-2">Rooms + Stairs</TabsTrigger>
            </TabsList>

            {/* ── Tab 1: Single Room ─────────────────── */}
            <TabsContent value="single" className="space-y-4 mt-4">
              {/* Quick presets */}
              <div className="space-y-1">
                <Label className="text-sm">Quick Room Sizes</Label>
                <div className="flex flex-wrap gap-2">
                  {quickPresets.map(p => (
                    <Button key={p.label} variant="outline" size="sm" className="text-xs"
                      onClick={() => { setLength(p.l.toString()); setWidth(p.w.toString()); }}>
                      {p.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="single-l" className="text-sm">Length (ft)</Label>
                  <Input id="single-l" type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="12" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="single-w" className="text-sm">Width (ft)</Label>
                  <Input id="single-w" type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="12" />
                </div>
              </div>

              {/* Include stairs toggle */}
              <label className="flex items-center gap-2 text-sm cursor-pointer font-medium">
                <input type="checkbox" checked={includeStairs} onChange={e => setIncludeStairs(e.target.checked)} className="rounded" />
                Include stairs?
              </label>
              {includeStairs && renderStairsInput()}

              {renderQualityAndInstall()}
              {renderAdvancedOptions()}
            </TabsContent>

            {/* ── Tab 2: Multiple Rooms ──────────────── */}
            <TabsContent value="multi" className="space-y-4 mt-4">
              {rooms.map((room, i) => (
                <div key={i} className="flex items-end gap-2">
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs text-muted-foreground">Room Name</Label>
                    <Input value={room.name} onChange={e => updateRoom(i, 'name', e.target.value)} className="text-sm" />
                  </div>
                  <div className="w-20 space-y-1">
                    <Label className="text-xs text-muted-foreground">Length</Label>
                    <Input type="number" value={room.length} onChange={e => updateRoom(i, 'length', e.target.value)} />
                  </div>
                  <div className="w-20 space-y-1">
                    <Label className="text-xs text-muted-foreground">Width</Label>
                    <Input type="number" value={room.width} onChange={e => updateRoom(i, 'width', e.target.value)} />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeRoom(i)} disabled={rooms.length <= 1}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addRoom} className="w-full">
                <Plus className="h-4 w-4 mr-1" /> Add Room
              </Button>

              {renderQualityAndInstall()}
              {renderAdvancedOptions()}
            </TabsContent>

            {/* ── Tab 3: Rooms + Stairs ──────────────── */}
            <TabsContent value="combo" className="space-y-4 mt-4">
              {rooms.map((room, i) => (
                <div key={i} className="flex items-end gap-2">
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs text-muted-foreground">Room Name</Label>
                    <Input value={room.name} onChange={e => updateRoom(i, 'name', e.target.value)} className="text-sm" />
                  </div>
                  <div className="w-20 space-y-1">
                    <Label className="text-xs text-muted-foreground">Length</Label>
                    <Input type="number" value={room.length} onChange={e => updateRoom(i, 'length', e.target.value)} />
                  </div>
                  <div className="w-20 space-y-1">
                    <Label className="text-xs text-muted-foreground">Width</Label>
                    <Input type="number" value={room.width} onChange={e => updateRoom(i, 'width', e.target.value)} />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeRoom(i)} disabled={rooms.length <= 1}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addRoom} className="w-full">
                <Plus className="h-4 w-4 mr-1" /> Add Room
              </Button>

              <Separator />
              <Label className="text-sm font-semibold">Stairs</Label>
              {renderStairsInput()}

              {renderQualityAndInstall()}
              {renderAdvancedOptions()}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Results */}
      {renderResults()}

      {/* Secondary tools bridge */}
      <div className="flex flex-wrap justify-center gap-4 text-sm pt-2">
        <a href="#stair-carpet-calculator" className="text-primary hover:underline flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" /> Need stairs only?
        </a>
        <a href="#multi-room" className="text-primary hover:underline flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" /> Whole-house estimate
        </a>
        <a href="#comparison-tool" className="text-primary hover:underline flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" /> Compare retailers
        </a>
      </div>
    </div>
  );
};
