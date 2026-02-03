import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, CheckCircle, Calendar } from "lucide-react";

// Streamlined to 10 high-traffic questions based on Ahrefs data
const faqs = [
  {
    question: "How much does it cost to carpet a 10x12 room?",
    answer: "A 10x12 room (120 sq ft) costs $240-$960 to carpet. Budget carpet costs $240-$360, mid-range $360-$600, and premium $600-$960. Add $60-$150 for professional installation. Use our <a href='#calculator' class='text-primary hover:underline'>carpet calculator</a> for exact pricing based on your carpet type and retailer."
  },
  {
    question: "How much does it cost to carpet a 12x12 room?",
    answer: "A 12x12 room (144 sq ft) costs $290-$1,150 to carpet. Budget options are $290-$430, mid-range $430-$720, and premium $720-$1,150. Installation adds $70-$175. Both <a href='https://www.lowes.com/l/floors/carpet' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Lowe's</a> and <a href='https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Home Depot</a> offer free estimates."
  },
  {
    question: "How much to carpet a 20x20 room?",
    answer: "A 20x20 room (400 sq ft) costs $800-$3,200 to carpet. This includes budget carpet ($800-$1,200), mid-range ($1,200-$2,000), or premium ($2,000-$3,200). Installation adds $200-$500. Use our <a href='#calculator' class='text-primary hover:underline'>calculator</a> for accurate estimates."
  },
  {
    question: "What is Lowe's carpet installation cost per square foot 2026?",
    answer: "Lowe's carpet installation costs $0.50-$2.00 per sq ft in 2026. Basic installation is $0.50-$0.75/sq ft, standard $0.75-$1.25/sq ft, and premium $1.25-$2.00/sq ft. Padding costs an additional $0.50-$0.75/sq ft. <a href='https://www.lowes.com/l/floors/carpet' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Visit Lowe's</a> for current promotions."
  },
  {
    question: "How much to carpet 13 stairs?",
    answer: "Carpeting 13 stairs costs $260-$910, averaging $20-$70 per step. A stair runner costs $400-$1,200, while full coverage costs $500-$1,500. Adding a landing increases the cost to $600-$1,800. Use our <a href='#stair-carpet-calculator' class='text-primary hover:underline'>stair carpet calculator</a> for accurate estimates."
  },
  {
    question: "How much does 700 sq ft of carpet cost?",
    answer: "700 sq ft of carpet costs $1,400-$5,600 total. Mid-range carpet with installation typically costs $2,800-$3,500. This covers approximately 2-3 bedrooms in an average home. Try our <a href='#multi-room' class='text-primary hover:underline'>multi-room calculator</a> for whole-house estimates."
  },
  {
    question: "Cost to carpet 2000 sq ft house?",
    answer: "Carpeting a 2000 sq ft house costs $4,000-$16,000. The average cost with mid-range carpet and installation is $8,000-$10,000. This typically covers 3-4 bedrooms, living room, and hallways. Use our <a href='#multi-room' class='text-primary hover:underline'>multi-room calculator</a> for detailed estimates."
  },
  {
    question: "Is Lowe's or Home Depot cheaper for carpet installation?",
    answer: "Lowe's and Home Depot have similar pricing. <a href='https://www.lowes.com/l/floors/carpet' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Lowe's</a> charges $0.50-$2.00/sq ft for installation, while <a href='https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Home Depot</a> charges $0.60-$2.10/sq ft. Home Depot occasionally offers promotions starting at $0.49/sq ft. Use our <a href='#comparison-tool' class='text-primary hover:underline'>price comparison tool</a> to compare."
  },
  {
    question: "How much carpet do I need for a room?",
    answer: "Multiply room length × width in feet to get square footage. Add 10% for waste and pattern matching. For example, a 12x12 room needs 144 sq ft + 14.4 sq ft waste = approximately 160 sq ft of carpet. Use our <a href='#calculator' class='text-primary hover:underline'>carpet calculator</a> to calculate automatically."
  },
  {
    question: "How much does carpet installation cost per square foot?",
    answer: "Professional carpet installation costs $0.50-$2.00 per sq ft in 2026. Basic installation is $0.50-$0.80/sq ft, standard is $0.80-$1.30/sq ft, and premium is $1.30-$2.00/sq ft. This doesn't include carpet or padding costs. Total installed costs range from $3.50-$9.00 per sq ft."
  }
];

const quickAnswers = [
  { question: "10x12 room carpet cost?", answer: "$240-$960 installed" },
  { question: "12x12 room carpet cost?", answer: "$290-$1,150 installed" },
  { question: "20x20 room carpet cost?", answer: "$800-$3,200 installed" },
  { question: "700 sq ft carpet cost?", answer: "$1,400-$5,600 installed" },
  { question: "1000 sq ft carpet cost?", answer: "$3,500-$9,000 installed" },
  { question: "2000 sq ft carpet cost?", answer: "$4,000-$16,000 installed" },
  { question: "13 stairs carpet cost?", answer: "$260-$910 total" },
  { question: "Lowe's vs Home Depot?", answer: "Similar pricing, compare both" },
  { question: "Labor cost per sq ft?", answer: "$0.50-$2.00/sq ft" },
  { question: "Carpet removal cost?", answer: "$1.00-$2.00/sq ft" }
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto space-y-6 py-12 px-4">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Carpet Calculator FAQ - Common Questions</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            Updated February 2026
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Answers to the most common carpet cost questions including room sizes, 
          <a href="https://www.lowes.com/l/floors/carpet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Lowe's</a> and 
          <a href="https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Home Depot</a> pricing.
        </p>
      </div>

      {/* Quick Answers Grid */}
      <Card className="calculator-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Quick Carpet Cost Answers 2026
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {quickAnswers.map((item, index) => (
              <div key={index} className="p-2 bg-secondary/20 rounded-lg text-center">
                <div className="text-xs font-medium text-foreground mb-1">{item.question}</div>
                <Badge variant="secondary" className="text-xs">{item.answer}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="calculator-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-center">Detailed Carpet Cost FAQ</CardTitle>
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
