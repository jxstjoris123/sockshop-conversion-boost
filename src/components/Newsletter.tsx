import { useScrollReveal } from "@/hooks/useScrollReveal";

const Newsletter = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-bento p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground">
              10% korting op je eerste bestelling
            </h2>
            <p className="text-muted-foreground mt-2">
              Schrijf je in voor onze nieuwsbrief en ontvang direct een kortingscode. Geen spam, max 2x per maand.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mt-6">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
