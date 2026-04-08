import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { name: "Dames", count: "120+", accent: "bg-[hsl(340,60%,65%)]" },
  { name: "Heren", count: "95+", accent: "bg-[hsl(210,50%,55%)]" },
  { name: "Sport", count: "60+", accent: "bg-accent" },
  { name: "Sale", count: "40%", accent: "bg-highlight" },
];

const Categories = () => {
  const ref = useScrollReveal();

  return (
    <section id="categorieën" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-8">
          Shop per categorie
        </h2>

        {/* Bento grid with varied sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase()}`}
              className={`group relative rounded-bento overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-200 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Color background as placeholder */}
              <div className={`absolute inset-0 ${cat.accent} opacity-15`} />
              <div className="relative h-full flex flex-col justify-between p-5 md:p-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-highlight text-highlight-foreground text-xs font-bold uppercase">
                    {cat.count} {i === 3 ? "korting" : "producten"}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <h3 className={`font-heading font-black text-foreground ${i === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                    {cat.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
