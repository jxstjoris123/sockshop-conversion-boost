import { FileText } from "lucide-react";

const specs = [
  { label: "Materiaal", value: "80% Merinowol, 15% Polyamide, 5% Elastaan" },
  { label: "Gewicht per paar", value: "85 gram" },
  { label: "Beschikbare maten", value: "35-38, 39-42, 43-46, 47-50" },
  { label: "Kleuren", value: "Navy, Antraciet, Forest, Bordeaux" },
  { label: "Seizoen", value: "Jaarrond (najaar/winter bestseller)" },
  { label: "Demping", value: "Extra demping hiel & teen (Terry loop)" },
  { label: "Boord", value: "Rib-gebreide boord, antislip" },
  { label: "Naad", value: "Handgekettelde teenaad (geen drukpunten)" },
  { label: "Wasvoorschrift", value: "30°C machinewas, niet in de droger" },
  { label: "Verpakking", value: "Retail-ready hangverpakking met EAN barcode" },
  { label: "Verpakkingseenheid", value: "12 paar per doos (assorti of 1 kleur)" },
  { label: "EAN-code", value: "8712345678901 (per maat/kleur)" },
  { label: "HS-code", value: "6115.95" },
  { label: "Land van herkomst", value: "Portugal" },
];

const B2BProductSpecs = () => (
  <section>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
        <FileText className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Productspecificaties</h2>
        <p className="text-sm text-muted-foreground">Alle technische details voor uw inkoopdossier</p>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          className={`grid grid-cols-2 px-4 py-3 text-sm ${
            i % 2 === 0 ? "bg-card" : "bg-secondary/50"
          } ${i < specs.length - 1 ? "border-b border-border" : ""}`}
        >
          <span className="font-medium text-muted-foreground">{spec.label}</span>
          <span className="text-foreground">{spec.value}</span>
        </div>
      ))}
    </div>
  </section>
);

export default B2BProductSpecs;
