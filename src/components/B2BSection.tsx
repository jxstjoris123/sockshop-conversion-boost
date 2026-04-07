import { Building2, TrendingUp, Package, Headphones } from "lucide-react";

const benefits = [
  { icon: Package, title: "Voorraad op maat", text: "Breed assortiment direct leverbaar uit eigen voorraad" },
  { icon: TrendingUp, title: "Scherpe inkoopprijzen", text: "Staffelkortingen vanaf 50 paar" },
  { icon: Building2, title: "Dropshipping mogelijk", text: "Wij verzenden rechtstreeks naar jouw klanten" },
  { icon: Headphones, title: "Persoonlijk contact", text: "Vast aanspreekpunt voor al je vragen" },
];

const B2BSection = () => (
  <section id="b2b" className="py-16 md:py-24 bg-primary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
            B2B — Zakelijk
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Sokken inkopen voor jouw winkel?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Fashionwinkels, sportzaken en bedrijven vertrouwen op Sokkenzaak.nl als hun vaste sokkenleverancier. Profiteer van scherpe inkoopprijzen, snelle levertijden en een breed assortiment.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Vraag een B2B-account aan
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5">
              <b.icon className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-primary-foreground text-sm">{b.title}</h3>
              <p className="text-xs text-primary-foreground/70 mt-1">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default B2BSection;
