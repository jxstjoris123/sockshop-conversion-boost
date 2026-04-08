import { Building2, TrendingUp, Package, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: Package, title: "Voorraad op maat", text: "Breed assortiment direct leverbaar uit eigen voorraad" },
  { icon: TrendingUp, title: "Scherpe inkoopprijzen", text: "Staffelkortingen vanaf 50 paar" },
  { icon: Building2, title: "Dropshipping", text: "Wij verzenden rechtstreeks naar jouw klanten" },
  { icon: Headphones, title: "Persoonlijk contact", text: "Vast aanspreekpunt voor al je vragen" },
];

const B2BSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="b2b" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="bg-foreground rounded-bento p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold">
                B2B — Zakelijk
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-background leading-tight">
                Sokken inkopen voor jouw winkel?
              </h2>
              <p className="text-background/70 text-lg leading-relaxed">
                Fashionwinkels, sportzaken en bedrijven vertrouwen op Sokkenzaak.nl als hun vaste sokkenleverancier.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
              >
                Vraag B2B-account aan
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b.title} className="bg-background/5 border border-background/10 rounded-bento p-5">
                  <b.icon className="w-7 h-7 text-accent mb-3" />
                  <h3 className="font-bold text-background text-sm">{b.title}</h3>
                  <p className="text-xs text-background/60 mt-1">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
