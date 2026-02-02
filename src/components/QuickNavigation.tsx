import { Calculator, ArrowUpDown, Home, Layers, Grid3X3, Wrench, BarChart3, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { id: 'calculator', label: 'Carpet Calculator', icon: Calculator, highlight: true },
  { id: 'stair-carpet-calculator', label: 'Stair Calculator', icon: ArrowUpDown },
  { id: 'multi-room', label: 'Multi-Room', icon: Home },
  { id: 'comparison-tool', label: 'Price Comparison', icon: BarChart3 },
  { id: 'tile-calculator', label: 'Tile Calculator', icon: Grid3X3 },
  { id: 'floor-comparison', label: 'Floor Types', icon: Layers },
  { id: 'retailers', label: 'Retailers', icon: Store },
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
        <div className="flex justify-center mt-3">
          <Badge variant="secondary" className="text-xs">
            Last Updated: February 2026 • Free Carpet Cost Estimator
          </Badge>
        </div>
      </div>
    </nav>
  );
};
