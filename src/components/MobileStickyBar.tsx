import { useEffect, useState } from "react";

const MobileStickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/90 backdrop-blur-md border-t border-border">
      <a
        href="#categorieën"
        className="flex items-center justify-center w-full py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-base shadow-lg"
      >
        Bekijk collectie
      </a>
    </div>
  );
};

export default MobileStickyBar;
