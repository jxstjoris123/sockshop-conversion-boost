import { Star } from "lucide-react";
import heroSocks from "@/assets/hero-socks.jpg";

const products = [
  { name: "Merinowol Skisok Thermo", price: "€17,95", oldPrice: "€22,95", rating: 4.8, reviews: 86, badge: "Nieuw", img: heroSocks },
  { name: "Dagelijkse Katoenen Sok 3-pack", price: "€12,95", rating: 4.7, reviews: 214, badge: "Populair", img: heroSocks },
  { name: "Werksok Extra Stevig", price: "€9,95", rating: 4.6, reviews: 156, img: heroSocks },
  { name: "Trail Running Sok Ultralight", price: "€13,95", oldPrice: "€16,95", rating: 4.8, reviews: 64, badge: "-18%", img: heroSocks },
];

const RelatedProducts = () => (
  <section className="mt-16">
    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Anderen bekeken ook</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((p) => (
        <a key={p.name} href="#" className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square overflow-hidden relative">
            <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            {p.badge && (
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-accent text-accent-foreground">
                {p.badge}
              </span>
            )}
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">{p.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3.5 h-3.5 fill-highlight text-highlight" />
              <span className="text-xs font-medium text-foreground">{p.rating}</span>
              <span className="text-xs text-muted-foreground">({p.reviews})</span>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="font-bold text-foreground">{p.price}</span>
              {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{p.oldPrice}</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default RelatedProducts;
