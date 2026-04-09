import { useReveal } from "@/hooks/useReveal";

const bonuses = [
  {
    tag: "Bonus 1",
    title: "Le Guide de Poche des Plantes d'Urgence",
    desc: "Les 30 plantes les plus utiles en situation de survie. Avec photos d'identification et utilisations détaillées. Format A6 plastifié, résistant à l'eau.",
  },
  {
    tag: "Bonus 2",
    title: "Le Calendrier de Cueillette Annuel",
    desc: "Mois par mois, savoir quoi cueillir, où chercher, comment préparer. Le guide saisonnier pour ne jamais manquer une récolte. Imprimable en A3.",
  },
  {
    tag: "Inclus",
    title: "Accès aux 80+ replays en HD",
    desc: "Toutes les sessions passées disponibles tant que ton abonnement est actif. À regarder, réécouter et annoter à ton rythme.",
  },
];

const BonusSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">Les bonus</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-10">
          Ce que tu reçois <em className="text-moss italic">en plus</em> avec ton abonnement
        </h2>

        <div className="space-y-0">
          {bonuses.map((b, i) => (
            <div key={i} className="flex items-start gap-5 py-5 border-b border-border last:border-b-0">
              <span className="flex-shrink-0 font-sans-ui text-[9px] font-semibold tracking-wider uppercase bg-gold text-forest px-2.5 py-1 rounded-sm mt-1 whitespace-nowrap">
                {b.tag}
              </span>
              <div>
                <h4 className="font-display text-base font-semibold text-ink leading-snug mb-1">{b.title}</h4>
                <p className="text-sm text-ink-soft leading-relaxed m-0">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
