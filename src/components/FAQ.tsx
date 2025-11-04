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
    question: "How much does Lowe's charge for carpet installation per square foot?",
    answer: "Lowe's carpet installation cost per square foot averages $1.50-$3.00 for labor only. Total costs including materials range from $3.50-$8.00/sq ft. Lowe's carpet installation prices are typically 5-10% lower than Home Depot. They offer free in-home estimates and frequently run promotions. Installation quality is consistent through their certified installer network."
  },
  {
    question: "How much is Home Depot carpet installation price per square foot?",
    answer: "Home Depot carpet installation price per square foot ranges from $1.75-$3.50 for labor. Total installed cost including materials runs $4.00-$9.00/sq ft. Their Home Depot carpet calculator provides instant estimates. They offer competitive pricing with frequent sales events, starting at $0.49 per sq ft for select carpets during promotions, plus free estimates and professional installation with warranty coverage."
  },
  {
    question: "How much does it cost to carpet a 15x20 room?",
    answer: "The cost to carpet a 15x20 room (300 sq ft) ranges from $1,050-$2,700 installed. Budget carpet costs $1,050-$1,350, mid-range nylon runs $1,650-$2,100, and premium materials cost $2,100-$2,700. This includes carpet, padding, and installation labor. Add $300-$600 for old carpet removal or stairs."
  },
  {
    question: "How much does 500 sq ft of carpet cost installed?",
    answer: "500 sq ft of carpet cost ranges from $1,750-$4,500 installed. Budget options cost $1,750-$2,250, mid-range runs $2,750-$3,500, and premium costs $3,500-$4,500. This includes carpet materials, padding, and installation labor. Lowe's carpet estimate for 500 sq ft typically runs $2,000-$3,000 for mid-range nylon with standard installation."
  },
  {
    question: "How much does 1000 sq ft of carpet cost?",
    answer: "The average cost to carpet 1000 sq ft ranges from $3,500-$9,000 installed. Budget carpet costs $3,500-$4,500, mid-range nylon runs $5,500-$7,000, and premium materials cost $7,000-$9,000. Commercial carpet installation for 1000 sq ft costs $4,500-$12,000 due to heavier-duty materials and specialized installation requirements."
  },
  {
    question: "How much to carpet 1200 square feet?",
    answer: "To carpet 1200 square feet costs $4,200-$10,800 installed. Budget options run $4,200-$5,400, mid-range carpet costs $6,600-$8,400, and premium materials range $8,400-$10,800. This includes all materials and professional installation. For 1200 sq ft carpet cost with old carpet removal, add $1,440-$2,400 ($1.20-$2.00 per sq ft)."
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
    question: "What is the cost to install glue down carpet?",
    answer: "Glue down carpet installation cost ranges from $2.50-$4.50 per square foot for labor, plus $3.00-$8.00/sq ft for materials. Total cost runs $5.50-$12.50/sq ft. Glue down installation is common for commercial projects and basements. It costs $0.50-$1.00 more per sq ft than stretch-in installation but provides superior durability and stability."
  },
  {
    question: "How much does basement carpet installation cost?",
    answer: "Basement carpet installation cost ranges from $4.00-$10.00 per square foot including moisture-resistant padding. For a 500 sq ft basement, expect $2,000-$5,000 total. Use moisture barrier padding ($1.45/sq ft) and consider glue down installation for concrete floors. Cost to carpet basement includes special preparation and waterproofing considerations."
  },
  {
    question: "Can I get a free carpet estimate from Lowe's or Home Depot?",
    answer: "Yes, both Lowe's and Home Depot offer free carpet estimates with in-home measurements. Lowe's carpet estimate service includes professional measurement, material selection guidance, and detailed pricing breakdowns. Home Depot provides free estimates through their carpet calculator online and in-store consultations. Both retailers' estimates include labor, materials, and additional service costs with no obligation."
  },
  {
    question: "How much does 600 sq ft of carpet cost?",
    answer: "600 sq ft carpet cost ranges from $2,100-$5,400 installed. Budget options cost $2,100-$2,700, mid-range runs $3,300-$4,200, and premium costs $4,200-$5,400. To calculate: multiply 600 sq ft by your chosen carpet's price per square foot ($3.50-$9.00). Use our free carpet calculator for precise estimates based on your specific requirements."
  },
  {
    question: "How much to carpet 800 square feet?",
    answer: "To carpet 800 square feet costs $2,800-$7,200 installed. Budget carpet runs $2,800-$3,600, mid-range costs $4,400-$5,600, and premium materials range $5,600-$7,200. Carpet for 800 square feet including removal of old carpet adds $800-$1,600. Labor cost to install carpet in 800 sq ft averages $1,200-$2,800 depending on complexity and region."
  },
  {
    question: "What is the cost to replace carpet per square foot?",
    answer: "Carpet replacement cost per square foot ranges from $3.50-$9.00 including removal, materials, and installation. Old carpet removal costs $1.00-$2.00/sq ft. Budget replacement runs $3.50-$4.50/sq ft, mid-range costs $5.50-$7.00/sq ft, and premium replacement ranges $7.00-$9.00/sq ft. Total cost to replace carpet includes disposal fees and subfloor inspection."
  },
  {
    question: "How much does 12x15 carpet cost (180 sq ft)?",
    answer: "12x15 carpet cost (180 sq ft) ranges from $630-$1,620 installed. Budget options cost $630-$810, mid-range runs $990-$1,260, and premium costs $1,260-$1,620. This includes carpet material, padding, and professional installation. A 12x15 room is ideal for bedrooms or small living rooms. Add $180-$360 for old carpet removal if needed."
  },
  {
    question: "How much to carpet 700 sq ft?",
    answer: "To carpet 700 sq ft costs $2,450-$6,300 installed. Budget carpet costs $2,450-$3,150, mid-range nylon runs $3,850-$4,900, and premium materials cost $4,900-$6,300. Carpet estimate for 700 sq ft includes materials ($1,750-$4,200), padding ($455-$875), and labor ($1,050-$2,450). Use our carpet cost estimator for detailed breakdowns."
  },
  {
    question: "How much does 200 sq ft carpet cost?",
    answer: "200 sq ft carpet cost ranges from $700-$1,800 installed. Budget options cost $700-$900, mid-range runs $1,100-$1,400, and premium costs $1,400-$1,800. This is ideal for small bedrooms or home offices. Installation for smaller areas may have minimum charges ($150-$300). Most installers offer free estimates for 200 sq ft projects."
  },
  {
    question: "How much to carpet 400 square feet?",
    answer: "To carpet 400 square feet costs $1,400-$3,600 installed. Budget carpet runs $1,400-$1,800, mid-range costs $2,200-$2,800, and premium materials range $2,800-$3,600. For 400 sq ft carpet cost including removal and furniture moving, expect $1,800-$4,400 total. This size is typical for large bedrooms or small living rooms."
  },
  {
    question: "How much to carpet 2000 square feet?",
    answer: "To carpet 2000 square feet costs $7,000-$18,000 installed. Budget carpet costs $7,000-$9,000, mid-range runs $11,000-$14,000, and premium materials cost $14,000-$18,000. Commercial carpet installation for 2000 sq ft ranges $9,000-$24,000. This includes all materials, professional installation, and waste factor. Volume pricing may reduce per-square-foot costs."
  },
  {
    question: "What is the cost per square yard of carpet installed?",
    answer: "Cost per square yard of carpet installed ranges from $31.50-$81.00 (multiply square foot price by 9). To calculate: if carpet costs $3.50/sq ft, it's $31.50 per square yard. Mid-range carpet at $6.00/sq ft equals $54 per yard. Use our carpet yards calculator to convert between square feet and square yards for accurate estimates."
  },
  {
    question: "How much does Lowe's cost estimator differ from actual installation price?",
    answer: "Lowe's cost estimator typically comes within 10-15% of the final installation price. The online carpet calculator provides ballpark estimates, but final quotes after in-home measurement may vary due to room complexity, subfloor condition, furniture moving needs, and current promotions. Always request a free in-home estimate for accurate pricing. Lowes flooring estimate calculator is a helpful starting point."
  },
  {
    question: "How to calculate carpet cost for any room size?",
    answer: "To calculate carpet cost: (1) Measure length × width in feet for square footage, (2) Add 10-15% waste factor, (3) Multiply by carpet price per sq ft ($2-$8), (4) Add padding cost ($0.65-$1.45/sq ft), (5) Add installation labor ($1.50-$3.50/sq ft). Use our free carpet cost calculator for instant, accurate estimates with all factors included."
  },
  {
    question: "Are Lowe's carpet installation prices competitive compared to local contractors?",
    answer: "Lowe's carpet installation prices are competitive, typically 10-20% higher than local contractors but include warranties and consistent quality. Local contractors may offer 15-20% lower prices but vary in quality. Lowe's provides professional installation guarantees, established reputation, and often runs promotions making their pricing comparable. How much does Lowe's charge for carpet installation? Get free quotes from both for best value."
  }
];

const quickAnswers = [
  {
    question: "12x12 room carpet cost?",
    answer: "$500-$1,300 total installed"
  },
  {
    question: "20x20 room carpet cost?",
    answer: "$1,400-$3,600 installed"
  },
  {
    question: "Carpet for 120 sq ft cost?",
    answer: "$420-$1,080 installed"
  },
  {
    question: "Homewyse carpet install?",
    answer: "$3.50-$7.50/sq ft range"
  },
  {
    question: "Carpet yards calculator?",
    answer: "Divide sq ft by 9"
  },
  {
    question: "Lowes vs Home Depot?",
    answer: "Lowe's 5-10% less expensive"
  },
  {
    question: "Labor cost to install carpet tiles?",
    answer: "$1.50-$3.00/sq ft"
  },
  {
    question: "Rug installation cost?",
    answer: "$50-$200 per rug"
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