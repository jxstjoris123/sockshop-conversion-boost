import { Star } from "lucide-react";
import logoVanDijk from "@/assets/logo-vandijk.png";
import logoHcDeMeren from "@/assets/logo-hcdemeren.png";
import logoRunBase from "@/assets/logo-runbase.png";

const reviews = [
  {
    name: "Martijn de Vries",
    role: "Inkoper",
    company: "Sport & Mode Van Dijk",
    logo: logoVanDijk,
    rating: 5,
    text: "We bestellen al ruim een jaar onze wandelsokken bij Sokkenzaak. De kwaliteit is uitstekend, de levertijden kloppen altijd en onze klanten zijn zeer tevreden. De staffelprijzen maken het voor ons als kleine winkel heel aantrekkelijk.",
  },
  {
    name: "Lisa Bergsma",
    role: "Bestuurslid",
    company: "HC De Meren",
    logo: logoHcDeMeren,
    rating: 5,
    text: "Voor ons hockeyteam bestellen we elk seizoen sportsokken in clubkleuren. De communicatie is snel, de kwaliteit top en de sokken blijven goed na vele wasbeurten. Absolute aanrader voor sportclubs!",
  },
  {
    name: "Thomas Hendriks",
    role: "Eigenaar",
    company: "RunBase Arnhem",
    logo: logoRunBase,
    rating: 4,
    text: "Als gespecialiseerde hardloopwinkel zijn we kritisch op kwaliteit. De merinowol sokken van Sokkenzaak voldoen aan onze eisen en verkopen uitstekend. Fijn dat we op rekening kunnen betalen.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const B2BReviews = () => (
  <section className="py-10 mt-4">
    <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-2">
      Wat onze zakelijke klanten zeggen
    </h2>
    <p className="text-center text-muted-foreground mb-8 text-sm">
      Beoordelingen van bedrijven die al met ons samenwerken
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((review, i) => (
        <div
          key={i}
          className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between"
        >
          <div>
            <StarRating rating={review.rating} />
            <p className="text-foreground text-sm mt-4 leading-relaxed">
              "{review.text}"
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
            <img
              src={review.logo}
              alt={review.company}
              loading="lazy"
              width={36}
              height={36}
              className="w-9 h-9 object-contain rounded"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">{review.name}</p>
              <p className="text-xs text-muted-foreground">
                {review.role} · {review.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default B2BReviews;
