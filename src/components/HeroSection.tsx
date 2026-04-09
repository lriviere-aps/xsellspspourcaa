import heroImg from "@/assets/hero-forest.jpg";

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

      <p className="font-body italic text-lg md:text-xl text-paper/50 max-w-xl mx-auto leading-relaxed">
        Avec François Couplan, ethnobotaniste et auteur de référence depuis plus de 40 ans. Cueillette, recettes, remèdes naturels.
      </p>
    </div>
  </header>
);

export default HeroSection;
