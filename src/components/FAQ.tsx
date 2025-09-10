import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How accurate is this carpet installation cost calculator?",
    answer: "Our calculator uses current market data and average pricing from major retailers. Actual costs may vary based on your location, specific product choices, room complexity, and current promotions. We recommend getting quotes from multiple sources for the most accurate estimate."
  },
  {
    question: "What factors affect carpet installation cost?",
    answer: "Several factors influence installation costs: room size and shape, carpet type and quality, subfloor condition, furniture removal needs, old carpet removal, stairs, transitions, and your geographic location. Commercial installations typically cost 20-25% more than residential."
  },
  {
    question: "Is Lowe's or Home Depot cheaper for carpet installation?",
    answer: "Pricing varies by location and current promotions, but Lowe's is often 5-10% lower on average. Home Depot offers competitive pricing with frequent sales. We recommend comparing both, plus local contractors who often provide the best value."
  },
  {
    question: "How much does carpet installation cost per square foot?",
    answer: "Installation costs typically range from $1.75-$3.50 per square foot, depending on carpet type and installer. Basic installation averages $2.50/sq ft, while premium carpets or complex rooms can reach $3.50/sq ft or more."
  },
  {
    question: "Should I include carpet padding in my estimate?",
    answer: "Yes, quality padding is essential and typically adds $0.50-$1.00 per square foot. Our calculator includes standard padding costs. Premium padding improves comfort and extends carpet life significantly."
  },
  {
    question: "How do I measure my room for carpet installation?",
    answer: "Measure length and width at the longest points in feet. For irregular rooms, break them into rectangles and add the square footage. Add 10% for waste and pattern matching. Our calculator handles standard rectangular rooms automatically."
  },
  {
    question: "What's the difference between residential and commercial carpet installation?",
    answer: "Commercial installation requires more durable carpets, specialized adhesives, and often union labor, increasing costs by 20-30%. Commercial carpets also have different pile requirements and fire safety standards."
  },
  {
    question: "How long does carpet installation typically take?",
    answer: "Most residential installations take 4-8 hours for an average home. Single rooms take 2-4 hours. Timeline depends on room size, furniture moving, old carpet removal, and any subfloor preparation needed."
  },
  {
    question: "Do I need to remove furniture before installation?",
    answer: "Most installers will move furniture for an additional fee ($50-150). You can save money by clearing rooms yourself. Heavy items like pianos or built-ins may require special handling or professional movers."
  },
  {
    question: "When is the best time to install carpet for the best price?",
    answer: "Late fall through winter often offers the best deals as it's the slow season for flooring. Major sales events include Memorial Day, Labor Day, and post-holiday clearances. Spring is typically the most expensive time."
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