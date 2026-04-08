import { Search, ShoppingCart, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

const navItems = ["Dames", "Heren", "Sport", "Sale", "Merken"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-[14px] bg-background/85 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-heading text-xl font-black text-foreground tracking-tight">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
              <path d="M14 2C8 2 4 6 4 10c0 3 1.5 5 3 6.5C9 18.5 10 22 10 26h8c0-4 1-7.5 3-9.5C22.5 15 24 13 24 10c0-4-4-8-10-8z" fill="currentColor" opacity="0.2"/>
              <path d="M10 26h8M9 10c0-3 2-5 5-5s5 2 5 5c0 2.5-1.5 4.5-3 6-1 1-1.5 3-2 5-0.5-2-1-4-2-5C10.5 14.5 9 12.5 9 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            sokkenzaak<span className="text-accent">.nl</span>
          </a>

          {/* Nav center */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button className="p-2.5 rounded-full hover:bg-secondary transition-colors" aria-label="Zoeken">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button className="p-2.5 rounded-full hover:bg-secondary transition-colors" aria-label="Dark mode" onClick={toggle}>
              {dark ? <Sun className="w-5 h-5 text-foreground/60" /> : <Moon className="w-5 h-5 text-foreground/60" />}
            </button>
            <button className="relative p-2.5 rounded-full hover:bg-secondary transition-colors" aria-label="Winkelwagen">
              <ShoppingCart className="w-5 h-5 text-foreground/60" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2.5 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 pt-2 flex flex-col gap-1 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-3 rounded-xl hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
