import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Star, Shield, Clock, DollarSign } from "lucide-react";

export const BrandSpecificNotes = () => {
  const retailers = [
    {
      name: "Home Depot",
      icon: Building,
      pricing: "Standard Market Rates",
      installation: "Third-party contractors",
      warranty: "1-year installation warranty",
      specialOffers: "Frequent sales events, bulk discounts",
      bestFor: "DIY-friendly, wide selection",
      notes: "Installation quality varies by contractor. Good return policy.",
      priceRange: "$3.50 - $8.00/sq ft total"
    },
    {
      name: "Lowe's",
      icon: Building,
      pricing: "5-10% below Home Depot",
      installation: "Certified installer network",
      warranty: "1-year installation, lifetime stain warranty options",
      specialOffers: "Military discounts, seasonal promotions",
      bestFor: "Professional installation, competitive pricing",
      notes: "Better installation consistency. Often price-matches competitors.",
      priceRange: "$3.25 - $7.50/sq ft total"
    },
    {
      name: "Costco",
      icon: Building,
      pricing: "15-20% below market average",
      installation: "Exclusive installer partnerships",
      warranty: "2-year installation warranty",
      specialOffers: "Member-only pricing, extra warranty coverage",
      bestFor: "Best value, premium service",
      notes: "Requires membership. Limited selection but high quality options.",
      priceRange: "$2.95 - $6.75/sq ft total"
    },
    {
      name: "Carpet One",
      icon: Building,
      pricing: "Premium pricing, 5-15% above big box",
      installation: "Certified local dealers",
      warranty: "Beautiful Guarantee® - satisfaction promise",
      specialOffers: "Financing options, design consultations",
      bestFor: "Custom solutions, premium materials",
      notes: "Local dealer network. Higher prices but superior service.",
      priceRange: "$4.00 - $12.00/sq ft total"
    }
  ];

  const brands = [
    {
      name: "Mohawk",
      reputation: "Industry Leader",
      specialty: "SmartStrand technology, eco-friendly options",
      warranty: "10-25 year warranties",
      priceRange: "Mid to Premium",
      bestProducts: "SmartStrand Silk, Air.o soft carpet",
      notes: "Excellent stain resistance and durability"
    },
    {
      name: "Shaw Floors",
      reputation: "Premium Quality",
      specialty: "R2X stain resistance, recycled content",
      warranty: "10-20 year warranties",
      priceRange: "Mid to Premium",
      bestProducts: "LifeGuard waterproof carpet, Anso nylon",
      notes: "Great for pet owners, moisture protection"
    },
    {
      name: "Beaulieu",
      reputation: "Value Leader",
      specialty: "Budget-friendly options, good selection",
      warranty: "5-15 year warranties",
      priceRange: "Budget to Mid-range",
      bestProducts: "Bliss, Antigua collection",
      notes: "Best bang for buck, solid quality at lower prices"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto space-y-12 py-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Building className="h-8 w-8 text-primary" />
          Retailer & Brand Comparison Guide
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Compare pricing, installation quality, warranties, and special offers from major carpet retailers. 
          Plus insights into top carpet brands and their specialties.
        </p>
      </div>

      {/* Retailer Comparison */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center">Major Retailer Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {retailers.map((retailer) => {
            const IconComponent = retailer.icon;
            return (
              <Card key={retailer.name} className="calculator-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-light rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{retailer.name}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      {retailer.priceRange}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-muted-foreground">Pricing:</span>
                      <span className="text-right">{retailer.pricing}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-muted-foreground">Installation:</span>
                      <span className="text-right">{retailer.installation}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-muted-foreground">Warranty:</span>
                      <span className="text-right">{retailer.warranty}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-muted-foreground">Special Offers:</span>
                      <span className="text-right">{retailer.specialOffers}</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <div className="mb-2">
                      <Badge variant="outline" className="mb-2">{retailer.bestFor}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{retailer.notes}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Brand Comparison */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center">Top Carpet Brand Overview</h3>
        <div className="grid grid-cols-1 gap-6">
          {brands.map((brand, index) => (
            <Card key={brand.name} className="calculator-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    {brand.name}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{brand.reputation}</Badge>
                    <Badge variant="outline">{brand.priceRange}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-muted-foreground">Specialty: </span>
                      <span>{brand.specialty}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Warranty: </span>
                      <span>{brand.warranty}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Best Products: </span>
                      <span>{brand.bestProducts}</span>
                    </div>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">{brand.notes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Installation Package Comparison */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Installation Package Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Retailer</th>
                  <th className="text-left py-3 px-4 font-semibold">Basic Package</th>
                  <th className="text-left py-3 px-4 font-semibold">Premium Package</th>
                  <th className="text-left py-3 px-4 font-semibold">Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-secondary/20 transition-colors">
                  <td className="py-4 px-4 font-medium">Home Depot</td>
                  <td className="py-4 px-4 text-sm">Install + basic pad + removal</td>
                  <td className="py-4 px-4 text-sm">Premium pad + furniture moving + trim</td>
                  <td className="py-4 px-4">1 year</td>
                </tr>
                <tr className="border-b hover:bg-secondary/20 transition-colors">
                  <td className="py-4 px-4 font-medium">Lowe's</td>
                  <td className="py-4 px-4 text-sm">Install + standard pad + cleanup</td>
                  <td className="py-4 px-4 text-sm">Premium install + moving + disposal</td>
                  <td className="py-4 px-4">1 year + optional lifetime stain</td>
                </tr>
                <tr className="border-b hover:bg-secondary/20 transition-colors">
                  <td className="py-4 px-4 font-medium">Costco</td>
                  <td className="py-4 px-4 text-sm">Full service install + premium pad</td>
                  <td className="py-4 px-4 text-sm">White glove service + extended warranty</td>
                  <td className="py-4 px-4">2 years</td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="py-4 px-4 font-medium">Local Contractors</td>
                  <td className="py-4 px-4 text-sm">Custom quote based on needs</td>
                  <td className="py-4 px-4 text-sm">Full service with guarantees</td>
                  <td className="py-4 px-4">1-3 years typical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Money-Saving Tips */}
      <Card className="calculator-card bg-primary-light/10">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            Money-Saving Tips & Best Times to Buy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Best Times to Buy:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <span className="font-medium">Late Fall/Winter:</span> Lowest demand period</li>
                <li>• <span className="font-medium">End of Fiscal Year:</span> Clearance sales</li>
                <li>• <span className="font-medium">Memorial Day:</span> Major retailer sales</li>
                <li>• <span className="font-medium">Labor Day:</span> Back-to-school promotions</li>
                <li>• <span className="font-medium">Post-Holiday:</span> January clearances</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Money-Saving Strategies:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Get multiple quotes from different retailers</li>
                <li>• Consider end-of-roll or discontinued styles</li>
                <li>• Bundle multiple rooms for volume discounts</li>
                <li>• Ask about price matching policies</li>
                <li>• Time purchases during major sale events</li>
                <li>• Consider upgrading padding over carpet grade</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};