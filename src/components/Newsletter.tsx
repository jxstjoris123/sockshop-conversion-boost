import { Mail } from "lucide-react";

const Newsletter = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          10% korting op je eerste bestelling
        </h2>
        <p className="text-muted-foreground mt-2">
          Schrijf je in voor onze nieuwsbrief en ontvang direct een kortingscode.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Je e-mailadres"
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
          >
            Aanmelden
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-3">
          Geen spam, max 2x per maand. Je kunt je altijd uitschrijven.
        </p>
      </div>
    </div>
  </section>
);

export default Newsletter;
