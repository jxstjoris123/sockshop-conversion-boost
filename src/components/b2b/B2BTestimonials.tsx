import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sandra van Dijk",
    role: "Inkoper",
    company: "SportXpress B.V.",
    initials: "SV",
    rating: 5,
    text: "We bestellen al ruim twee jaar onze wandel- en sportsokken bij Sokkenzaak. De kwaliteit is constant hoog, de levertijden zijn betrouwbaar en het retourpercentage bij onze klanten is minimaal. Een leverancier waar je op kunt bouwen.",
  },
  {
    name: "Mark Hendriks",
    role: "Eigenaar",
    company: "Outdoor Essentials",
    initials: "MH",
    rating: 5,
    text: "Als speciaalzaak in outdoorkleding is de kwaliteit van onze sokken cruciaal. Sokkenzaak levert niet alleen uitstekende producten, maar denkt ook mee over assortiment en seizoensinkoop. De staffelprijzen zijn zeer concurrerend.",
  },
  {
    name: "Lisa de Boer",
    role: "Category Manager",
    company: "FashionPoint Nederland",
    initials: "LB",
    rating: 5,
    text: "De samenwerking met Sokkenzaak verloopt vlekkeloos. Bestellingen worden snel en netjes geleverd, de communicatie is professioneel en het B2B-portaal maakt nabestellen heel eenvoudig. Onze winkels zijn erg tevreden over het assortiment.",
  },
  {
    name: "Richard Smeets",
    role: "Directeur",
    company: "Workwear Solutions",
    initials: "RS",
    rating: 5,
    text: "Voor onze bedrijfskleding-klanten hebben we een betrouwbare sokkenleverancier nodig. Sokkenzaak levert consistent op tijd, ook bij grote orders van 500+ paar. De mogelijkheid om op rekening te betalen scheelt enorm in onze cashflow.",
  },
];

const B2BTestimonials = () => (
  <section className="mt-16">
    <div className="text-center mb-10">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
        Wat zakelijke klanten zeggen
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Meer dan 500 bedrijven vertrouwen op Sokkenzaak voor hun sokkeninkoop.
        Lees waarom zij voor ons kiezen.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      {testimonials.map((t) => (
        <Card key={t.name} className="border-border bg-card">
          <CardContent className="p-6">
            <Quote className="w-8 h-8 text-accent/30 mb-4" />
            <p className="text-sm text-foreground leading-relaxed mb-5">
              "{t.text}"
            </p>
            <div className="flex items-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                  {t.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role} — {t.company}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default B2BTestimonials;
