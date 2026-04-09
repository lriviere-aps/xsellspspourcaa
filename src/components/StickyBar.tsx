import { useEffect, useState } from "react";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("programme-section");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar once the bottom of the section has been scrolled past
        if (entry.boundingClientRect.bottom < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-forest border-b border-gold/20 px-6 py-3 flex items-center justify-between transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <span className="font-display italic text-sm text-paper/60">
        Les Secrets des Plantes Sauvages · François Couplan
      </span>
      <a
        href="#rejoindre"
        className="font-sans-ui font-medium text-sm bg-gold text-forest px-5 py-2 rounded hover:bg-gold-light transition-colors"
      >
        Rejoindre →
      </a>
    </div>
  );
};

export default StickyBar;
