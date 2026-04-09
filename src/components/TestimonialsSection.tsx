import { useReveal } from "@/hooks/useReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    body: "J'ai appris plus en 3 mois avec François qu'en 10 ans de lectures. Ses sessions en direct sont d'une richesse incroyable. Je me promène en forêt avec un regard complètement différent.",
    name: "Marie-Laure D.",
    info: "Membre depuis 18 mois · Normandie",
  },
  {
    body: "Les fiches plantes sont des bijoux. Je les ai imprimées et elles m'accompagnent en randonnée. Depuis que je suis membre, j'ai identifié plus de 60 espèces comestibles près de chez moi.",
    name: "Pierre T.",
    info: "Membre depuis 8 mois · Ardèche",
  },
  {
    body: "François est passionnant. Sa façon d'expliquer l'histoire et la culture derrière chaque plante te donne envie d'aller explorer. La communauté est aussi très active et bienveillante.",
    name: "Sylvie C.",
    info: "Membre depuis 12 mois · Suisse",
  },
];

const TestimonialsSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">Ce qu'en disent les membres</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-10">
          Ils ont rejoint la formation.{" "}
          <em className="text-moss italic">Voici ce qu'ils en disent.</em>
        </h2>

        <div className="space-y-5">
          {testimonials.map((t, i) => (
            <div key={i} className={`p-6 bg-paper-2 rounded-lg border-l-[3px] ${i === 0 ? "border-sage" : "border-paper-3"}`}>
              <p className="italic text-[15px] text-ink-mid leading-[1.75] mb-4">"{t.body}"</p>
              <div className="flex items-center gap-3 font-sans-ui text-xs text-ink-faint">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-medium text-ink-soft">{t.name}</span>
                <span>·</span>
                <span>{t.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
