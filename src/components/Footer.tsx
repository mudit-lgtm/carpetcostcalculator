import { Home, Calculator, BookOpen, Building2, HelpCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold text-primary">
                Carpet Cost Calculator
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Free carpet installation cost calculator providing accurate estimates for materials, labor, and additional services since 2018.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Home className="h-4 w-4 text-blue-500" />
                Home
              </a>
              <a href="#calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Calculator className="h-4 w-4 text-green-500" />
                Calculator
              </a>
              <a href="#guide" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-500" />
                Carpet Guide
              </a>
              <a href="#retailers" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Building2 className="h-4 w-4 text-orange-500" />
                Retailer Pricing
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-red-500" />
                FAQ
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </a>
            </nav>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Free carpet cost estimates</li>
              <li>✓ Regional pricing data</li>
              <li>✓ DIY vs professional comparison</li>
              <li>✓ Multiple retailer prices</li>
              <li>✓ Instant PDF reports</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Carpet Installation Cost Calculator. Free tool for estimating flooring costs.</p>
        </div>
      </div>
    </footer>
  );
};