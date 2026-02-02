import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Home, Plus, Trash2, Calculator, Download } from "lucide-react";

interface Room {
  id: string;
  name: string;
  length: string;
  width: string;
}

export const MultiRoomCalculator = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: '1', name: 'Living Room', length: '', width: '' },
    { id: '2', name: 'Bedroom 1', length: '', width: '' }
  ]);
  const [carpetType, setCarpetType] = useState<string>('nylon');
  const [retailer, setRetailer] = useState<string>('lowes');
  const [result, setResult] = useState<{
    rooms: { name: string; sqft: number; cost: number }[];
    totalSqft: number;
    totalCost: number;
    pricePerSqFt: number;
  } | null>(null);

  const carpetTypes = {
    polyester: { name: 'Polyester', price: 3.25, installation: 2.00 },
    nylon: { name: 'Nylon', price: 4.75, installation: 2.50 },
    wool: { name: 'Wool', price: 9.00, installation: 3.25 },
    berber: { name: 'Berber', price: 4.25, installation: 2.50 },
    triexta: { name: 'Triexta (SmartStrand)', price: 5.25, installation: 2.75 }
  };

  const retailerMultipliers = {
    'home-depot': { name: 'Home Depot', multiplier: 1.0 },
    'lowes': { name: "Lowe's", multiplier: 0.95 },
    'costco': { name: 'Costco', multiplier: 0.85 },
    'local': { name: 'Local Contractor', multiplier: 0.80 }
  };

  const roomPresets = [
    'Living Room', 'Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Master Bedroom',
    'Dining Room', 'Family Room', 'Office', 'Hallway', 'Basement'
  ];

  const addRoom = () => {
    const newId = (Math.max(...rooms.map(r => parseInt(r.id))) + 1).toString();
    const usedNames = rooms.map(r => r.name);
    const availableName = roomPresets.find(n => !usedNames.includes(n)) || `Room ${newId}`;
    setRooms([...rooms, { id: newId, name: availableName, length: '', width: '' }]);
  };

  const removeRoom = (id: string) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter(r => r.id !== id));
    }
  };

  const updateRoom = (id: string, field: keyof Room, value: string) => {
    setRooms(rooms.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const calculateCost = () => {
    const carpet = carpetTypes[carpetType as keyof typeof carpetTypes];
    const retailerData = retailerMultipliers[retailer as keyof typeof retailerMultipliers];
    const paddingCost = 0.85;
    const wasteMultiplier = 1.10;

    const roomResults = rooms.map(room => {
      const length = parseFloat(room.length) || 0;
      const width = parseFloat(room.width) || 0;
      const sqft = length * width * wasteMultiplier;
      const cost = sqft * (carpet.price + carpet.installation + paddingCost) * retailerData.multiplier;
      return { name: room.name, sqft: length * width, cost };
    }).filter(r => r.sqft > 0);

    const totalSqft = roomResults.reduce((sum, r) => sum + r.sqft, 0);
    const totalCost = roomResults.reduce((sum, r) => sum + r.cost, 0);

    setResult({
      rooms: roomResults,
      totalSqft,
      totalCost,
      pricePerSqFt: totalSqft > 0 ? totalCost / totalSqft : 0
    });
  };

  const downloadPDF = async () => {
    if (!result) return;
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF();
    
    pdf.setFontSize(20);
    pdf.text('Multi-Room Carpet Estimate 2026', 20, 30);
    
    pdf.setFontSize(12);
    let y = 50;
    
    result.rooms.forEach(room => {
      pdf.text(`${room.name}: ${room.sqft} sq ft - $${room.cost.toFixed(2)}`, 20, y);
      y += 10;
    });
    
    y += 10;
    pdf.text(`Total Square Footage: ${result.totalSqft} sq ft`, 20, y);
    y += 10;
    pdf.text(`Total Cost: $${result.totalCost.toFixed(2)}`, 20, y);
    y += 10;
    pdf.text(`Price per Sq Ft: $${result.pricePerSqFt.toFixed(2)}`, 20, y);
    
    pdf.save('multi-room-carpet-estimate-2026.pdf');
  };

  return (
    <section id="multi-room" className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="calculator-card">
<CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Home className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Multi-Room Carpet Calculator - How Much Carpet Do I Need?</CardTitle>
          </div>
          <CardDescription>
            Calculate how much carpet you need for multiple rooms. Get a whole-house carpet estimate with combined totals. Perfect for answering "how much carpet do I need for my house?" Also try our <a href="#calculator" className="text-primary hover:underline">single room carpet calculator</a> or <a href="#stair-carpet-calculator" className="text-primary hover:underline">stair carpet calculator</a>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Room Inputs */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-lg font-semibold">Rooms to Carpet</Label>
              <Button variant="outline" size="sm" onClick={addRoom}>
                <Plus className="h-4 w-4 mr-1" /> Add Room
              </Button>
            </div>
            
            {rooms.map((room, index) => (
              <div key={room.id} className="grid grid-cols-12 gap-3 items-end p-3 bg-secondary/20 rounded-lg">
                <div className="col-span-12 md:col-span-4">
                  <Label htmlFor={`room-${room.id}`} className="text-sm">Room Name</Label>
                  <Select value={room.name} onValueChange={(v) => updateRoom(room.id, 'name', v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roomPresets.map(preset => (
                        <SelectItem key={preset} value={preset}>{preset}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-5 md:col-span-3">
                  <Label htmlFor={`length-${room.id}`} className="text-sm">Length (ft)</Label>
                  <Input
                    id={`length-${room.id}`}
                    type="number"
                    placeholder="12"
                    value={room.length}
                    onChange={(e) => updateRoom(room.id, 'length', e.target.value)}
                  />
                </div>
                <div className="col-span-5 md:col-span-3">
                  <Label htmlFor={`width-${room.id}`} className="text-sm">Width (ft)</Label>
                  <Input
                    id={`width-${room.id}`}
                    type="number"
                    placeholder="10"
                    value={room.width}
                    onChange={(e) => updateRoom(room.id, 'width', e.target.value)}
                  />
                </div>
                <div className="col-span-2 md:col-span-2 flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeRoom(room.id)}
                    disabled={rooms.length === 1}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Carpet and Retailer Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Carpet Type</Label>
              <Select value={carpetType} onValueChange={setCarpetType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(carpetTypes).map(([key, carpet]) => (
                    <SelectItem key={key} value={key}>
                      {carpet.name} - ${(carpet.price + carpet.installation).toFixed(2)}/sq ft
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Retailer</Label>
              <Select value={retailer} onValueChange={setRetailer}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(retailerMultipliers).map(([key, r]) => (
                    <SelectItem key={key} value={key}>
                      {r.name} {r.multiplier < 1 && `(${((1 - r.multiplier) * 100).toFixed(0)}% less)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={calculateCost} className="w-full" size="lg">
            <Calculator className="h-5 w-5 mr-2" />
            Calculate Multi-Room Estimate
          </Button>

          {/* Results */}
          {result && (
            <div className="calculator-result space-y-4">
              <h3 className="text-xl font-bold text-center">Multi-Room Carpet Estimate</h3>
              
              <div className="space-y-2">
                {result.rooms.map((room, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-background/50 rounded">
                    <span className="font-medium">{room.name}</span>
                    <div className="text-right">
                      <span className="text-muted-foreground text-sm">{room.sqft} sq ft</span>
                      <Badge variant="secondary" className="ml-2">${room.cost.toFixed(2)}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Total Area</div>
                  <div className="text-xl font-bold text-primary">{result.totalSqft} sq ft</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Per Sq Ft</div>
                  <div className="text-xl font-bold text-primary">${result.pricePerSqFt.toFixed(2)}</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
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
    </section>
  );
};