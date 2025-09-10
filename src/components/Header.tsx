import { Hammer, Home, Building2, Calculator, BookOpen, HelpCircle, Menu, X, Share2, Bookmark } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SocialShare } from "@/components/SocialShare";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hammer className="h-6 w-6 text-orange-500" />
          <div className="text-xl font-bold text-primary">
            Carpet Cost Calculator
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1">
            <Home className="h-4 w-4 text-blue-500" />
            Home
          </a>
          <a href="#calculator" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1">
            <Calculator className="h-4 w-4 text-green-500" />
            Calculator
          </a>
          <a href="#guide" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-purple-500" />
            Guide
          </a>
          <a href="#retailers" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1">
            <Building2 className="h-4 w-4 text-orange-500" />
            Retailers
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1">
            <HelpCircle className="h-4 w-4 text-red-500" />
            FAQ
          </a>
        </nav>

        {/* Social Share & Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SocialShare />
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <a
                href="/"
                className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4 text-blue-500" />
                Home
              </a>
              <a
                href="#calculator"
                className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calculator className="h-4 w-4 text-green-500" />
                Calculator
              </a>
              <a
                href="#guide"
                className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4 text-purple-500" />
                Guide
              </a>
              <a
                href="#retailers"
                className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Building2 className="h-4 w-4 text-orange-500" />
                Retailers
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-primary transition-smooth py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle className="h-4 w-4 text-red-500" />
                FAQ
              </a>
              
              {/* Mobile Social Share */}
              <div className="pt-4 border-t">
                <SocialShare />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};