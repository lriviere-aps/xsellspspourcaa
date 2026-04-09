import { useReveal } from "@/hooks/useReveal";
import francoisImg from "@/assets/francois-portrait.jpg";

const AboutSection = () => {
  const ref = useReveal();

  return (
    <section className="max-w-3xl mx-auto px-6 pt-20 pb-8">
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint">
            L'homme derrière les plantes
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink mb-8">
          Il a passé 40 ans à parcourir les forêts d'Europe.{" "}
          <em className="text-moss italic">À goûter. À documenter. À transmettre.</em>
        </h2>

        <div className="md:float-right md:ml-8 md:mb-6 md:w-64 mb-8">
          <img
            src={francoisImg}
            alt="François Couplan, ethnobotaniste"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            width={800}
            height={1000}
          />
          <div className="mt-3 px-1">
            <p className="font-display font-semibold text-sm text-ink">François Couplan</p>
            <p className="font-sans-ui text-xs text-ink-faint leading-relaxed mt-1">
              Ethnobotaniste, auteur de plus de 30 ouvrages, formateur auprès de milliers de personnes en Europe.
            </p>
          </div>
        </div>

        <p className="text-base text-ink-mid leading-[1.82] mb-5">
          Il y a des gens dont on se demande comment ils ont pu accomplir autant en une seule vie. François Couplan est de ceux-là.
        </p>
        <p className="text-base text-ink-mid leading-[1.82] mb-5">
          <strong className="text-ink font-medium">Botaniste, ethnobotaniste, auteur, conférencier.</strong> Depuis les années 1970, il sillonne l'Europe à pied, s'arrête dans les prairies, les berges, les sous-bois. Il goûte. Il identifie. Il consigne. Il revient encore.
        </p>
        <p className="text-base text-ink-mid leading-[1.82] mb-5">
          Il a répertorié des centaines d'espèces sauvages comestibles. Il en a écrit 30 ouvrages. Il a formé des milliers de personnes qui, aujourd'hui, se promènent dans la forêt avec un regard que les autres n'ont pas.
        </p>

        {/* Pull quote */}
        <blockquote className="my-10 py-7 px-8 border-l-[3px] border-gold bg-paper-2 rounded-r-lg">
          <p className="font-display italic text-lg md:text-xl leading-snug text-ink m-0">
            "Ce que François transmet, ce n'est pas juste l'identification d'une plante. C'est une façon d'habiter le monde."
          </p>
          <cite className="block mt-3 font-sans-ui not-italic text-xs text-ink-faint tracking-wide">
            — Marie-Laure D., membre depuis 18 mois
          </cite>
        </blockquote>

        <p className="text-base text-ink-mid leading-[1.82] clear-both">
          Et aujourd'hui, pour la première fois, il partage ce savoir en direct, chaque mois, avec une communauté de passionnés.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
