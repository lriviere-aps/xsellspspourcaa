import { useEffect, useState } from "react";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("programme-section");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-lime-900 border-b border-gold/20 px-6 py-3 flex items-center justify-between transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <span className="font-sans italic text-sm text-white font-semibold">
        Débloque l'accès immédiat aux secrets des Plantes Sauvages de François Couplan
      </span>
      <a
        href="#pricing"
        className="font-sans-ui font-medium text-sm bg-gold text-forest px-5 py-2 rounded hover:bg-gold-light transition-colors"
      >
        Rejoindre →
      </a>
    </div>
  );
};

export default StickyBar;
