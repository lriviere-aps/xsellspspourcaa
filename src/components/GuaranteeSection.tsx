import { useReveal } from "@/hooks/useReveal";

const GuaranteeSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">Sans risque</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-6">
          Je ne te demande pas de me faire confiance{" "}
          <em className="text-moss italic">les yeux fermés.</em>
        </h2>

        <p className="text-base text-ink-mid leading-[1.82] mb-5">C'est pour ça que tu as deux mois complets pour tout essayer.</p>
        <p className="text-base text-ink-mid leading-[1.82] mb-5">
          Rejoins la formation aujourd'hui. Assiste aux sessions EN DIRECT. Parcours tous les modules. Utilise les fiches, les recettes, les remèdes.
        </p>
        <p className="text-base text-ink-mid leading-[1.82] mb-8">
          Si au bout de 2 mois tu n'as pas appris des dizaines de choses concrètes… écris-nous et on te rembourse intégralement. Sans question. Sans justification.
        </p>

        <div className="flex items-start gap-7 p-8 border border-gold/30 rounded-lg bg-background max-sm:flex-col max-sm:gap-5">
          <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-gold bg-forest flex flex-col items-center justify-center max-sm:w-16 max-sm:h-16">
            <span className="font-display text-3xl font-bold text-gold-light leading-none max-sm:text-2xl">2</span>
            <span className="font-sans-ui text-[9px] uppercase tracking-wider text-gold-light mt-0.5">mois</span>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-ink mb-2">Satisfait ou intégralement remboursé</h4>
            <p className="text-sm text-ink-soft leading-relaxed m-0">
              Tu as 2 mois pour tester l'intégralité du programme. Si ce n'est pas pour toi, un email suffit. Zéro condition, zéro délai. On rembourse dans les 48h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
