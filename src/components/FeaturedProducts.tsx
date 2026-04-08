import { ShoppingCart, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

const products = [
  { name: "Premium Merinowol Wandelsok", price: "14,95", oldPrice: "19,95", rating: 4.9, reviews: 128, badge: "BESTSELLER", color: "hsl(24,30%,75%)" },
  { name: "Bamboe Everyday 5-pack", price: "24,95", rating: 4.8, reviews: 342, badge: null, color: "hsl(142,25%,70%)" },
  { name: "Thermo Skisok Pro", price: "16,95", rating: 4.7, reviews: 87, badge: "NIEUW", color: "hsl(210,30%,70%)" },
  { name: "Business Katoen 3-pack", price: "18,95", rating: 4.6, reviews: 215, badge: null, color: "hsl(24,15%,65%)" },
  { name: "Sport Compression Sok", price: "12,95", rating: 4.8, reviews: 164, badge: "SALE", color: "hsl(16,60%,65%)" },
  { name: "Dames Modal 5-pack", price: "22,95", oldPrice: "27,95", rating: 4.9, reviews: 198, badge: "SALE", color: "hsl(340,35%,72%)" },
  { name: "Hardloop Performance", price: "11,95", rating: 4.7, reviews: 93, badge: "NIEUW", color: "hsl(45,50%,70%)" },
  { name: "Casual Stripe 3-pack", price: "15,95", rating: 4.5, reviews: 76, badge: null, color: "hsl(200,20%,75%)" },
];

const FeaturedProducts = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 md:py-20 bg-surface-2" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground">
            Populaire sokken
          </h2>
          <a href="#" className="hidden md:inline-flex items-center text-sm font-bold text-accent hover:underline">
            Alles bekijken →
          </a>
        </div>
      </div>

      {/* Scrollable row */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-[max(1rem,calc((100vw-1400px)/2+2rem))] snap-x snap-mandatory scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.name}
            className="group flex-shrink-0 w-[220px] md:w-[260px] bg-card rounded-bento overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-200 snap-start"
          >
            {/* Product color placeholder */}
            <div className="relative aspect-square flex items-center justify-center" style={{ backgroundColor: product.color }}>
              <span className="text-5xl opacity-40 select-none">🧦</span>
              {product.badge && (
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${
                  product.badge === "SALE" ? "bg-accent text-accent-foreground" : "bg-highlight text-highlight-foreground"
                }`}>
                  {product.badge}
                </span>
              )}
              {/* Quick add on hover */}
              <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-lg" aria-label="Toevoegen">
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-foreground text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-3.5 h-3.5 fill-highlight text-highlight" />
                <span className="text-xs font-medium text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-black text-foreground">€{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-muted-foreground line-through">€{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-6 md:hidden">
        <a href="#" className="text-sm font-bold text-accent hover:underline">Alles bekijken →</a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
