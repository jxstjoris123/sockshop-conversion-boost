import { useState } from "react";
import { ShoppingCart, Phone, FileDown, Calculator } from "lucide-react";

const B2BOrderForm = () => {
  const [qty, setQty] = useState(100);
  const pricePerPair =
    qty >= 250 ? 5.98 : qty >= 100 ? 6.72 : qty >= 50 ? 7.48 : 8.47;
  const total = qty * pricePerPair;
  const margin = ((14.95 / 1.21 - pricePerPair) / (14.95 / 1.21) * 100).toFixed(0);

  return (
    <div className="sticky top-24 space-y-6">
      {/* Order card */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-accent" />
          Bestelcalculator
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">
              Aantal paar
            </label>
            <input
              type="number"
              min={12}
              step={12}
              value={qty}
              onChange={(e) => setQty(Math.max(12, parseInt(e.target.value) || 12))}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <p className="text-xs text-muted-foreground mt-1">Min. 12 paar, per 12 stuks</p>
          </div>

          <div className="bg-secondary rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Prijs per paar</span>
              <span className="font-semibold text-foreground">€{pricePerPair.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Aantal</span>
              <span className="font-semibold text-foreground">{qty} paar</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Uw marge</span>
              <span className="font-semibold text-trust">~{margin}%</span>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Totaal excl. BTW</span>
                <span className="font-bold text-lg text-foreground">€{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
            <ShoppingCart className="w-4 h-4" />
            Toevoegen aan offerte
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
            <FileDown className="w-4 h-4" />
            Download productsheet (PDF)
          </button>
        </div>
      </div>

      {/* Contact card */}
      <div className="bg-primary rounded-xl p-6">
        <h3 className="font-heading text-base font-bold text-primary-foreground mb-2">
          Persoonlijk advies nodig?
        </h3>
        <p className="text-sm text-primary-foreground/70 mb-4">
          Ons B2B-team helpt u graag met maatwerk, grotere orders of dropshipping.
        </p>
        <a
          href="tel:+31851234567"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/20 transition-colors"
        >
          <Phone className="w-4 h-4" />
          085-1234567
        </a>
        <p className="text-xs text-primary-foreground/50 mt-2 text-center">
          Ma-vr 9:00–17:00 | b2b@sokkenzaak.nl
        </p>
      </div>
    </div>
  );
};

export default B2BOrderForm;
