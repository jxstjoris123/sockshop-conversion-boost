import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const features = [
  "80% Australische merinowol voor natuurlijke temperatuurregulatie",
  "Extra demping in hiel en teen voor langdurig comfort",
  "Naadloze teen voor blaarvrij wandelplezier",
  "Vochtafvoerend en geurwerend",
  "Geschikt voor alle seizoenen",
  "Verstevigde enkel voor optimale ondersteuning",
];

const specs = [
  { label: "Materiaal", value: "80% Merinowol, 15% Polyamide, 5% Elastaan" },
  { label: "Gewicht", value: "68 gram per sok" },
  { label: "Hoogte", value: "Halfhoog (crew)" },
  { label: "Wasvoorschrift", value: "Machine wasbaar op 30°C" },
  { label: "Geschikt voor", value: "Wandelen, trekking, dagelijks gebruik" },
];

const ProductDetails = () => (
  <section className="mt-12">
    <Accordion type="single" collapsible defaultValue="features" className="space-y-3">
      <AccordionItem value="features" className="bg-card border border-border rounded-xl px-5">
        <AccordionTrigger className="font-heading text-lg font-bold text-foreground hover:no-underline">
          Productkenmerken
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pb-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-trust flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="specs" className="bg-card border border-border rounded-xl px-5">
        <AccordionTrigger className="font-heading text-lg font-bold text-foreground hover:no-underline">
          Specificaties
        </AccordionTrigger>
        <AccordionContent>
          <dl className="divide-y divide-border pb-2">
            {specs.map((s) => (
              <div key={s.label} className="flex justify-between py-2.5 text-sm">
                <dt className="text-muted-foreground">{s.label}</dt>
                <dd className="text-foreground font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping" className="bg-card border border-border rounded-xl px-5">
        <AccordionTrigger className="font-heading text-lg font-bold text-foreground hover:no-underline">
          Verzending & Retour
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 text-sm text-foreground pb-2">
            <p>📦 <strong>Gratis verzending</strong> bij bestellingen vanaf €35. Onder €35 betaal je €3,95 verzendkosten.</p>
            <p>🚚 Besteld voor 16:00? <strong>Morgen in huis</strong> via PostNL.</p>
            <p>↩️ Niet tevreden? <strong>30 dagen gratis retourneren.</strong></p>
            <p>💳 Betaal veilig met iDEAL, Bancontact, creditcard of achteraf via Klarna.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);

export default ProductDetails;
