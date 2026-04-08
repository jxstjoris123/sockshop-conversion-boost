const Footer = () => (
  <footer className="bg-foreground py-12 md:py-16 rounded-t-[2rem]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="font-heading text-xl font-black text-background">
            sokkenzaak<span className="text-accent">.nl</span>
          </span>
          <p className="text-sm text-background/50 mt-3 leading-relaxed">
            Dé online sokkenspecialist van Nederland. Sokken voor elk moment.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-background text-sm mb-4">Assortiment</h4>
          <ul className="space-y-2">
            {["Damessokken", "Herensokken", "Wandelsokken", "Sportsokken", "Werksokken"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-background/50 hover:text-accent transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-background text-sm mb-4">Klantenservice</h4>
          <ul className="space-y-2">
            {["Contact", "Verzending", "Retourneren", "FAQ", "Maattabel"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-background/50 hover:text-accent transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-background text-sm mb-4">Over ons</h4>
          <ul className="space-y-2">
            {["Over Sokkenzaak", "Zakelijk (B2B)", "Duurzaamheid", "Voorwaarden", "Privacy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-background/50 hover:text-accent transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-background/30">
          © 2026 Sokkenzaak.nl — Alle rechten voorbehouden
        </p>
        <div className="flex items-center gap-4 text-xs text-background/30">
          <span>iDEAL</span>
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>PostNL</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
