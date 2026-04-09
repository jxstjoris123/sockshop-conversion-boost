import logoVanDijk from "@/assets/logo-vandijk.png";
import logoHcDeMeren from "@/assets/logo-hcdemeren.png";
import logoRunBase from "@/assets/logo-runbase.png";

const companies = [
  { name: "Sport & Mode Van Dijk", logo: logoVanDijk },
  { name: "HC De Meren", logo: logoHcDeMeren },
  { name: "RunBase Arnhem", logo: logoRunBase },
];

const B2BTrustedCompanies = () => {
  const doubled = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-10 mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
        Deze bedrijven gingen je voor
      </h2>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee gap-10 md:gap-16 w-max items-center">
          {doubled.map((company, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-muted/50 border border-border rounded-lg"
            >
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded"
              />
              <span className="text-sm md:text-base font-semibold text-muted-foreground whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BTrustedCompanies;
