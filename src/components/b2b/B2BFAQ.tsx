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
    a: "De minimale bestelhoeveelheid (MOQ) is 12 paar per product. U kunt binnen die bestelling vrij variëren in maten en kleuren — zolang het totale aantal minimaal 12 paar bedraagt. Dit geldt per artikelnummer. Heeft u meerdere producten nodig? Dan geldt de MOQ per product apart. Bij grotere orders profiteren u automatisch van onze staffelkortingen, waarmee de inkoopprijs per paar aanzienlijk daalt. Neem gerust contact op als u een maatwerkofferte wenst voor grote volumes.",
  },
  {
    q: "Hoe werkt dropshipping bij Sokkenzaak?",
    a: "Bij dropshipping verzenden wij uw bestellingen rechtstreeks naar uw eindklant, zonder dat u zelf voorraad hoeft aan te houden. De verzending gebeurt in neutrale verpakking, of — indien gewenst — in uw eigen huisstijl (whitelabel). U plaatst eenvoudig een bestelling via ons B2B-portal of per e-mail, waarna wij de order oppakken, verzenden en de trackingcode aan u doorgeven. Uw klant ziet nergens onze naam. Dit is ideaal voor webshops die hun assortiment willen uitbreiden zonder voorraadrisico. Neem contact op met ons B2B-team om de mogelijkheden en voorwaarden te bespreken.",
  },
  {
    q: "Kan ik een proefbestelling plaatsen?",
    a: "Absoluut. Wij moedigen proefbestellingen aan zodat u de kwaliteit van onze producten zelf kunt ervaren. Een proefbestelling begint vanaf de minimale afname van 12 paar en wordt gefactureerd tegen de reguliere staffelprijs. U ontvangt exact dezelfde kwaliteit als bij grotere orders, inclusief dezelfde verpakking en labeling. Bent u tevreden? Dan kunt u eenvoudig opschalen naar grotere volumes met bijbehorende volumekortingen.",
  },
  {
    q: "Hoe snel wordt mijn bestelling geleverd?",
    a: "Bestellingen die vóór 15:00 uur op werkdagen worden geplaatst, verzenden wij dezelfde dag nog via PostNL. De standaard levertijd binnen Nederland is 24 tot 48 uur. Voor leveringen naar België rekent u op 2 tot 3 werkdagen. Bij grotere orders (500+ paar) kan de levertijd iets langer zijn — wij informeren u hier altijd vooraf over. Heeft u een spoedbestelling? Neem dan contact op; in veel gevallen kunnen wij een expreslevering regelen.",
  },
  {
    q: "Kan ik op rekening betalen?",
    a: "Ja, betalen op rekening is mogelijk na goedkeuring van uw zakelijke account. Na een succesvolle kredietcheck ontvangt u een betalingstermijn van 14 of 30 dagen, afhankelijk van uw klantprofiel en bestelhistorie. Bij uw eerste bestelling vragen wij om vooruitbetaling of betaling via iDEAL. Zodra uw account is goedgekeurd, kunt u bij elke volgende bestelling kiezen voor betaling op factuur. Wij werken met duidelijke facturen inclusief BTW-specificatie, zodat uw boekhouding altijd op orde is.",
  },
  {
    q: "Zijn er POS-materialen beschikbaar?",
    a: "Ja, wij ondersteunen u graag bij de verkoop in uw fysieke winkel. Bij bestellingen vanaf 100 paar leveren wij gratis point-of-sale materialen, waaronder display-stands, productkaarten met USP's en sample-paren voor klanten om te voelen. Voor grotere samenwerkingen kunnen wij ook op maat gemaakte displays en promotiemateriaal verzorgen. Daarnaast bieden wij digitale productfoto's en beschrijvingen aan die u direct kunt gebruiken voor uw webshop of social media.",
  },
  {
    q: "Hoe vraag ik een B2B-account aan?",
    a: "Een zakelijk account aanvragen is eenvoudig. Vul het B2B-aanvraagformulier in met uw bedrijfsgegevens, KvK-nummer en BTW-ID. Ons team beoordeelt uw aanvraag doorgaans binnen 1 werkdag. Na goedkeuring krijgt u direct toegang tot onze zakelijke prijzen, staffelkortingen en de mogelijkheid om op rekening te bestellen. Heeft u vragen over het aanvraagproces? Ons B2B-team staat voor u klaar via e-mail of telefoon.",
  },
  {
    q: "Kan ik producten retourneren als zakelijke klant?",
    a: "Wij hanteren een soepel retourbeleid voor zakelijke klanten. Onbeschadigde en ongedragen producten in originele verpakking kunt u binnen 14 dagen na ontvangst retourneren. Neem hiervoor eerst contact op met ons B2B-team, zodat wij een retourlabel en instructies kunnen versturen. Houd er rekening mee dat maatwerk- of bedrukte producten niet retourneerbaar zijn. Na ontvangst en controle van de retourzending wordt het bedrag binnen 5 werkdagen gecrediteerd.",
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
