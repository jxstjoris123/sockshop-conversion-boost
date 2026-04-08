import heroImage from "@/assets/hero-socks.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
            Nieuw seizoen ✦ Lente/Zomer 2026
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
            De perfecte sok voor élk moment
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-lg">
            Van dagelijks comfort tot topsport. Ontdek ons complete assortiment sokken voor dames en heren — altijd met snelle levering en gratis verzending vanaf €35.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#categorieën"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
            >
              Bekijk collectie
            </a>
            <a
              href="#b2b"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Zakelijke klanten
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroImage}
            alt="Collectie kleurrijke sokken voor dames en heren"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            loading="eager"
          />
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-highlight text-lg">★</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.8/5</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">2.400+ tevreden klanten</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
