import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Est-ce adapté si je suis débutant en botanique ?",
    a: "Absolument. François a une pédagogie remarquable pour les néophytes. Il commence toujours par les bases de l'identification et les critères de sécurité. Plus de 60% de nos membres n'avaient aucune connaissance en botanique avant de s'inscrire.",
  },
  {
    q: "Que se passe-t-il si je rate une session EN DIRECT ?",
    a: "Chaque session est enregistrée et disponible en replay dans les 48h. Tu peux la regarder autant de fois que tu veux, tant que ton abonnement est actif.",
  },
  {
    q: "Puis-je résilier à tout moment ?",
    a: "Oui, sans condition ni délai de préavis. Tu résilies en 2 clics depuis ton espace membre. Et si tu souhaites revenir plus tard, tu retrouves tous tes modules débloqués.",
  },
  {
    q: "Ces connaissances sont-elles valables partout en France et en Suisse ?",
    a: "Oui. François enseigne les plantes communes à toute l'Europe tempérée. Il indique toujours les variations régionales. Les espèces poussent aussi bien dans les Alpes que dans les Landes ou les Vosges.",
  },
];

const FAQSection = () => {
  const ref = useReveal();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">Questions fréquentes</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-10">
          Les questions que tu te poses{" "}
          <em className="text-moss italic">avant de te lancer</em>
        </h2>

        <div className="space-y-0">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-5 gap-4 text-left font-body text-base text-ink hover:text-moss transition-colors"
              >
                {f.q}
                <Plus
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                    openIdx === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIdx === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[15px] text-ink-soft leading-[1.8] m-0">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
