import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-primary">
            Carpet Cost Calculator
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#calculator" className="text-muted-foreground hover:text-primary transition-smooth">
            Calculator
          </a>
          <a href="#guide" className="text-muted-foreground hover:text-primary transition-smooth">
            Carpet Guide
          </a>
          <a href="#retailers" className="text-muted-foreground hover:text-primary transition-smooth">
            Retailer Pricing
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth">
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <a
                href="#calculator"
                className="text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </a>
              <a
                href="#guide"
                className="text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Carpet Guide
              </a>
              <a
                href="#retailers"
                className="text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Retailer Pricing
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};