import { useReveal } from "@/hooks/useReveal";

const modules = [
  { n: "I", title: "Les bases de l'identification sûre", desc: "Les critères qui ne trompent jamais" },
  { n: "II", title: "Les plantes comestibles du printemps", desc: "Ortie, pissenlit, ail des ours, lierre terrestre" },
  { n: "III", title: "Forêt d'été : champignons et baies", desc: "Espèces comestibles et méthodes de distinction" },
  { n: "IV", title: "Les plantes médicinales essentielles", desc: "Millepertuis, valériane, plantain, sureau" },
  { n: "V", title: "Survie en milieu sauvage européen", desc: "Ce que tu peux manger sans équipement en forêt" },
  { n: "VI", title: "Les arbres qui nourrissent", desc: "Hêtre, châtaignier, pin, bouleau : de la sève aux feuilles" },
  { n: "VII", title: "Plantes des bords de chemins", desc: "Les espèces accessibles même en zone périurbaine" },
  { n: "VIII", title: "Conserves et fermentations sauvages", desc: "Lacto-fermentation, huiles, vinaigres, sirops" },
];

const ProgramSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">Le programme</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-4">
          Un tour complet des plantes sauvages européennes.{" "}
          <em className="text-moss italic">Saison par saison, habitat par habitat.</em>
        </h2>

        <p className="text-base text-ink-mid leading-[1.82] mb-8">
          Le programme couvre tout ce dont tu as besoin pour transformer ta façon de voir la nature autour de toi :
        </p>

        <div className="space-y-0">
          {modules.map((m, i) => (
            <div key={i} className="flex items-baseline gap-4 py-3.5 border-b border-border last:border-b-0">
              <span className="font-display text-sm italic text-gold flex-shrink-0 min-w-[28px]">{m.n}.</span>
              <span className="font-medium text-[15px] text-ink flex-1 leading-snug">{m.title}</span>
              <span className="text-xs text-ink-faint italic hidden sm:inline">{m.desc}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-4 py-3.5 bg-paper-2 px-4 rounded mt-2">
            <span className="font-display text-sm italic text-ink-faint flex-shrink-0 min-w-[28px]">+27</span>
            <span className="text-sm text-ink-soft italic">...et 27 modules supplémentaires accessibles dès ton inscription</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
