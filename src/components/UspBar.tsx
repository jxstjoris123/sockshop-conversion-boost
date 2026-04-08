import { Truck, Shield, Star, CreditCard } from "lucide-react";

const usps = [
  { icon: Truck, text: "Gratis verzending vanaf €35", sub: "Via PostNL" },
  { icon: CreditCard, text: "Veilig betalen", sub: "iDEAL, creditcard & meer" },
  { icon: Star, text: "9.2 gemiddelde score", sub: "Trustpilot & WebwinkelKeur" },
  { icon: Shield, text: "30 dagen retour", sub: "Niet goed? Geld terug" },
];

const UspBar = () => (
  <section className="bg-primary py-4">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {usps.map((usp) => (
          <div key={usp.text} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <usp.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-foreground">{usp.text}</p>
              <p className="text-xs text-primary-foreground/70">{usp.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UspBar;
