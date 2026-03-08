import { Hammer, Home, Calculator, Building2, HelpCircle, Menu, X, ArrowUpDown, Store } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Hammer className="h-6 w-6 text-primary" />
          <div className="text-xl font-bold text-primary">
            Carpet Cost Calculator
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="#calculator" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1 text-sm">
            <Calculator className="h-4 w-4 text-primary/80" />
            Cost Calculator
          </a>
          <a href="#stair-carpet-calculator" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1 text-sm">
            <ArrowUpDown className="h-4 w-4 text-primary/70" />
            Stairs
          </a>
          <a href="#comparison-tool" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1 text-sm">
            <Store className="h-4 w-4 text-primary/70" />
            Compare Prices
          </a>
          <a href="#retailers" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1 text-sm">
            <Building2 className="h-4 w-4 text-primary/80" />
            Retailers
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1 text-sm">
            <HelpCircle className="h-4 w-4 text-primary/70" />
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
              <a href="#calculator" className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Calculator className="h-4 w-4 text-primary/80" />
                Cost Calculator
              </a>
              <a href="#stair-carpet-calculator" className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <ArrowUpDown className="h-4 w-4 text-primary/70" />
                Stair Calculator
              </a>
              <a href="#comparison-tool" className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Store className="h-4 w-4 text-primary/70" />
                Compare Prices
              </a>
              <a href="#retailers" className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Building2 className="h-4 w-4 text-primary/80" />
                Retailers
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <HelpCircle className="h-4 w-4 text-primary/70" />
                FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
