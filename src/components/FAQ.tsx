import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to install carpet per square foot in 2025?",
    answer: "The cost to install carpet per square foot ranges from $3.50-$9.00 total (materials + labor). Installation labor alone costs $1.50-$3.50 per sq ft. Budget polyester carpet with installation runs $3.50-$4.50/sq ft, mid-range nylon costs $5.50-$7.00/sq ft, and premium wool or high-end nylon ranges from $7.00-$9.00/sq ft. Regional labor rates significantly impact the final price."
  },
  {
    question: "What is the average cost to install carpet in a 500 sq ft room?",
    answer: "The average cost for 500 sq ft of carpet installed ranges from $1,750-$4,500. Budget options cost around $1,750-$2,250, mid-range quality runs $2,750-$3,500, and premium carpet costs $3,500-$4,500. This includes carpet, padding, labor, and basic installation. Add $500-$1,000 for old carpet removal, furniture moving, or stair carpeting."
  },
  {
    question: "How much does Lowe's charge for carpet installation per square foot?",
    answer: "Lowe's carpet installation cost per square foot averages $1.50-$3.00 for labor only. Total costs including materials range from $3.50-$8.00/sq ft. Lowe's carpet installation prices are typically 5-10% lower than Home Depot. They offer free in-home estimates and frequently run promotions. Installation quality is consistent through their certified installer network."
  },
  {
    question: "How much is Home Depot carpet installation cost per square foot?",
    answer: "Home Depot carpet installation price per square foot ranges from $1.75-$3.50 for labor. Total installed cost including materials runs $4.00-$9.00/sq ft. Their Home Depot carpet calculator provides instant estimates. They offer competitive pricing with frequent sales events, free estimates, and professional installation with warranty coverage."
  },
  {
    question: "How much does it cost to install carpet on stairs?",
    answer: "Labor cost to carpet stairs averages $15-$25 per step for standard straight stairs. To carpet 13 stairs costs approximately $195-$325 in labor alone. Total cost including materials runs $300-$500 for 13 stairs. Curved or wider stairs cost more ($25-$40/step). Stair carpeting requires more skill and time than flat surfaces, increasing the installation price."
  },
  {
    question: "What is the average carpet installation labor cost?",
    answer: "Carpet installation labor cost averages $1.50-$3.50 per square foot depending on your region and project complexity. Basic installation in simple rectangular rooms costs $1.50-$2.00/sq ft, standard installations run $2.00-$2.75/sq ft, and complex layouts or commercial projects cost $2.75-$3.50/sq ft. Northeast and West Coast labor rates are 20-25% higher than national averages."
  },
  {
    question: "How much does commercial carpet installation cost?",
    answer: "Cost to install commercial carpet ranges from $4.50-$12.00 per square foot including materials and labor. Commercial carpet installation is 20-30% more expensive than residential due to higher-grade carpets, specialized adhesive installation, union labor requirements, and stricter building codes. Carpet tiles for offices cost $5.00-$8.00/sq ft installed, while heavy-duty broadloom costs $7.00-$12.00/sq ft."
  },
  {
    question: "Can I get a free carpet estimate from Lowe's or Home Depot?",
    answer: "Yes, both Lowe's and Home Depot offer free carpet estimates with in-home measurements. Lowe's carpet estimate service includes professional measurement, material selection guidance, and detailed pricing breakdowns. Home Depot provides free estimates through their carpet calculator online and in-store consultations. Both retailers' estimates include labor, materials, and additional service costs."
  },
  {
    question: "How do I calculate how much carpet I need?",
    answer: "To calculate carpet needs: measure room length × width in feet for square footage, add 10-15% waste factor for cuts and seams, divide by 9 to convert to square yards if needed. For complex rooms, break into rectangles and add totals. Our carpet square foot calculator automatically handles these calculations. Always round up measurements to the nearest half-foot."
  },
  {
    question: "What is the price to install carpet including removal of old carpet?",
    answer: "The price to install carpet with old carpet removal costs $4.50-$11.00 per square foot total. New carpet installation costs $3.50-$9.00/sq ft, plus old carpet removal adds $1.00-$2.00/sq ft. For an average 300 sq ft room, expect $1,350-$3,300 total. Removal includes disposal fees and may cost more if old padding is heavily adhered or if there's subfloor damage."
  },
  {
    question: "How much does it cost to replace carpet per square foot?",
    answer: "Carpet replacement cost ranges from $3.50-$9.00 per square foot including removal, materials, and installation. Budget replacement costs $3.50-$4.50/sq ft, mid-range runs $5.50-$7.00/sq ft, and premium replacement costs $7.00-$9.00/sq ft. Use our carpet replacement cost estimator to get detailed pricing for your specific project including all additional services."
  },
  {
    question: "Are Lowe's carpet installation prices competitive compared to local contractors?",
    answer: "Lowe's carpet installation prices are competitive, typically 10-20% higher than local contractors but include warranties and consistent quality. Local contractors may offer 15-20% lower prices but vary in quality. Lowe's provides professional installation guarantees, established reputation, and often runs promotions making their pricing comparable. Get quotes from both for best value."
  }
];

const quickAnswers = [
  {
    question: "How much to put in carpet for 12x12 room?",
    answer: "$500-$1,300 total installed cost"
  },
  {
    question: "How to price a carpet installation quote?",
    answer: "Sq ft × (carpet + padding + labor costs)"
  },
  {
    question: "What is Homewyse carpet install estimate?",
    answer: "$3.50-$7.50/sq ft typical range"
  },
  {
    question: "Carpet yards calculator conversion?",
    answer: "Divide square feet by 9 for yards"
  },
  {
    question: "Best online carpet estimate tool?",
    answer: "Free calculators from retailers + ours"
  },
  {
    question: "Lowe's cost estimator vs actual price?",
    answer: "Within 10-15% of final quote typically"
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto space-y-8 py-16">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Carpet Installation Cost Estimate - Frequently Asked Questions</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about carpet installation costs, 
          timing, and what to expect during your flooring project.
        </p>
      </div>

      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-center">Carpet Installation Cost FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="calculator-card">
        <CardContent className="pt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground">
            For specific pricing in your area, we recommend getting quotes from 2-3 local installers 
            in addition to major retailers. This ensures you get the best value for your carpet installation project.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};