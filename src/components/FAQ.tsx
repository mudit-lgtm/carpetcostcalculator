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
    question: "How accurate is this carpet installation cost calculator?",
    answer: "Our calculator uses current market data from major retailers and regional pricing variations. It's typically accurate within 10-15% of actual quotes. For the most precise estimate, we recommend getting quotes from 2-3 local installers, as final costs can vary based on specific room conditions, local labor rates, and current promotions."
  },
  {
    question: "What factors most significantly affect carpet installation cost?",
    answer: "The biggest cost factors are: 1) Square footage and room complexity, 2) Carpet material quality (nylon vs polyester vs wool), 3) Geographic location (urban vs rural, regional variations), 4) Installation complexity (stairs, furniture moving, subfloor prep), 5) Retailer choice (big box vs local contractor), and 6) Additional services like old carpet removal."
  },
  {
    question: "Is Lowe's or Home Depot cheaper for carpet installation?",
    answer: "Lowe's is typically 5-10% less expensive than Home Depot on average, with better installation consistency through their certified installer network. However, both retailers frequently run sales that can change this dynamic. Home Depot offers more DIY-friendly options, while Lowe's focuses on professional installation quality."
  },
  {
    question: "How much does carpet installation cost per square foot in 2024?",
    answer: "Total carpet installation costs range from $3.50-$9.00 per square foot including materials and labor. Budget options (polyester) start at $3.50/sq ft, mid-range nylon carpets cost $5.50-$7.00/sq ft, and premium materials (wool, high-end nylon) range from $7.00-$9.00/sq ft. Installation alone costs $1.50-$3.50 per square foot."
  },
  {
    question: "Should I include carpet padding in my estimate, and how much does it cost?",
    answer: "Yes, quality padding is essential and significantly affects carpet comfort and lifespan. Padding costs $0.50-$1.50 per square foot. Basic foam padding costs around $0.65/sq ft, standard cushion runs $0.85/sq ft, premium padding costs $1.25/sq ft, and moisture-barrier padding for basements costs $1.45/sq ft. Investing in better padding can extend carpet life by 50%."
  },
  {
    question: "How do I measure my room for carpet installation accurately?",
    answer: "Measure the longest length and width of your room in feet, including any alcoves or closets. For L-shaped rooms, break them into rectangles and add the square footage. Always add 10-15% for waste and pattern matching. Round measurements up to the nearest half-foot. For complex rooms or multiple rooms, consider having a professional measure."
  },
  {
    question: "What's the difference between residential and commercial carpet installation pricing?",
    answer: "Commercial carpet installation costs 20-30% more than residential due to: higher-grade carpets required for durability, specialized adhesive installation methods, union labor requirements in many areas, stricter building codes and fire safety standards, and more complex subfloor preparation. Commercial projects also often require specific carpet tiles or broadloom."
  },
  {
    question: "How long does professional carpet installation take?",
    answer: "Installation time varies by project size: single room (150 sq ft) takes 2-4 hours, average home (1,000 sq ft) takes 6-8 hours over 1-2 days, and large homes may take 2-3 days. Additional time needed for: furniture moving (+1-2 hours), old carpet removal (+2-4 hours), subfloor repairs (varies), and stair installation (+30 minutes per step)."
  },
  {
    question: "Do I need to remove furniture before carpet installation, and what does it cost?",
    answer: "Most installers will move furniture for an additional fee of $50-$150 per room, depending on the amount and weight. You can save money by clearing rooms yourself. Heavy items (pianos, gun safes, built-ins) may require special handling or professional movers. Some installers include basic furniture moving in their quote - always ask."
  },
  {
    question: "When is the best time to install carpet for the lowest price?",
    answer: "The best times for carpet deals are: Late fall through winter (November-February) when demand is lowest, end of retail fiscal years (January, March) for clearance sales, major sale weekends (Memorial Day, Labor Day, Black Friday), and post-holiday periods (January) for clearance inventory. Avoid spring and early summer when demand peaks."
  },
  {
    question: "How much can I save by installing carpet myself (DIY)?",
    answer: "DIY installation can save $1.50-$3.50 per square foot in labor costs, potentially saving $300-$1,000 on an average room. However, factor in tool rental ($100-$200), learning curve time, potential mistakes, and lack of warranty on installation. DIY works best for simple rectangular rooms with basic carpet types. Complex rooms or expensive carpets are better left to professionals."
  },
  {
    question: "What additional costs should I budget for beyond the basic carpet installation?",
    answer: "Common additional costs include: old carpet removal and disposal ($1.00-$2.00/sq ft), furniture moving ($50-$150/room), stair installation ($15-$25/step), transition strips ($3-$8/linear ft), baseboards/trim work ($2-$5/linear ft), subfloor repairs ($2-$8/sq ft), and delivery fees ($75-$200). Always ask for a detailed quote including all potential additional costs."
  }
];

const quickAnswers = [
  {
    question: "Average cost to carpet a 12x12 room?",
    answer: "$500-$1,300 depending on carpet quality"
  },
  {
    question: "Is carpet cheaper than hardwood?",
    answer: "Yes, typically 50-70% less expensive initially"
  },
  {
    question: "Best carpet for high-traffic areas?",
    answer: "Nylon or berber for durability"
  },
  {
    question: "How often replace carpet padding?",
    answer: "Every 10-15 years or with new carpet"
  },
  {
    question: "Carpet vs laminate cost?",
    answer: "Carpet: $3.50-$9/sq ft, Laminate: $4-$12/sq ft"
  },
  {
    question: "Best carpet for pets?",
    answer: "Solution-dyed nylon or SmartStrand"
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto space-y-8 py-16">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
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