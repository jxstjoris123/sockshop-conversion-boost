import { useState } from "react";
import { Star, Package, Truck, BarChart3, Check } from "lucide-react";
import productMain from "@/assets/b2b-product-main.jpg";
import productDetail from "@/assets/b2b-product-detail.jpg";
import productPackaging from "@/assets/b2b-product-packaging.jpg";

const images = [
  { src: productMain, alt: "Premium Merinowol Wandelsok Pro - productfoto" },
  { src: productDetail, alt: "Materiaaldetail merinowol weving" },
  { src: productPackaging, alt: "Retail-ready verpakking voor wederverkoop" },
];

const highlights = [
  "80% Australische merinowol",
  "Retail-ready verpakking met EAN",
  "Verkrijgbaar in 4 kleuren",
  "Seizoensloos – jaarrond verkoopbaar",
  "Bewezen bestseller bij 120+ retailers",
];

const B2BProductHero = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Images */}
      <div className="space-y-4">
        <div className="bg-card border border-border rounded-xl overflow-hidden aspect-square flex items-center justify-center">
          <img
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                activeImage === i ? "border-accent" : "border-border hover:border-accent/50"
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md bg-accent/15 text-accent text-xs font-bold">Bestseller</span>
            <span className="px-2.5 py-1 rounded-md bg-trust/15 text-trust text-xs font-bold">Op voorraad</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Premium Merinowol Wandelsok Pro
          </h1>
          <p className="text-muted-foreground mt-1">
            Art.nr: SZ-WS-MER-001 &nbsp;|&nbsp; EAN: 8712345678901
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">4.9/5</span>
          <span className="text-sm text-muted-foreground">(128 retailer-reviews)</span>
        </div>

        <p className="text-foreground leading-relaxed">
          Onze meest verkochte wandelsok, nu beschikbaar voor wederverkoop. Gemaakt van 80% Australische merinowol 
          met extra demping in hiel en teen. Deze sok wordt door consumenten beoordeeld met een 4.9 en is een 
          bewezen traffic-driver in de categorie outdoorsokken. Geleverd in retail-ready verpakking met EAN-code.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-secondary rounded-xl p-4 text-center">
            <BarChart3 className="w-5 h-5 text-accent mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">€14,95</p>
            <p className="text-xs text-muted-foreground">Adviesprijs consument</p>
          </div>
          <div className="bg-secondary rounded-xl p-4 text-center">
            <Package className="w-5 h-5 text-accent mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">12 paar</p>
            <p className="text-xs text-muted-foreground">Min. bestelhoeveelheid</p>
          </div>
          <div className="bg-secondary rounded-xl p-4 text-center">
            <Truck className="w-5 h-5 text-accent mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">24-48u</p>
            <p className="text-xs text-muted-foreground">Levertijd via PostNL</p>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-trust flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Colors */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Beschikbare kleuren</p>
          <div className="flex items-center gap-2">
            {[
              { name: "Navy", color: "bg-[hsl(215,80%,22%)]" },
              { name: "Antraciet", color: "bg-[hsl(0,0%,30%)]" },
              { name: "Forest", color: "bg-[hsl(142,40%,30%)]" },
              { name: "Bordeaux", color: "bg-[hsl(345,60%,30%)]" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full ${c.color} border-2 border-border`} />
                <span className="text-xs text-muted-foreground">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Beschikbare maten</p>
          <div className="flex items-center gap-2">
            {["35-38", "39-42", "43-46", "47-50"].map((size) => (
              <span
                key={size}
                className="px-3 py-1.5 rounded-md border border-border text-sm text-foreground bg-card hover:border-accent transition-colors cursor-pointer"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BProductHero;
