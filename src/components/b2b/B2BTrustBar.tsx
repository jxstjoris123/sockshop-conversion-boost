import { Building2, Truck, Shield, Clock } from "lucide-react";

const items = [
  { icon: Building2, text: "500+ zakelijke klanten" },
  { icon: Truck, text: "Gratis verzending vanaf 50 paar" },
  { icon: Shield, text: "Factuur betaling op rekening" },
  { icon: Clock, text: "Besteld vóór 15:00, morgen geleverd" },
];

const B2BTrustBar = () => (
  <div className="bg-primary py-3">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default B2BTrustBar;
