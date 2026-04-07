import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Damessokken", description: "Stijlvol & comfortabel", emoji: "👩", count: "120+ producten" },
  { name: "Herensokken", description: "Klassiek tot casual", emoji: "👨", count: "95+ producten" },
  { name: "Wandelsokken", description: "Extra demping & steun", emoji: "🥾", count: "45+ producten" },
  { name: "Skisokken", description: "Warmte & bescherming", emoji: "⛷️", count: "30+ producten" },
  { name: "Werksokken", description: "De hele dag door", emoji: "🔧", count: "50+ producten" },
  { name: "Sportsokken", description: "Prestatie & comfort", emoji: "🏃", count: "60+ producten" },
];

const Categories = () => (
  <section id="categorieën" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Sokken voor elk moment
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Of je nu op zoek bent naar elegante sokken voor op kantoor of stevige sokken voor een bergwandeling — wij hebben het.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={`#${cat.name.toLowerCase()}`}
            className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
          >
            <span className="text-4xl">{cat.emoji}</span>
            <h3 className="font-heading font-bold text-lg text-foreground mt-4 group-hover:text-accent transition-colors">
              {cat.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-muted-foreground">{cat.count}</span>
              <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
