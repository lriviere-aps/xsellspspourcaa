import { useReveal } from "@/hooks/useReveal";
import { Play, BookOpen, Leaf, UtensilsCrossed, Users } from "lucide-react";

const features = [
  { icon: Play, title: "1 session EN DIRECT par mois", desc: "Avec François Couplan. Questions ouvertes, démonstrations terrain, identification en temps réel." },
  { icon: BookOpen, title: "80+ modules vidéo disponibles", desc: "Organisés par saison, par habitat, par usage. Accessibles dès ton inscription." },
  { icon: Leaf, title: "60+ fiches plantes détaillées", desc: "Identification, période de cueillette, recettes, propriétés médicinales, risques de confusion." },
  { icon: UtensilsCrossed, title: "Des dizaines de recettes", desc: "Soupes sauvages, tisanes, pestos, huiles infusées, remèdes maison et conserves." },
  { icon: Users, title: "La communauté privée", desc: "Échange, partage tes découvertes, fais identifier tes plantes par des membres expérimentés." },
];

const FeaturesSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">Ce que tu reçois</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-4">
          <em className="text-moss italic">Une session EN DIRECT chaque mois.</em> Et une bibliothèque entière pour commencer dès aujourd'hui.
        </h2>

        <p className="text-base text-ink-mid leading-[1.82] mb-10">
          Chaque mois, François organise une session en direct. Vidéo, micro ouvert, terrain selon le sujet. Il enseigne. Il montre. Et tu peux poser tes questions en temps réel.
        </p>

        <div className="space-y-0">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-b-0 group">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-forest/5 flex items-center justify-center mt-0.5 group-hover:bg-forest/10 transition-colors">
                <f.icon className="w-4 h-4 text-sage" />
              </div>
              <div>
                <p className="font-medium text-ink text-[15px] leading-snug">{f.title}</p>
                <p className="text-sm text-ink-soft leading-relaxed mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-6 italic">
          Et si tu rates une session live ? Pas de panique. Tout est enregistré et disponible en replay dans les 48h.
        </p>

        {/* Inline CTA */}
        <div className="mt-12 text-center p-8 border border-border rounded-lg bg-paper-2">
          <p className="font-sans-ui text-[11px] font-medium tracking-[2px] uppercase text-ink-faint mb-3">Accès immédiat</p>
          <h3 className="font-display text-xl font-bold text-ink mb-2">80+ modules déjà disponibles dès ton inscription</h3>
          <p className="text-sm text-ink-soft mb-5">Tu ne pars pas de zéro. Tu accèdes à des années d'enseignements archivés.</p>
          <a href="#rejoindre" className="inline-flex items-center gap-2 font-sans-ui font-medium text-sm bg-gold text-forest px-7 py-3 rounded hover:bg-gold-light transition-colors">
            Je rejoins la formation →
          </a>
          <p className="font-sans-ui text-xs text-ink-faint mt-3">Sans engagement · Garantie 2 mois</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
