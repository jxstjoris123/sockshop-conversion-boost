import { Truck, Shield, Star, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const usps = [
  { icon: Truck, title: "Gratis verzending", text: "Vanaf €29, via PostNL" },
  { icon: Shield, title: "Veilig betalen", text: "iDEAL, creditcard & meer" },
  { icon: Star, title: "9.2 gemiddelde score", text: "Trustpilot & WebwinkelKeur" },
  { icon: Leaf, title: "Sociaal verzonden", text: "CO₂-neutraal bezorgd" },
];

const UspBar = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-12 md:py-16" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Asymmetric grid — not a boring 4-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] gap-3">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className={`bg-card rounded-bento p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-200 ${
                i === 0 || i === 3 ? "sm:col-span-1" : ""
              }`}
            >
              <usp.icon className="w-6 h-6 text-accent mb-3" />
              <p className="font-bold text-foreground">{usp.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspBar;
