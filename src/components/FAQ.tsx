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
  // High-impression keywords from Search Console
  {
    question: "How much does carpet installation cost per square foot in 2026?",
    answer: "Carpet installation cost per square foot ranges from $3.50-$9.00 total (materials + labor). Installation labor alone costs $1.50-$3.50 per sq ft. Budget polyester carpet runs $3.50-$4.50/sq ft, mid-range nylon costs $5.50-$7.00/sq ft, and premium wool or high-end nylon ranges from $7.00-$9.00/sq ft. Regional labor rates significantly impact the final carpet installation prices."
  },
  {
    question: "How much does Lowe's charge for carpet installation per square foot 2026?",
    answer: "Lowe's carpet installation cost per square foot 2026 averages $1.50-$3.00 for labor only. Total costs including materials range from $3.50-$8.00/sq ft. Lowe's carpet installation prices are typically 5-10% lower than Home Depot. Use the Lowe's carpet calculator for accurate estimates. They offer free in-home estimates and frequently run promotions with consistent quality through their certified installer network."
  },
  {
    question: "What is Home Depot carpet installation cost per square foot 2026?",
    answer: "Home Depot carpet installation cost per square foot 2026 ranges from $1.75-$3.50 for labor. Total installed cost including materials runs $4.00-$9.00/sq ft. Their Home Depot carpet calculator provides instant estimates. They offer competitive pricing with frequent sales, starting at $0.49 per sq ft for select carpets during promotions, plus free estimates and professional installation with warranty coverage."
  },
  {
    question: "How much does carpet replacement cost per square foot?",
    answer: "Carpet replacement cost per square foot ranges from $3.50-$9.00 including removal, materials, and installation. Old carpet removal costs $1.00-$2.00/sq ft. Budget replacement runs $3.50-$4.50/sq ft, mid-range costs $5.50-$7.00/sq ft, and premium replacement ranges $7.00-$9.00/sq ft. The carpet replacement cost estimator includes disposal fees and subfloor inspection."
  },
  // Room size specific questions (high search volume)
  {
    question: "How much does it cost to carpet a 10x12 room?",
    answer: "Cost to carpet a 10x12 room (120 sq ft) ranges from $420-$1,080 installed. Budget carpet costs $420-$540, mid-range nylon runs $660-$840, and premium materials cost $840-$1,080. This includes carpet, padding, and installation labor. Add $120-$240 for old carpet removal or stairs. Use our carpet estimate calculator for exact pricing."
  },
  {
    question: "How much would carpet cost for a 12x12 room?",
    answer: "Carpet cost for a 12x12 room (144 sq ft) ranges from $504-$1,296 installed. Budget options cost $504-$648, mid-range runs $792-$1,008, and premium costs $1,008-$1,296. This 12x12 carpet installation cost includes all materials and professional installation. Lowe's and Home Depot both offer free estimates for 12x12 rooms."
  },
  {
    question: "How much does it cost to carpet a 12x15 room?",
    answer: "Cost to carpet a 12x15 room (180 sq ft) ranges from $630-$1,620 installed. Budget carpet costs $630-$810, mid-range nylon runs $990-$1,260, and premium materials cost $1,260-$1,620. The 12x15 carpet cost includes carpet, padding, and installation labor. This is a popular bedroom size."
  },
  {
    question: "How much does it cost to carpet a 15x15 room?",
    answer: "Cost to carpet a 15x15 room (225 sq ft) ranges from $788-$2,025 installed. Budget carpet runs $788-$1,013, mid-range costs $1,238-$1,575, and premium ranges $1,575-$2,025. This size is common for living rooms and master bedrooms. Get a free carpet estimate from multiple retailers."
  },
  {
    question: "How much does it cost to carpet a 15x20 room?",
    answer: "Cost to carpet a 15x20 room (300 sq ft) ranges from $1,050-$2,700 installed. Budget carpet costs $1,050-$1,350, mid-range nylon runs $1,650-$2,100, and premium materials cost $2,100-$2,700. This includes carpet, padding, and installation labor. Add $300-$600 for old carpet removal."
  },
  {
    question: "How much does it cost to carpet a 20x20 room?",
    answer: "Cost to carpet a 20x20 room (400 sq ft) ranges from $1,400-$3,600 installed. Budget carpet runs $1,400-$1,800, mid-range costs $2,200-$2,800, and premium ranges $2,800-$3,600. To carpet a 20x20 room per square foot, expect $3.50-$9.00 including all materials and professional installation."
  },
  // Square footage questions (high search volume)
  {
    question: "How much does 300 sq ft of carpet cost?",
    answer: "300 sq ft of carpet cost ranges from $1,050-$2,700 installed. Budget options cost $1,050-$1,350, mid-range runs $1,650-$2,100, and premium costs $2,100-$2,700. This is equivalent to a 15x20 room or small living area. Use our carpet cost calculator for accurate estimates."
  },
  {
    question: "How much does 350 sq ft of carpet cost?",
    answer: "350 sq ft carpet cost ranges from $1,225-$3,150 installed. Budget carpet runs $1,225-$1,575, mid-range costs $1,925-$2,450, and premium ranges $2,450-$3,150. This covers a larger living room or multiple small bedrooms with all materials included."
  },
  {
    question: "How much does 400 sq ft of carpet cost?",
    answer: "400 sq ft carpet cost ranges from $1,400-$3,600 installed. Budget options cost $1,400-$1,800, mid-range runs $2,200-$2,800, and premium costs $2,800-$3,600. Carpet for 400 square feet is ideal for large bedrooms or living rooms. Add $400-$800 for old carpet removal."
  },
  {
    question: "How much does 500 sq ft of carpet cost installed?",
    answer: "500 sq ft of carpet cost ranges from $1,750-$4,500 installed. Budget options cost $1,750-$2,250, mid-range runs $2,750-$3,500, and premium costs $3,500-$4,500. This includes carpet materials, padding, and installation labor. Lowe's carpet estimate for 500 sq ft typically runs $2,000-$3,000 for mid-range nylon."
  },
  {
    question: "How much does 600 sq ft of carpet cost?",
    answer: "600 sq ft carpet cost ranges from $2,100-$5,400 installed. Budget options cost $2,100-$2,700, mid-range runs $3,300-$4,200, and premium costs $4,200-$5,400. How much to carpet 600 sq ft depends on carpet type and retailer. Use our carpet cost estimator for precise estimates."
  },
  {
    question: "How much does 700 sq ft of carpet cost?",
    answer: "700 square feet carpet cost ranges from $2,450-$6,300 installed. Budget carpet costs $2,450-$3,150, mid-range runs $3,850-$4,900, and premium costs $4,900-$6,300. How to carpet 700 sq ft includes materials ($1,750-$4,200), padding ($455-$875), and labor ($1,050-$2,450)."
  },
  {
    question: "How much does 800 sq ft of carpet cost?",
    answer: "To carpet 800 square feet costs $2,800-$7,200 installed. Budget carpet runs $2,800-$3,600, mid-range costs $4,400-$5,600, and premium ranges $5,600-$7,200. Carpet for 800 square feet including removal adds $800-$1,600. Labor cost averages $1,200-$2,800."
  },
  {
    question: "How much does 1000 sq ft of carpet cost?",
    answer: "Average cost to carpet 1000 sq ft ranges from $3,500-$9,000 installed. Budget carpet costs $3,500-$4,500, mid-range nylon runs $5,500-$7,000, and premium materials cost $7,000-$9,000. Commercial carpet installation for 1000 sq ft costs $4,500-$12,000 due to heavier-duty requirements."
  },
  {
    question: "How much does 1200 sq ft of carpet cost?",
    answer: "To carpet 1200 square feet costs $4,200-$10,800 installed. Budget options run $4,200-$5,400, mid-range costs $6,600-$8,400, and premium ranges $8,400-$10,800. 1200 sq ft carpet cost with removal adds $1,440-$2,400 ($1.20-$2.00 per sq ft)."
  },
  {
    question: "How much does 1500 sq ft of carpet cost?",
    answer: "To carpet 1500 sq ft costs $5,250-$13,500 installed. Budget carpet runs $5,250-$6,750, mid-range costs $8,250-$10,500, and premium ranges $10,500-$13,500. Cost to replace carpet 1500 sq ft includes removal at $1,500-$3,000 additional."
  },
  {
    question: "How much does 2000 sq ft of carpet cost?",
    answer: "To carpet 2000 square feet costs $7,000-$18,000 installed. Budget carpet costs $7,000-$9,000, mid-range runs $11,000-$14,000, and premium costs $14,000-$18,000. Commercial carpet for 2000 sq ft ranges $9,000-$24,000. Volume pricing may reduce per-square-foot costs."
  },
  // Stair carpet questions (high search volume)
  {
    question: "How much does it cost to carpet stairs?",
    answer: "Labor cost to carpet stairs averages $15-$25 per step for standard straight stairs. The total cost to carpet stairs includes materials at $10-$20 per step. Curved or wider stairs cost $25-$40 per step. Stair carpet installation requires more skill and time than flat surfaces, increasing the installation price."
  },
  {
    question: "How much does it cost to carpet 13 stairs?",
    answer: "Cost to carpet 13 stairs averages $300-$500 total including materials and labor. Labor alone costs $195-$325 ($15-$25 per step). Stair carpet replacement cost is higher for curved stairs at $325-$520. Most homes have 13 stairs per flight. Add $50-$100 for stair runner installation."
  },
  {
    question: "How much does it cost to carpet stairs and landing?",
    answer: "Cost to carpet stairs and landing ranges from $400-$800 for 13 stairs plus landing. The landing adds $50-$150 depending on size. Hall, stairs, and landing carpet cost runs $600-$1,200 for typical homes. Labor cost to carpet stairs per step is $15-$25."
  },
  {
    question: "How much does it cost to replace carpet on stairs?",
    answer: "Cost to replace carpet on stairs ranges from $350-$600 for 13 stairs including removal. Old carpet removal adds $50-$100. Stair carpet replacement cost includes new carpet ($150-$260), padding ($40-$65), and labor ($195-$325). Re-carpeting stairs costs more due to complex installation."
  },
  // Retailer and estimate questions
  {
    question: "How much is carpet installation at Lowe's?",
    answer: "Lowe's carpet installation prices range from $3.50-$8.00 per sq ft total (materials + labor). Labor only costs $1.50-$3.00/sq ft. Lowe's carpet estimate is free with in-home measurement. The Lowe's carpet installation cost calculator provides instant online estimates. They frequently run promotions making them 5-10% less than competitors."
  },
  {
    question: "How much does Costco carpet installation cost?",
    answer: "Costco carpet installation cost ranges from $3.00-$7.00 per sq ft total, about 15% less than Home Depot or Lowe's. Labor runs $1.25-$2.50/sq ft. Costco requires membership but offers excellent value with quality Shaw and Mohawk carpets. Installation includes free furniture moving and old carpet removal."
  },
  {
    question: "Can I get a free carpet estimate?",
    answer: "Yes, free carpet estimates are available from Lowe's, Home Depot, Costco, and local contractors. Lowe's carpet estimate and Home Depot carpet estimate include in-home measurements, material selection, and detailed pricing. Use our free carpet calculator for instant online estimates before scheduling in-home visits."
  },
  {
    question: "What is carpet installation labor cost per square foot?",
    answer: "Carpet installation labor cost per square foot averages $1.50-$3.50 depending on region and complexity. Basic installation costs $1.50-$2.00/sq ft, standard runs $2.00-$2.75/sq ft, and complex layouts cost $2.75-$3.50/sq ft. Labor cost to install carpet is 20-25% higher on West Coast and Northeast."
  },
  // Specialty installation questions
  {
    question: "How much does basement carpet installation cost?",
    answer: "Basement carpet installation cost ranges from $4.00-$10.00 per sq ft including moisture-resistant padding. Cost to carpet basement for 500 sq ft runs $2,000-$5,000 total. Use moisture barrier padding ($1.45/sq ft) and consider glue-down installation for concrete floors. Basement carpet requires special preparation."
  },
  {
    question: "What is the cost to install glue down carpet?",
    answer: "Glue down carpet installation cost ranges from $2.50-$4.50 per sq ft for labor, plus $3.00-$8.00/sq ft for materials. Total cost runs $5.50-$12.50/sq ft. Cost to install glue down carpet is $0.50-$1.00 more per sq ft than stretch-in but provides superior durability for commercial and basement applications."
  },
  {
    question: "How much does commercial carpet installation cost?",
    answer: "Cost to install commercial carpet ranges from $4.50-$12.00 per sq ft including materials and labor. Commercial carpet installation is 20-30% more expensive than residential. Carpet tile installation cost runs $5.00-$8.00/sq ft, while heavy-duty broadloom costs $7.00-$12.00/sq ft installed."
  },
  {
    question: "How much does carpet tile installation cost per square foot?",
    answer: "Carpet tile installation cost per square foot ranges from $5.00-$10.00 total (materials + labor). Commercial carpet tiles cost $3.00-$6.00/sq ft for materials, with labor at $1.50-$3.00/sq ft. Labor cost to install carpet tiles is lower than broadloom due to easier installation and replacement."
  },
  // Calculation and conversion questions
  {
    question: "How do I calculate carpet cost for any room?",
    answer: "To calculate carpet cost: (1) Measure length × width for square footage, (2) Add 10-15% waste factor, (3) Multiply by carpet price ($2-$8/sq ft), (4) Add padding ($0.65-$1.45/sq ft), (5) Add labor ($1.50-$3.50/sq ft). Use our carpet cost calculator per square foot for instant, accurate estimates."
  },
  {
    question: "How do I use a carpet yards calculator?",
    answer: "To convert square feet to square yards, divide by 9. For example, 300 sq ft ÷ 9 = 33.3 sq yards. The carpet yards calculator helps when retailers price by square yard. Cost per square yard equals cost per sq ft × 9. A room at $5.50/sq ft equals $49.50/sq yard."
  },
  {
    question: "How much carpet do I need calculator?",
    answer: "To calculate how much carpet you need: Measure room length × width in feet, then add 10-15% for waste and seams. For irregular rooms, divide into rectangles and add together. Our carpet square foot calculator automatically includes waste factor. 12x15 room = 180 sq ft + 10% waste = 198 sq ft needed."
  },
  // Comparison and pricing questions
  {
    question: "Is Lowe's or Home Depot cheaper for carpet installation?",
    answer: "Lowe's carpet installation is typically 5-10% cheaper than Home Depot. Lowe's carpet installation cost per square foot runs $3.50-$8.00 vs Home Depot at $4.00-$9.00. Lowes vs Home Depot carpet pricing varies by promotion. Both offer free estimates - get quotes from both for the best carpet installation prices."
  },
  {
    question: "What is the average carpet installation cost for a 3 bedroom house?",
    answer: "Average cost to carpet a 3 bedroom house ranges from $3,500-$9,000 for approximately 1,000 sq ft of carpet. Budget options run $3,500-$4,500, mid-range costs $5,500-$7,000, and premium ranges $7,000-$9,000. Price to carpet 3 bedrooms varies by carpet type and local labor rates."
  },
  {
    question: "What is the Homewyse carpet install estimate?",
    answer: "Homewyse carpet install estimates range from $3.50-$7.50 per sq ft for total installed cost. Homewyse provides regional cost estimates based on national data. Their carpet cost estimator includes materials ($2.00-$4.50/sq ft), labor ($1.50-$3.00/sq ft), and supplies. Compare with our free carpet estimate for accuracy."
  }
];

const quickAnswers = [
  {
    question: "10x12 room carpet cost?",
    answer: "$420-$1,080 installed"
  },
  {
    question: "12x12 room carpet cost?",
    answer: "$504-$1,296 installed"
  },
  {
    question: "12x15 room carpet cost?",
    answer: "$630-$1,620 installed"
  },
  {
    question: "15x20 room carpet cost?",
    answer: "$1,050-$2,700 installed"
  },
  {
    question: "20x20 room carpet cost?",
    answer: "$1,400-$3,600 installed"
  },
  {
    question: "500 sq ft carpet cost?",
    answer: "$1,750-$4,500 installed"
  },
  {
    question: "1000 sq ft carpet cost?",
    answer: "$3,500-$9,000 installed"
  },
  {
    question: "13 stairs carpet cost?",
    answer: "$300-$500 total"
  },
  {
    question: "Lowe's vs Home Depot?",
    answer: "Lowe's 5-10% less expensive"
  },
  {
    question: "Carpet yards calculator?",
    answer: "Divide sq ft by 9"
  },
  {
    question: "Labor cost per sq ft?",
    answer: "$1.50-$3.50/sq ft"
  },
  {
    question: "Carpet removal cost?",
    answer: "$1.00-$2.00/sq ft"
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto space-y-8 py-16 px-4">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Carpet Installation Cost Calculator - Frequently Asked Questions</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about carpet installation prices, Lowe's and Home Depot costs, 
          room size estimates, and what to expect for your carpet replacement project.
        </p>
      </div>

      {/* Quick Answers Grid */}
      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Quick Carpet Cost Answers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {quickAnswers.map((item, index) => (
              <div key={index} className="p-3 bg-secondary/20 rounded-lg text-center">
                <div className="text-sm font-medium text-foreground mb-1">{item.question}</div>
                <Badge variant="secondary" className="text-xs">{item.answer}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="calculator-card">
        <CardHeader>
          <CardTitle className="text-center">Carpet Installation Cost FAQ - Complete Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};