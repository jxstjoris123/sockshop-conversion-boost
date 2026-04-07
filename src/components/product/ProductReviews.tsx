import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  { name: "Marieke V.", date: "12 maart 2026", rating: 5, text: "Fantastische sokken! Heerlijk warm tijdens mijn wandeling door de Ardennen. Geen blaren, geen natte voeten. Ik heb direct nog 3 paar besteld.", helpful: 24 },
  { name: "Jan-Willem B.", date: "28 februari 2026", rating: 5, text: "Na jaren zoeken eindelijk de perfecte wandelsok gevonden. De merinowol is super zacht en de demping in de hiel maakt echt verschil op lange afstanden.", helpful: 18 },
  { name: "Sanne de G.", date: "15 februari 2026", rating: 4, text: "Goede kwaliteit sokken, draag ze nu dagelijks. Enige minpunt: ik had graag meer kleuropties gezien. Maar het comfort is top!", helpful: 9 },
  { name: "Peter K.", date: "3 januari 2026", rating: 5, text: "Snelle levering en de sokken zijn precies zoals beschreven. Mijn voeten blijven droog en warm, zelfs bij een hele dag wandelen in de regen.", helpful: 15 },
];

const ratingBreakdown = [
  { stars: 5, count: 98, pct: 77 },
  { stars: 4, count: 22, pct: 17 },
  { stars: 3, count: 5, pct: 4 },
  { stars: 2, count: 2, pct: 1.5 },
  { stars: 1, count: 1, pct: 0.5 },
];

const ProductReviews = () => (
  <section id="reviews" className="mt-12">
    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Klantbeoordelingen</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Summary */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center mb-4">
          <p className="text-4xl font-extrabold text-foreground">4.9</p>
          <div className="flex items-center justify-center gap-0.5 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Gebaseerd op 128 reviews</p>
        </div>
        <div className="space-y-2">
          {ratingBreakdown.map((r) => (
            <div key={r.stars} className="flex items-center gap-2 text-sm">
              <span className="w-8 text-right text-muted-foreground">{r.stars}★</span>
              <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                <div className="bg-highlight h-full rounded-full" style={{ width: `${r.pct}%` }} />
              </div>
              <span className="w-8 text-muted-foreground text-xs">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="md:col-span-2 space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-highlight text-highlight" />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground leading-relaxed">{review.text}</p>
            <button className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground hover:text-accent transition-colors">
              <ThumbsUp className="w-3.5 h-3.5" />
              Nuttig ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductReviews;
