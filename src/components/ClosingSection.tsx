import { useReveal } from "@/hooks/useReveal";

const ClosingSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="flex-1 max-w-20 h-px bg-border" />
          <span className="text-gold text-lg">✦</span>
          <div className="flex-1 max-w-20 h-px bg-border" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-ink mb-5">
          La forêt a tout ce qu'il te faut.
          <br />
          <em className="text-moss italic">Il te manque juste le guide.</em>
        </h2>

        <p className="text-base text-ink-soft max-w-md mx-auto mb-8 leading-relaxed">
          Rejoins les membres qui ont déjà transformé leurs promenades en forêt en véritable garde-manger et pharmacie naturelle.
        </p>

        <a
          href="#rejoindre"
          className="inline-flex items-center gap-2.5 font-sans-ui font-medium text-base bg-gold text-forest px-9 py-4 rounded hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_6px_28px_rgba(184,132,30,0.25)]"
        >
          Je rejoins les Secrets des Plantes Sauvages →
        </a>
        <p className="font-sans-ui text-xs text-ink-faint mt-4">
          Sans engagement · Garantie 2 mois · Résiliation en 2 clics
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
