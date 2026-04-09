import heroImg from "@/assets/hero-forest.jpg";

const stats = [
  { value: "80+", label: "Vidéos de terrain" },
  { value: "40+", label: "Ans d'expertise" },
  { value: "1/mois", label: "Session EN DIRECT" },
];

const HeroSection = () => (
  <header className="relative overflow-hidden bg-forest min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto animate-fade-up">

      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-paper mb-6">
        Découvre les{" "}
        <em className="text-gold-light italic">Secrets des Plantes Sauvages</em>
        {" "}avec le maître de la cueillette
      </h1>

      <p className="font-body italic text-lg md:text-xl text-paper/50 max-w-xl mx-auto mb-10 leading-relaxed">
        Avec François Couplan, ethnobotaniste et auteur de référence depuis plus de 40 ans. Cueillette, recettes, remèdes naturels.
      </p>

      <a
        href="#rejoindre"
        className="inline-flex items-center gap-2.5 font-sans-ui font-medium text-base bg-gold text-forest px-9 py-4 rounded hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_6px_28px_rgba(184,132,30,0.3)]"
      >
        Je veux accéder aux sessions →
      </a>

      <p className="font-sans-ui text-xs text-paper/25 mt-4 tracking-wide">
        Sans engagement · Garantie 2 mois · Résiliation en 2 clics
      </p>
    </div>

    {/* Stats */}
    <div className="relative z-10 flex items-center justify-center gap-0 mt-16 max-w-2xl w-full border-t border-paper/[0.07] pt-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
      {stats.map((s, i) => (
        <div key={i} className="flex items-center flex-1">
          {i > 0 && <div className="w-px h-10 bg-paper/[0.08] flex-shrink-0" />}
          <div className="text-center flex-1">
            <div className="font-display text-3xl font-bold text-gold-light leading-none">{s.value}</div>
            <div className="font-sans-ui text-[11px] text-paper/30 mt-1.5 uppercase tracking-wide leading-snug">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  </header>
);

export default HeroSection;
