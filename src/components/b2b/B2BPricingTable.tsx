import { TrendingUp, Info } from "lucide-react";

const tiers = [
  { qty: "12–49 paar", price: "€8,47", discount: "-", margin: "43%", perPair: "€8,47" },
  { qty: "50–99 paar", price: "€7,48", discount: "12%", margin: "50%", perPair: "€7,48", popular: false },
  { qty: "100–249 paar", price: "€6,72", discount: "21%", margin: "55%", perPair: "€6,72", popular: true },
  { qty: "250–499 paar", price: "€5,98", discount: "29%", margin: "60%", perPair: "€5,98" },
  { qty: "500+ paar", price: "Op aanvraag", discount: "—", margin: "—", perPair: "Op aanvraag" },
];

const B2BPricingTable = () => (
  <section id="staffelprijzen">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
        <TrendingUp className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Staffelprijzen (excl. BTW)</h2>
        <p className="text-sm text-muted-foreground">Hoe meer u bestelt, hoe scherper de prijs</p>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary">
            <th className="text-left px-4 py-3 font-semibold text-foreground">Aantal</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">Prijs per paar</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Korting</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              <span className="flex items-center gap-1">
                Marge*
                <Info className="w-3.5 h-3.5 text-muted-foreground" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier) => (
            <tr
              key={tier.qty}
              className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                tier.popular ? "bg-accent/5 border-l-2 border-l-accent" : ""
              }`}
            >
              <td className="px-4 py-3.5 font-medium text-foreground">
                {tier.qty}
                {tier.popular && (
                  <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold bg-accent text-accent-foreground">
                    POPULAIR
                  </span>
                )}
              </td>
              <td className="px-4 py-3.5 font-bold text-foreground">{tier.price}</td>
              <td className="px-4 py-3.5 text-trust font-semibold hidden sm:table-cell">
                {tier.discount !== "-" && tier.discount !== "—" ? tier.discount : <span className="text-muted-foreground">—</span>}
              </td>
              <td className="px-4 py-3.5 font-semibold text-trust">
                {tier.margin !== "—" ? tier.margin : <span className="text-muted-foreground">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-xs text-muted-foreground mt-3">
      * Marge berekend o.b.v. adviesprijs consument van €14,95 incl. BTW. Werkelijke marge kan afwijken afhankelijk van uw verkoopprijs.
    </p>
  </section>
);

export default B2BPricingTable;
