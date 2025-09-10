import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Home, Zap } from "lucide-react";

const carpetTypes = [
  {
    name: "Berber",
    price: "$3.50/sq ft",
    durability: 5,
    comfort: 3,
    maintenance: 4,
    description: "Durable loop pile carpet, great for high-traffic areas",
    bestFor: ["Living rooms", "Hallways", "Offices"],
    icon: Shield
  },
  {
    name: "Plush",
    price: "$4.25/sq ft",
    durability: 3,
    comfort: 5,
    maintenance: 2,
    description: "Soft and luxurious feel, perfect for bedrooms",
    bestFor: ["Bedrooms", "Master suites", "Formal areas"],
    icon: Star
  },
  {
    name: "Frieze",
    price: "$3.75/sq ft",
    durability: 4,
    comfort: 4,
    maintenance: 4,
    description: "Twisted fibers hide footprints and vacuum marks",
    bestFor: ["Family rooms", "Kids' rooms", "Casual areas"],
    icon: Home
  },
  {
    name: "Textured",
    price: "$4.50/sq ft",
    durability: 4,
    comfort: 4,
    maintenance: 3,
    description: "Multi-level texture provides visual interest",
    bestFor: ["Living areas", "Dining rooms", "Bedrooms"],
    icon: Zap
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'fill-warning text-warning' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
};

export const CarpetTypeGuide = () => {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Square Foot Carpet Installation Cost Calculator - Complete Guide</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the right carpet type for your space. Each type has different characteristics
          and pricing to match your needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carpetTypes.map((carpet) => {
          const IconComponent = carpet.icon;
          return (
            <Card key={carpet.name} className="calculator-card hover:shadow-calculator transition-smooth">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-3 bg-primary-light rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{carpet.name}</CardTitle>
                <CardDescription>{carpet.description}</CardDescription>
                <Badge variant="secondary" className="text-lg font-semibold">
                  {carpet.price}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Durability</span>
                    <StarRating rating={carpet.durability} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Comfort</span>
                    <StarRating rating={carpet.comfort} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Maintenance</span>
                    <StarRating rating={carpet.maintenance} />
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Best For:</p>
                  <div className="flex flex-wrap gap-1">
                    {carpet.bestFor.map((area) => (
                      <Badge key={area} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};