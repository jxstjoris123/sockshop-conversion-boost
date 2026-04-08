import { Star, Truck, Leaf, Flame } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const bentoCards = [
  { icon: Star, label: "9.2 score", sub: "2.400+ reviews", color: "bg-highlight/15 text-highlight" },
  { icon: Truck, label: "Gratis verzending", sub: "Vanaf €29", color: "bg-trust/15 text-trust" },
  { icon: Leaf, label: "Sociaal verzonden", sub: "CO₂-neutraal", color: "bg-trust/15 text-trust" },
  { icon: Flame, label: "Sale", sub: "Tot 40% korting", color: "bg-accent/15 text-accent" },
];

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left – text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold">
              <Flame className="w-4 h-4" /> Lente/Zomer 2026
            </span>
            <h1 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] font-black text-foreground leading-[1.05] tracking-tight">
              Sokken die je wil laten zien.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Gratis verzending vanaf €29 · Sociaal verzonden · Snel in huis
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#categorieën"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-base hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
              >
                Shop nu
              </a>
              <a
                href="#b2b"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-bold text-base hover:bg-secondary hover:scale-[1.03] transition-all duration-200"
              >
                Zakelijke klanten
              </a>
            </div>
          </div>

          {/* Right – bento cards */}
          <div className="grid grid-cols-2 gap-3">
            {bentoCards.map((card) => (
              <div
                key={card.label}
                className="bg-card rounded-bento p-5 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-200 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <p className="font-bold text-foreground text-sm">{card.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
