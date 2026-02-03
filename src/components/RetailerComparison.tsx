import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingDown, Clock, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const retailers = [
  {
    name: "Lowe's",
    logo: "🔵",
    savings: "5-10% Lower",
    multiplier: 0.95,
    pros: [
      "Competitive pricing",
      "Quality installation network",
      "Military & veteran discounts",
      "Free in-home estimates"
    ],
    installationCost: "$0.50-$2.00/sq ft",
    totalCost: "$3.50-$8.00/sq ft",
    rating: 4.3,
    specialty: "Best Value & Service",
    url: "https://www.lowes.com/l/floors/carpet"
  },
  {
    name: "Home Depot",
    logo: "🏠",
    savings: "Standard Pricing",
    multiplier: 1.0,
    pros: [
      "Wide selection available",
      "Professional installation",
      "Price matching policy",
      "$0.49/sq ft promos"
    ],
    installationCost: "$0.60-$2.10/sq ft",
    totalCost: "$4.00-$9.00/sq ft",
    rating: 4.2,
    specialty: "DIY Friendly Options",
    url: "https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m"
  },
  {
    name: "Costco",
    logo: "📦",
    savings: "15% Lower",
    multiplier: 0.85,
    pros: [
      "Bulk pricing advantages",
      "Lifetime installation warranty",
      "Shaw & Mohawk brands",
      "Free furniture moving"
    ],
    installationCost: "$0.40-$1.50/sq ft",
    totalCost: "$3.00-$7.00/sq ft",
    rating: 4.5,
    specialty: "Best for Members",
    url: "https://www.costco.com/carpet-flooring.html"
  },
  {
    name: "Local Contractors",
    logo: "🔨",
    savings: "20% Lower",
    multiplier: 0.80,
    pros: [
      "Personalized service",
      "Flexible scheduling",
      "Local expertise",
      "Often best pricing"
    ],
    installationCost: "$0.50-$1.75/sq ft",
    totalCost: "$3.25-$7.50/sq ft",
    rating: 4.4,
    specialty: "Custom Solutions",
    url: "#comparison-tool"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Math.floor(rating);
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-warning text-warning" />
        ))}
      </div>
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );
};

export const RetailerComparison = () => {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-3">
        <Badge variant="outline" className="text-xs">
          <Calendar className="h-3 w-3 mr-1" />
          Prices Updated February 2026
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold">Carpet Installation Cost Comparison 2026</h2>
        <h3 className="text-lg text-muted-foreground">Lowe's vs Home Depot vs Costco Prices</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Compare carpet installation costs per square foot across major retailers. 
          Get free estimates from <a href="https://www.lowes.com/l/floors/carpet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lowe's</a>, 
          <a href="https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Home Depot</a>, and 
          <a href="https://www.costco.com/carpet-flooring.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Costco</a>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {retailers.map((retailer) => (
          <Card key={retailer.name} className="calculator-card hover:shadow-calculator transition-smooth relative">
            {retailer.multiplier < 1.0 && (
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="bg-success text-success-foreground text-xs">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {retailer.savings}
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-2">
              <div className="text-3xl mb-1">{retailer.logo}</div>
              <CardTitle className="text-lg">{retailer.name}</CardTitle>
              <StarRating rating={retailer.rating} />
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="text-center p-2 bg-primary-light rounded-lg">
                <div className="text-xs text-muted-foreground">Total Installed</div>
                <div className="font-bold text-primary text-sm">{retailer.totalCost}</div>
                <div className="text-xs text-muted-foreground">Labor: {retailer.installationCost}</div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-medium text-primary flex items-center gap-1">
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
              
              <div className="pt-2 border-t">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                  <Clock className="h-3 w-3" />
                  Timeline: 1-2 weeks
                </div>
                {retailer.url.startsWith('http') && (
                  <Button asChild variant="outline" size="sm" className="w-full text-xs">
                    <a href={retailer.url} target="_blank" rel="noopener noreferrer">
                      Get {retailer.name} Quote
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="calculator-card">
        <CardContent className="pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-base font-semibold">💡 Pro Tip: Get Multiple Quotes</h3>
            <p className="text-sm text-muted-foreground">
              Always get quotes from at least 3 retailers. Factor in warranty, service quality, 
              and timeline - not just the lowest price. Use our <a href="#comparison-tool" className="text-primary hover:underline">comparison calculator</a> for side-by-side estimates.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
