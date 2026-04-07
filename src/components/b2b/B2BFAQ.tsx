import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wat is de minimale bestelhoeveelheid?",
    a: "De minimale bestelhoeveelheid is 12 paar per product. U kunt per kleur en maat apart bestellen, mits het totaal minimaal 12 paar betreft.",
  },
  {
    q: "Hoe werkt dropshipping bij Sokkenzaak?",
    a: "Bij dropshipping verzenden wij rechtstreeks naar uw klant in neutrale of uw eigen verpakking. U plaatst de bestelling via ons B2B-portal en wij handelen verzending en tracking af. Neem contact op voor de mogelijkheden.",
  },
  {
    q: "Kan ik een proefbestelling plaatsen?",
    a: "Ja, u kunt een proefbestelling van minimaal 12 paar plaatsen tegen de reguliere staffelprijs. Zo kunt u de kwaliteit zelf beoordelen voordat u een grotere order plaatst.",
  },
  {
    q: "Hoe snel wordt mijn bestelling geleverd?",
    a: "Bestellingen geplaatst vóór 15:00 worden dezelfde dag verzonden via PostNL. Levertijd is doorgaans 24-48 uur binnen Nederland. Voor België geldt een levertijd van 2-3 werkdagen.",
  },
  {
    q: "Kan ik op rekening betalen?",
    a: "Ja, na goedkeuring van uw B2B-account kunt u op rekening betalen met een betalingstermijn van 14 of 30 dagen, afhankelijk van uw klantprofiel.",
  },
  {
    q: "Zijn er POS-materialen beschikbaar?",
    a: "Ja, wij leveren gratis display-stands, productkaarten en sample-paren voor in uw winkel bij bestellingen vanaf 100 paar.",
  },
];

const B2BFAQ = () => (
  <section>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
        <HelpCircle className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Veelgestelde vragen</h2>
        <p className="text-sm text-muted-foreground">Voor zakelijke klanten</p>
      </div>
    </div>

    <Accordion type="single" collapsible className="bg-card border border-border rounded-xl overflow-hidden">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border last:border-b-0">
          <AccordionTrigger className="px-4 py-4 text-sm font-medium text-foreground hover:text-accent hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default B2BFAQ;
