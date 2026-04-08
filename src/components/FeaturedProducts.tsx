import { ShoppingCart, Star } from "lucide-react";

const products = [
  { name: "Premium Merinowol Wandelsok", price: "14,95", oldPrice: "19,95", rating: 4.9, reviews: 128, badge: "Bestseller", category: "Wandelen" },
  { name: "Bamboe Everyday Sok 5-pack", price: "24,95", rating: 4.8, reviews: 342, badge: "Populair", category: "Dagelijks" },
  { name: "Thermo Skisok Pro", price: "16,95", rating: 4.7, reviews: 87, badge: null, category: "Skiën" },
  { name: "Business Sok Katoen 3-pack", price: "18,95", rating: 4.6, reviews: 215, badge: "Nieuw", category: "Werk" },
  { name: "Sport Compression Sok", price: "12,95", rating: 4.8, reviews: 164, badge: null, category: "Sport" },
  { name: "Dames Modal Sok 5-pack", price: "22,95", oldPrice: "27,95", rating: 4.9, reviews: 198, badge: "Aanbieding", category: "Dames" },
];

const FeaturedProducts = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Populaire sokken
          </h2>
          <p className="text-muted-foreground mt-2">Onze best beoordeelde en meest verkochte sokken</p>
        </div>
        <a href="#" className="hidden md:inline-flex items-center text-sm font-semibold text-accent hover:underline">
          Alle producten bekijken →
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Product image placeholder */}
            <div className="relative aspect-square bg-muted flex items-center justify-center">
              <span className="text-6xl opacity-30">🧦</span>
              {product.badge && (
                <span className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-bold ${
                  product.badge === "Aanbieding" || product.badge === "Bestseller"
                    ? "bg-accent text-accent-foreground"
                    : product.badge === "Nieuw"
                    ? "bg-trust text-trust-foreground"
                    : "bg-primary text-primary-foreground"
                }`}>
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <span className="text-xs text-muted-foreground">{product.category}</span>
              <h3 className="font-semibold text-foreground mt-1 group-hover:text-accent transition-colors line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-3.5 h-3.5 fill-highlight text-highlight" />
                <span className="text-xs font-medium text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">€{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">€{product.oldPrice}</span>
                  )}
                </div>
                <button
                  className="w-9 h-9 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                  aria-label={`${product.name} toevoegen aan winkelwagen`}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="text-sm font-semibold text-accent hover:underline">
          Alle producten bekijken →
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
