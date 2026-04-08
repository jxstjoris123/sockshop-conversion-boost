import { Star, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Sandra B.", text: "Heerlijke wandelsokken! Geen blaren meer, zelfs niet na 20km.", rating: 5, date: "2 dagen geleden" },
  { name: "Mark V.", text: "Snelle levering en goede kwaliteit. Bestel hier nu al voor de derde keer.", rating: 5, date: "1 week geleden" },
  { name: "Linda K.", text: "De bamboe sokken zijn zo zacht. Eindelijk sokken die niet jeuken!", rating: 5, date: "3 dagen geleden" },
];

const TrustSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-8">
          Wat klanten zeggen
        </h2>

        {/* Trust badges + reviews in asymmetric grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-4">
          {/* Left – trust badges stacked */}
          <div className="flex flex-col gap-3">
            <div className="bg-card rounded-bento p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-trust/10 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-trust fill-trust" />
                </div>
                <div>
                  <p className="font-black text-foreground">Trustpilot</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-trust text-sm">★</span>
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-bento p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-trust/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-trust" />
                </div>
                <div>
                  <p className="font-black text-foreground">WebwinkelKeur</p>
                  <p className="text-sm text-muted-foreground">Gecertificeerd ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – reviews */}
          <div className="grid sm:grid-cols-3 gap-3">
            {reviews.map((review) => (
              <div key={review.name} className="bg-card rounded-bento p-5 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">"{review.text}"</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <span className="font-bold text-sm text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
