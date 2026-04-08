import { Star, CheckCircle } from "lucide-react";

const reviews = [
  { name: "Sandra B.", text: "Heerlijke wandelsokken! Geen blaren meer, zelfs niet na 20km.", rating: 5, date: "2 dagen geleden" },
  { name: "Mark V.", text: "Snelle levering en goede kwaliteit. Bestel hier nu al voor de derde keer.", rating: 5, date: "1 week geleden" },
  { name: "Linda K.", text: "De bamboe sokken zijn zo zacht. Eindelijk sokken die niet jeuken!", rating: 5, date: "3 dagen geleden" },
];

const TrustSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Waarom klanten ons vertrouwen
        </h2>
        <p className="text-muted-foreground mt-3">
          Meer dan 2.400 tevreden klanten gingen je voor
        </p>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
        <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
          <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 text-trust fill-trust" />
          </div>
          <div>
            <p className="font-bold text-foreground">Trustpilot</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-trust text-sm">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-1">4.8/5</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
          <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-trust" />
          </div>
          <div>
            <p className="font-bold text-foreground">WebwinkelKeur</p>
            <p className="text-sm text-muted-foreground">Gecertificeerd ✓</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.name} className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed">"{review.text}"</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <span className="font-semibold text-sm text-foreground">{review.name}</span>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
