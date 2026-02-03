import { Calculator, ArrowUpDown, Grid3X3, Store, Building2 } from "lucide-react";

const navItems = [
  { id: 'calculator', label: 'Carpet Calculator', icon: Calculator, highlight: true },
  { id: 'stair-carpet-calculator', label: 'Stair Calculator', icon: ArrowUpDown },
  { id: 'multi-room', label: 'Multi-Room', icon: Grid3X3 },
  { id: 'comparison-tool', label: 'Price Comparison', icon: Store },
  { id: 'retailers', label: 'Retailers', icon: Building2 },
];

export const QuickNavigation = () => {
  return (
    <nav className="w-full py-4 px-4 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-200 hover:scale-105
                  ${item.highlight 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-background border border-border hover:border-primary hover:text-primary'
                  }
                `}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.split(' ')[0]}</span>
              </a>
            );
          })}
        </div>
        
        {/* Popular searches for SEO */}
        <div className="flex flex-wrap justify-center gap-1 mt-3 text-xs text-muted-foreground">
          <span>Popular:</span>
          <a href="#calculator" className="text-primary hover:underline">10x12 Room</a>
          <span>•</span>
          <a href="#calculator" className="text-primary hover:underline">12x12 Room</a>
          <span>•</span>
          <a href="#calculator" className="text-primary hover:underline">20x20 Room</a>
          <span>•</span>
          <a href="#stair-carpet-calculator" className="text-primary hover:underline">13 Stairs</a>
          <span>•</span>
          <a href="#comparison-tool" className="text-primary hover:underline">Lowe's Prices</a>
        </div>
      </div>
    </nav>
  );
};
