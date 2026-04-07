import { useState } from "react";
import productMain from "@/assets/product-sock-navy.jpg";
import productDetail from "@/assets/product-sock-detail.jpg";
import productLifestyle from "@/assets/product-sock-lifestyle.jpg";

const images = [
  { src: productMain, alt: "Premium Merinowol Wandelsok - Navy" },
  { src: productDetail, alt: "Merinowol materiaaldetail" },
  { src: productLifestyle, alt: "Wandelsok in gebruik op de trail" },
];

const ProductGallery = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-cover"
          loading="eager"
          width={1024}
          height={1024}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
              active === i ? "border-accent" : "border-border hover:border-accent/50"
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
