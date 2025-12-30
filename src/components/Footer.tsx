import { Home, Calculator, BookOpen, Building2, HelpCircle, ArrowUpDown, Layers, Grid3X3 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
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
                <Home className="h-4 w-4 text-primary/70" />
                Home
              </a>
              <a href="#calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary/80" />
                Calculator
              </a>
              <a href="#stair-carpet-calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-primary/70" />
                Stair Calculator
              </a>
              <a href="#guide" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary/60" />
                Carpet Guide
              </a>
            </nav>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-3">Tools</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#multi-room" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Multi-Room Calculator
              </a>
              <a href="#comparison-tool" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Price Comparison
              </a>
              <a href="#tile-calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Grid3X3 className="h-4 w-4 text-primary/70" />
                Tile Calculator
              </a>
              <a href="#floor-comparison" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary/60" />
                Floor Comparison
              </a>
              <a href="#maintenance-calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Maintenance Costs
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
              <li>✓ 2026 pricing data</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Carpet Installation Cost Calculator. Free tool for estimating flooring costs.</p>
        </div>
      </div>
    </footer>
  );
};