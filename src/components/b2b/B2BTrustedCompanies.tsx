const companies = [
  "Intersport", "Perry Sport", "Decathlon", "Bever", "Sport 2000",
  "JD Sports", "Runners World", "AFC Ajax", "PSV Eindhoven", "Feyenoord",
  "SC Heerenveen", "AZ Alkmaar", "Hockey Club Bloemendaal", "KNVB",
  "Atletiekunie", "Running Center", "Sportcity", "Basic-Fit",
];

const B2BTrustedCompanies = () => {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-10 mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
        Deze bedrijven gingen je voor
      </h2>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee gap-8 md:gap-12 w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 bg-muted/50 border border-border rounded-lg"
            >
              <span className="text-sm md:text-base font-semibold text-muted-foreground whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BTrustedCompanies;
