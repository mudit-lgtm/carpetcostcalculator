import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, CheckCircle, Calendar } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to carpet a 10x12 room?",
    answer: "A 10×12 room (120 sq ft) costs <strong>$420–$1,080</strong> installed with standard carpet. Budget carpet runs $240–$360, mid-range $360–$600, and premium $600–$1,080 (materials only). Professional installation adds $60–$240. Use our <a href='#calculator' class='text-primary hover:underline'>carpet installation cost calculator</a> — select the 10×12 preset for an instant estimate."
  },
  {
    question: "How much does it cost to carpet a 12x12 room?",
    answer: "A 12×12 room (144 sq ft) costs <strong>$500–$1,300</strong> with materials and installation. Budget: $290–$430, standard: $430–$720, premium: $720–$1,300. Enter 12×12 in our <a href='#calculator' class='text-primary hover:underline'>cost calculator</a> to see a breakdown by carpet quality and retailer. Compare <a href='https://www.lowes.com/l/floors/carpet' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Lowe's</a> and <a href='https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Home Depot</a> quotes."
  },
  {
    question: "How much does it cost to carpet a 15x15 room?",
    answer: "A 15×15 room (225 sq ft) costs <strong>$790–$2,030</strong> installed. Budget carpet is $450–$675, standard $675–$1,125, and premium $1,125–$2,025. Use the <a href='#calculator' class='text-primary hover:underline'>15×15 preset</a> in our calculator for an instant estimate with your preferred quality tier."
  },
  {
    question: "How much to carpet a 20x20 room?",
    answer: "A 20×20 room (400 sq ft) costs <strong>$1,400–$3,600</strong> installed. Budget: $800–$1,200, mid-range: $1,200–$2,000, premium: $2,000–$3,600. Click the 20×20 preset in our <a href='#calculator' class='text-primary hover:underline'>carpet installation cost calculator</a> for a detailed cost breakdown including padding and labor."
  },
  {
    question: "How much to carpet a 10x10 room?",
    answer: "A 10×10 room (100 sq ft) costs <strong>$350–$900</strong> installed with standard carpet. This is one of the most common bedroom sizes. Budget options start at $200. Use our <a href='#calculator' class='text-primary hover:underline'>calculator</a> with the 10×10 preset for an instant estimate."
  },
  {
    question: "How much to carpet 13 stairs?",
    answer: "Carpeting 13 stairs costs <strong>$260–$910</strong>, averaging $20–$70 per step. A stair runner costs $400–$1,200, while full coverage costs $500–$1,500. Use the 'Rooms + Stairs' tab in our <a href='#calculator' class='text-primary hover:underline'>carpet installation cost calculator</a> or the dedicated <a href='#stair-carpet-calculator' class='text-primary hover:underline'>stair carpet calculator</a>."
  },
  {
    question: "How much does 700 sq ft of carpet cost?",
    answer: "700 sq ft of carpet costs <strong>$2,450–$6,300</strong> installed. This covers approximately 2–3 bedrooms. Use the 'Multiple Rooms' tab in our <a href='#calculator' class='text-primary hover:underline'>calculator</a> to enter each room separately, or try the <a href='#multi-room' class='text-primary hover:underline'>whole-house estimator</a>."
  },
  {
    question: "Cost to carpet 1,500 or 2,000 sq ft house?",
    answer: "A 1,500 sq ft house costs <strong>$5,250–$13,500</strong> and a 2,000 sq ft house costs <strong>$7,000–$18,000</strong> for carpet + padding + installation. Use the 'Multiple Rooms' tab in our <a href='#calculator' class='text-primary hover:underline'>carpet installation cost calculator</a> to add each room and get a combined estimate."
  },
  {
    question: "What is Lowe's carpet installation cost per square foot in 2026?",
    answer: "Lowe's carpet installation costs <strong>$0.50–$2.00 per sq ft</strong> for labor in 2026. Total installed cost (carpet + pad + labor) ranges from $3.30–$8.55/sq ft. Select 'Lowe's' in the Advanced Options of our <a href='#calculator' class='text-primary hover:underline'>calculator</a> for retailer-specific pricing, or use our <a href='#comparison-tool' class='text-primary hover:underline'>price comparison tool</a>."
  },
  {
    question: "Is Lowe's or Home Depot cheaper for carpet installation?",
    answer: "<a href='https://www.lowes.com/l/floors/carpet' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Lowe's</a> charges $0.50–$2.00/sq ft for installation; <a href='https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Home Depot</a> charges $0.60–$2.10/sq ft. Costco and local contractors are often 10–20% cheaper. Our <a href='#calculator' class='text-primary hover:underline'>calculator</a> shows retailer-specific estimates side-by-side in the results card."
  },
  {
    question: "How much carpet do I need for a room?",
    answer: "Multiply room length × width in feet. Add 10% for waste and seams. Example: a 12×12 room = 144 sq ft + 14 sq ft waste ≈ 158 sq ft needed. Our <a href='#calculator' class='text-primary hover:underline'>carpet installation cost calculator</a> handles waste automatically — adjust it under Advanced Options."
  },
  {
    question: "How much does carpet installation cost per square foot?",
    answer: "Professional carpet installation costs <strong>$0.50–$2.00/sq ft</strong> for labor alone in 2026. Total installed cost (carpet + padding + labor) ranges from <strong>$3.50–$9.00/sq ft</strong> depending on quality. Toggle between 'Professional' and 'DIY' in our <a href='#calculator' class='text-primary hover:underline'>calculator</a> to see the difference."
  }
];

const quickAnswers = [
  { question: "10×10 room?", answer: "$350–$900" },
  { question: "10×12 room?", answer: "$420–$1,080" },
  { question: "12×12 room?", answer: "$500–$1,300" },
  { question: "15×15 room?", answer: "$790–$2,030" },
  { question: "20×20 room?", answer: "$1,400–$3,600" },
  { question: "700 sq ft?", answer: "$2,450–$6,300" },
  { question: "1,000 sq ft?", answer: "$3,500–$9,000" },
  { question: "2,000 sq ft?", answer: "$7,000–$18,000" },
  { question: "13 stairs?", answer: "$260–$910" },
  { question: "Labor/sq ft?", answer: "$0.50–$2.00" },
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto space-y-6 py-12 px-4">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Carpet Installation Cost FAQ</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            Updated March 2026
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Answers to the most common carpet installation cost questions — room sizes, stairs,
          <a href="https://www.lowes.com/l/floors/carpet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Lowe's</a> and
          <a href="https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Home Depot</a> pricing.
          All answers link back to our <a href="#calculator" className="text-primary hover:underline">carpet installation cost calculator</a>.
        </p>
      </div>

      {/* Quick Answers Grid */}
      <Card className="calculator-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Quick Carpet Cost Answers 2026 (Installed)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {quickAnswers.map((item, index) => (
              <a key={index} href="#calculator" className="block p-2 bg-secondary/20 rounded-lg text-center hover:bg-primary/10 transition-all">
                <div className="text-xs font-medium text-foreground mb-1">{item.question}</div>
                <Badge variant="secondary" className="text-xs">{item.answer}</Badge>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="calculator-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-center">Detailed Carpet Installation Cost FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">
                  <h3 className="font-medium">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div 
                    className="text-muted-foreground text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};
