import { useReveal } from "@/hooks/useReveal";
import { Check, Lock, RotateCcw, ShieldCheck } from "lucide-react";

const lines = [
  "1 session EN DIRECT avec François Couplan chaque mois",
  "Accès immédiat aux 80+ modules vidéo",
  "Toutes les fiches plantes en PDF téléchargeables",
  "Recettes et préparations médicinales détaillées",
  "Accès à la communauté privée de membres",
  "Bonus : Guide de poche des plantes d'urgence",
  "Bonus : Calendrier de cueillette annuel imprimable",
];

const PricingSection = () => {
  const ref = useReveal();

  return (
    <section id="rejoindre" className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">L'offre</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-4">
          Rejoins les Secrets des Plantes Sauvages{" "}
          <em className="text-moss italic">aujourd'hui</em>
        </h2>
        <p className="text-base text-ink-mid leading-[1.82] mb-8">
          Voici exactement ce que tu obtiens en rejoignant la formation :
        </p>

        {/* Pricing card */}
        <div className="border border-border rounded-lg overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-forest p-7 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-display text-xl italic text-paper font-normal leading-snug mb-1">
                Les Secrets des Plantes Sauvages
              </h3>
              <p className="font-sans-ui text-xs text-paper/40 m-0">Accès mensuel complet · Sans engagement</p>
            </div>
            <div className="text-right">
              <div className="font-display text-5xl font-bold text-gold-light leading-none">
                <sup className="text-xl align-super">€</sup>XX
              </div>
              <div className="font-sans-ui text-xs text-paper/40 mt-1">/ mois</div>
            </div>
          </div>

          {/* Lines */}
          <div className="p-7 bg-background">
            {lines.map((line, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border last:border-b-0">
                <Check className="w-4 h-4 text-moss flex-shrink-0 mt-0.5" />
                <span className="text-[15px] text-ink-mid leading-snug">{line}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-7 bg-paper-2 border-t border-border">
            <a
              href="#"
              className="block w-full text-center font-sans-ui font-medium text-base bg-gold text-forest py-4 rounded hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(184,132,30,0.2)]"
            >
              Je rejoins les Secrets des Plantes Sauvages →
            </a>
            <div className="flex items-center justify-center gap-5 flex-wrap mt-4 font-sans-ui text-xs text-ink-faint">
              <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> Paiement sécurisé</span>
              <span className="flex items-center gap-1.5"><RotateCcw className="w-3 h-3" /> Résiliation en 2 clics</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Garantie 2 mois</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
