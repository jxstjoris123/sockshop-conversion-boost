const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="font-heading text-xl font-extrabold text-background">
            sokken<span className="text-accent">zaak</span>.nl
          </span>
          <p className="text-sm text-background/60 mt-3">
            Dé online sokkenspecialist van Nederland. Sokken voor elk moment.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-background text-sm mb-4">Assortiment</h4>
          <ul className="space-y-2">
            {["Damessokken", "Herensokken", "Wandelsokken", "Skisokken", "Sportsokken", "Werksokken"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-background/60 hover:text-accent transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-background text-sm mb-4">Klantenservice</h4>
          <ul className="space-y-2">
            {["Contact", "Verzending", "Retourneren", "Veelgestelde vragen", "Maattabel"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-background/60 hover:text-accent transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-background text-sm mb-4">Over ons</h4>
          <ul className="space-y-2">
            {["Over Sokkenzaak", "Zakelijk (B2B)", "Duurzaamheid", "Vacatures", "Algemene voorwaarden", "Privacybeleid"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-background/60 hover:text-accent transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/40">
          © 2026 Sokkenzaak.nl — Alle rechten voorbehouden. KvK: 12345678 | BTW: NL001234567B01
        </p>
        <div className="flex items-center gap-4 text-xs text-background/40">
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
