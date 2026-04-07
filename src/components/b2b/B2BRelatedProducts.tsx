import { ArrowRight } from "lucide-react";

const related = [
  { name: "Bamboe Everyday Sok 5-pack", price: "€4,95", margin: "52%", moq: "24 paar", badge: "Populair" },
  { name: "Thermo Skisok Pro", price: "€7,20", margin: "48%", moq: "12 paar", badge: null },
  { name: "Business Sok Katoen 3-pack", price: "€5,60", margin: "50%", moq: "24 paar", badge: "Nieuw" },
  { name: "Sport Compression Sok", price: "€5,10", margin: "46%", moq: "12 paar", badge: null },
];

const B2BRelatedProducts = () => (
  <section className="mt-16">
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-heading text-2xl font-bold text-foreground">Gerelateerde producten voor wederverkoop</h2>
      <a href="#" className="hidden md:flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
        Volledig B2B-assortiment <ArrowRight className="w-4 h-4" />
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {related.map((p) => (
        <a
          key={p.name}
          href="#"
          className="group bg-card border border-border rounded-xl p-5 hover:border-accent hover:shadow-md transition-all"
        >
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
            <span className="text-5xl opacity-20">🧦</span>
          </div>
          {p.badge && (
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-accent text-accent-foreground mb-2">
              {p.badge}
            </span>
          )}
          <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {p.name}
          </h3>
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm font-bold text-foreground">vanaf {p.price}</span>
            <span className="text-xs font-semibold text-trust">~{p.margin}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">MOQ: {p.moq}</p>
        </a>
      ))}
    </div>
  </section>
);

export default B2BRelatedProducts;
