import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <span>Welkom bij Sokkenzaak.nl — Dé sokkenspecialist van Nederland</span>
          <div className="flex items-center gap-4">
            <span>Klantenservice: 085-1234567</span>
            <a href="#b2b" className="hover:text-foreground transition-colors">Zakelijk bestellen</a>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          <a href="/" className="font-heading text-2xl font-extrabold text-primary tracking-tight">
            sokken<span className="text-accent">zaak</span>.nl
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["Dames", "Heren", "Sport", "Wandelen", "Skiën", "Werksokken"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Zoeken">
              <Search className="w-5 h-5 text-foreground/70" />
            </button>
            <button className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Account">
              <User className="w-5 h-5 text-foreground/70" />
            </button>
            <button className="relative p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Winkelwagen">
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4 flex flex-col gap-3">
            {["Dames", "Heren", "Sport", "Wandelen", "Skiën", "Werksokken"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-2 py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#b2b" className="text-sm font-medium text-accent px-2 py-1" onClick={() => setMobileOpen(false)}>
              Zakelijk bestellen
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
