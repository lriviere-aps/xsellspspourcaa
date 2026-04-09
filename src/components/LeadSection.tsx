import { Video, FileText, Radio, Headphones } from "lucide-react";

const LeadSection = () => (
  <section className="bg-background font-sans">
    {/* Part 1 — Le constat */}
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-foreground text-left font-sans">
        Nous sommes la première génération de l'histoire humaine à ne pas savoir nous nourrir grâce à la nature.
      </h2>

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
        <p>Depuis la naissance de l'humanité, tous nos ancêtres ont su se nourrir grâce à la nature.</p>
        <p>Certes, ils ne cueillaient probablement pas quotidiennement.</p>
        <p>
          Mais tous savaient identifier les plantes vitales&nbsp;: celles comestibles,
          celles pour préparer des remèdes et celles à éviter absolument.
        </p>
        <p>Et ce n'était pas une compétence de spécialiste.</p>
        <p className="font-semibold text-foreground">
          C'était aussi banal que savoir allumer un feu ou coudre un vêtement.
        </p>
      </div>
    </div>

    {/* Transition — la perte */}
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-5 text-base md:text-lg leading-relaxed font-sans">
        <h2 className="text-2xl md:text-3xl font-bold text-left font-sans">
          En deux générations, cette compétence a pratiquement disparu.
        </h2>
        <p>
          L'exode rural, l'industrialisation alimentaire et la grande distribution
          ont fait disparaître ce savoir millénaire.
        </p>
        <p>
          Parce qu'à chaque étape, quelqu'un d'autre prend en charge ce que nous
          faisions autrefois nous-mêmes.
        </p>
        <p>Quelqu'un d'autre cultive, transforme, conditionne, livre…</p>
        <p className="font-semibold text-secondary-foreground">Ce progrès vient avec une dépendance.</p>
      </div>
    </div>

    {/* Le contraste passé / présent */}
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
      <p>
        Il y a 80 ans, ta grand-mère savait que l'ortie se mange, que le
        plantain guérit les plaies et que les glands du chêne se transforment en
        une délicieuse farine.
      </p>
      <p className="font-semibold text-foreground">
        Ce n'était pas du survivalisme. C'était la vie ordinaire.
      </p>
      <p>
        Aujourd'hui la nourriture vient d'un rayon de supermarché, les remèdes
        d'une boîte en carton, et le savoir médical d'une ordonnance.
      </p>
    </div>

    {/* L'événement déclencheur */}
    <div className="bg-card">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-left font-sans">
          Sauf que quand la machine se grippe, tout s'effondre.
        </h2>
        <p className="font-semibold text-foreground">
          C'est ce qu'il s'est passé en mars 2020 au début du Covid.
        </p>
        <p>Les rayons des supermarchés se sont vidés en 48 heures.</p>
        <p>
          Plus de 800 médicaments de base (antidouleur, antibiotiques, etc.)
          étaient en rupture de stock.
        </p>
        <p>Mais le Covid n'était que la partie visible.</p>
        <p>
          Ce que peu de gens savent, c'est que nos chaînes d'approvisionnement
          fonctionnent en <span className="font-semibold text-foreground">flux tendu permanent</span>.
        </p>
        <p className="text-lg font-bold text-foreground">
          Il n'y a pas de stock. Pas de marge.<br />
          Au moindre grain de sable dans la machine, tous les rayons sont vides en 72h.
        </p>
      </div>
    </div>

    {/* Part 2 — L'homme providentiel */}
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-left leading-snug font-sans">
        Un homme providentiel pour sortir de la fragilité du système
      </h2>

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
        <p>Mais il y a une bonne nouvelle.</p>
        <p>
          Ce savoir que nos arrière-grands-parents possédaient naturellement…
          <span className="font-semibold text-foreground"> il n'a pas disparu.</span>
        </p>
        <p className="font-semibold text-foreground text-xl">Il a juste attendu.</p>
        <p>Pendant que le monde s'industrialisait, un homme a fait le chemin inverse.</p>
        <p>
          Pendant plus de 40 ans, il a parcouru les forêts, les prairies, les
          montagnes et les plaines d'Europe à la recherche des plantes que nos
          ancêtres connaissaient par cœur.
        </p>
        <p>Il les a identifiées. Goûtées. Documentées. Testées.</p>
        <p className="text-xl font-bold text-foreground">
          Et il a fini par devenir une véritable légende.
        </p>
        <p>
          Il a collaboré avec les plus grands chefs étoilés, écrit des dizaines de
          livres sur le sujet et est devenu <strong>LA référence</strong> des plantes sauvages.
        </p>
        <p className="font-semibold text-foreground text-lg">
          Cet homme, c'est François Couplan. Un ethnobotaniste exceptionnel qui a
          formé des milliers de personnes sur trois continents.
        </p>
        <p className="text-primary font-bold text-xl text-left mt-8">
          Et aujourd'hui il propose de te transmettre ce savoir.
        </p>
      </div>
    </div>

    {/* Part 3 — Le programme */}
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-left leading-snug font-sans">
          Réveille le cueilleur, cuisinier et guérisseur qui sommeille en toi
        </h2>

        <div className="space-y-5 text-base md:text-lg leading-relaxed text-background font-sans">
          <p>
            Avec François nous t'avons créé <strong className="text-secondary-foreground">LE programme vidéo ultime</strong> pour
            t'aider à atteindre l'autonomie alimentaire grâce à la cueillette des
            plantes sauvages.
          </p>
          <p>
            Ce programme nous l'avons appelé&nbsp;:
            <span className="font-bold text-primary italic"> Les Secrets des Plantes Sauvages&nbsp;!</span>
          </p>
          <p>
            Grâce à lui, la Nature sera bientôt pour toi un immense
            potager-pharmacie, 100% bio et gratuit&nbsp;;)
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-left mt-4 font-sans">
          Car dans ce programme unique d'1 an, tu découvriras&nbsp;:
        </h2>

        {/* Features */}
        <div className="grid gap-6 mt-8">
          {[
            {
              icon: Video,
              title: "Plus de 80 vidéos cueillettes, recettes et remèdes",
              desc: "C'est comme si tu passais des semaines entières aux côtés de François pour te former !",
            },
            {
              icon: FileText,
              title: "Plus de 60 fiches récap au format PDF",
              desc: "Pense à bien les télécharger, ce sera ton manuel de cueillette ;)",
            },
            {
              icon: Radio,
              title: "12 soirées lives EN DIRECT avec François",
              desc: "Tu découvriras 12 nouveaux ateliers de saison (détox de printemps, fleurs sauvages comestibles, super-fruits d'automne…) et tu pourras poser toutes tes questions.",
            },
            {
              icon: Headphones,
              title: "12 replays vidéo & audio + 12 livrets PDF",
              desc: "Tu ne rateras pas une miette, même si tu n'es pas disponible le jour même !",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 items-start bg-secondary-foreground/5 rounded-xl p-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-foreground text-lg leading-snug font-sans">
                  {title}
                </h3>
                <p className="mt-1 font-sans text-white">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LeadSection;
