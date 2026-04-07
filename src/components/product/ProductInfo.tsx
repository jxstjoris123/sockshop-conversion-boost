import { useState } from "react";
import { Star, ShieldCheck, Truck, RotateCcw, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const sizes = ["35-38", "39-42", "43-46", "47-50"];
const colors = [
  { name: "Navy", value: "bg-[hsl(215,80%,22%)]" },
  { name: "Antraciet", value: "bg-[hsl(0,0%,30%)]" },
  { name: "Forest", value: "bg-[hsl(142,40%,30%)]" },
  { name: "Bordeaux", value: "bg-[hsl(345,60%,30%)]" },
];

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("Navy");
  const [qty, setQty] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({ title: "Kies een maat", description: "Selecteer een maat voordat je het product toevoegt.", variant: "destructive" });
      return;
    }
    toast({ title: "Toegevoegd aan winkelwagen!", description: `${qty}x Merinowol Wandelsok Pro – ${selectedColor}, maat ${selectedSize}` });
  };

  return (
    <div className="space-y-5">
      {/* Badge & Title */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-accent/15 text-accent text-xs font-bold">Bestseller</span>
          <span className="px-2.5 py-1 rounded-md bg-trust/15 text-trust text-xs font-bold">Op voorraad</span>
        </div>
        <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
          Premium Merinowol Wandelsok Pro
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Art.nr: SZ-WS-MER-001</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">4.9</span>
        <a href="#reviews" className="text-sm text-accent hover:underline">(128 reviews)</a>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-foreground">€14,95</span>
        <span className="text-lg text-muted-foreground line-through">€19,95</span>
        <span className="px-2 py-0.5 rounded bg-accent/15 text-accent text-xs font-bold">-25%</span>
      </div>

      {/* Color selector */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-2">Kleur: <span className="font-normal text-muted-foreground">{selectedColor}</span></p>
        <div className="flex items-center gap-2">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`w-8 h-8 rounded-full ${c.value} border-2 transition-all ${
                selectedColor === c.name ? "border-accent ring-2 ring-accent/30" : "border-border hover:border-accent/50"
              }`}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-foreground">Maat</p>
          <button className="text-xs text-accent hover:underline">Maattabel bekijken</button>
        </div>
        <div className="flex items-center gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                selectedSize === s
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-foreground bg-card hover:border-accent/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-border rounded-lg bg-card">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-foreground hover:bg-secondary transition-colors rounded-l-lg">−</button>
          <span className="px-4 py-2 text-sm font-semibold text-foreground min-w-[2.5rem] text-center">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-foreground hover:bg-secondary transition-colors rounded-r-lg">+</button>
        </div>
        <Button onClick={handleAddToCart} className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base py-6">
          <ShoppingCart className="w-5 h-5 mr-2" />
          In winkelwagen
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 shrink-0">
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* USPs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="flex items-center gap-2 text-sm text-foreground">
          <Truck className="w-4 h-4 text-trust flex-shrink-0" />
          <span>Gratis verzending vanaf €35</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground">
          <RotateCcw className="w-4 h-4 text-trust flex-shrink-0" />
          <span>30 dagen retourrecht</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground">
          <ShieldCheck className="w-4 h-4 text-trust flex-shrink-0" />
          <span>Veilig betalen met iDEAL</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
