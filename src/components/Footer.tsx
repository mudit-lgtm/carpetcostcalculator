import { Home, Calculator, ArrowUpDown, Building2, Grid3X3 } from "lucide-react";

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
                Carpet Calculator
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Free carpet installation cost calculator providing accurate estimates for materials, labor, and installation since 2018. Updated March 2026.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-3">Calculators</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary/80" />
                Carpet Calculator
              </a>
              <a href="#stair-carpet-calculator" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-primary/70" />
                Stair Calculator
              </a>
              <a href="#multi-room" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Grid3X3 className="h-4 w-4 text-primary/60" />
                Multi-Room Calculator
              </a>
              <a href="#comparison-tool" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary/70" />
                Price Comparison
              </a>
            </nav>
          </div>

          {/* Retailers - External Links */}
          <div>
            <h4 className="font-semibold mb-3">Top Retailers</h4>
            <nav className="flex flex-col space-y-2">
              <a href="https://www.lowes.com/l/floors/carpet" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Lowe's Carpet →
              </a>
              <a href="https://www.homedepot.com/b/Flooring-Carpet/N-5yc1vZaq7m" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home Depot Carpet →
              </a>
              <a href="https://www.costco.com/carpet-flooring.html" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Costco Carpet →
              </a>
              <a href="#retailers" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Compare All Retailers
              </a>
            </nav>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Free carpet cost estimates</li>
              <li>✓ Lowe's & Home Depot prices</li>
              <li>✓ Stair carpet calculator</li>
              <li>✓ Multi-room estimates</li>
              <li>✓ Instant PDF reports</li>
              <li>✓ 2026 pricing data</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Carpet Cost Calculator. Free tool for estimating carpet installation costs. Last Updated: March 2026</p>
        </div>
      </div>
    </footer>
  );
};
