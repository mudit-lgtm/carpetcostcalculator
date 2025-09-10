import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingDown, Clock } from "lucide-react";

const retailers = [
  {
    name: "Home Depot",
    logo: "🏠",
    savings: "Standard Pricing",
    multiplier: 1.0,
    pros: [
      "Wide selection available",
      "Professional installation",
      "Price matching policy",
      "Special financing options"
    ],
    installationCost: "$2.50-$3.50/sq ft",
    rating: 4.2,
    specialty: "DIY Friendly Options"
  },
  {
    name: "Lowe's",
    logo: "🔵",
    savings: "5% Lower on Average",
    multiplier: 0.95,
    pros: [
      "Competitive pricing",
      "Quality installation network",
      "Military & veteran discounts",
      "Seasonal promotions"
    ],
    installationCost: "$2.25-$3.25/sq ft",
    rating: 4.3,
    specialty: "Value & Service Balance"
  },
  {
    name: "Costco",
    logo: "📦",
    savings: "15% Lower on Average",
    multiplier: 0.85,
    pros: [
      "Bulk pricing advantages",
      "Extended warranties",
      "Member exclusive deals",
      "High-quality options"
    ],
    installationCost: "$2.00-$2.75/sq ft",
    rating: 4.5,
    specialty: "Premium Value for Members"
  },
  {
    name: "Local Contractors",
    logo: "🔨",
    savings: "20% Lower on Average",
    multiplier: 0.80,
    pros: [
      "Personalized service",
      "Flexible scheduling",
      "Local expertise",
      "Often best pricing"
    ],
    installationCost: "$1.75-$2.50/sq ft",
    rating: 4.4,
    specialty: "Custom Solutions"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-warning text-warning" />
        ))}
        {hasHalfStar && <Star className="h-4 w-4 fill-warning/50 text-warning" />}
      </div>
      <span className="text-sm text-muted-foreground ml-1">{rating}</span>
    </div>
  );
};

export const RetailerComparison = () => {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Home Depot vs Lowe's Carpet Installation Cost Comparison</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare carpet installation costs across major retailers and local contractors
          to find the best value for your project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {retailers.map((retailer) => (
          <Card key={retailer.name} className="calculator-card hover:shadow-calculator transition-smooth relative">
            {retailer.multiplier < 1.0 && (
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="bg-success text-success-foreground">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Savings
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{retailer.logo}</div>
              <CardTitle className="text-xl">{retailer.name}</CardTitle>
              <Badge 
                variant={retailer.multiplier < 1.0 ? "default" : "secondary"}
                className="text-sm"
              >
                {retailer.savings}
              </Badge>
              <StarRating rating={retailer.rating} />
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center p-3 bg-primary-light rounded-lg">
                <div className="text-sm text-muted-foreground">Installation Cost</div>
                <div className="font-semibold text-primary">{retailer.installationCost}</div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-primary flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  {retailer.specialty}
                </p>
                
                <ul className="space-y-1">
                  {retailer.pros.map((pro, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                      <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-2 border-t text-center">
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Typical Timeline: 1-2 weeks
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="calculator-card">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">💡 Pro Tip</h3>
            <p className="text-muted-foreground">
              Always get multiple quotes and factor in warranty, service quality, 
              and timeline when choosing your installer - not just the lowest price.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};