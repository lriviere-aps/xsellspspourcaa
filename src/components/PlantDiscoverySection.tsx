import plantesImg from "@/assets/c38ce2a3-fd2c-4afe-b5d2-56a94e78805d.jpg";
import plantesGridImg from "@/assets/plantes-grid.jpg";

const plants = [
  "Notre \"meilleur légume sauvage\", abondant et délicieux, dont tu ne trouveras jamais aucun équivalent sur le marché (en plus de ça, tu pourras la cueillir gratuitement toute l'année !)",
  "Les fleurs sauvages à l'origine de l'Aspirine — C'est la version 100% naturelle de ce médicament développé par Big Pharma, elle apaisera toutes tes douleurs sans jamais causer les effets secondaires du comprimé !",
  "L'arbre à salade aux délicieuses feuilles, fleurs et fruits comestibles — Pour préparer tes meilleures farines vertes reminéralisantes, infusions calmantes et pâtes à tartiner sauvages ;)",
  "LA plante de printemps pour \"détoxifier\" ton organisme… et préparer le meilleur \"café sauvage\" !",
  "La belle-étoile, aux arômes de vanille complètement fous — François te partagera LA technique ancestrale pour les révéler et préparer d'incroyables desserts à la \"vanille sauvage\" !",
  "Notre ginseng européen, aux vertus toniques, adaptogènes et aphrodisiaques aussi puissantes que méconnues…",
  "Les secrets de l'arbre aux fées, dont tu pourras cueillir les fleurs et les fruits, qui donnent les meilleurs pétillants et gelées sauvages !",
  "L'anti-stress le plus puissant du monde végétal — Cette plante était la seule à pouvoir apaiser les soldats rentrés de la guerre mondiale… c'est le meilleur anti-stress, calmant et somnifère que tu puisses trouver !",
  "Nos meilleurs \"épinards sauvages\", à cueillir gratuitement dans toutes nos prairies et tous nos bois !",
  "Les fleurs sauvages les plus précieuses du printemps, à transformer en délicieux sirops, desserts… ou baumes médicinaux !",
  "L'\"herbe aux soldats\", à l'efficacité hors du commun pour guérir les plaies — Les Grecs racontaient que c'est elle qui avait guéri toutes les plaies des soldats d'Achille lors de la guerre de Troie !",
  "…",
];

const PlantDiscoverySection = () => (
  <section className="bg-background font-sans">
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-primary text-left font-sans">
        Tu cueilleras les meilleures plantes sauvages de nos régions, gorgées de nutriments !
      </h2>

      <img
        src={plantesImg}
        alt="Cueillette de plantes sauvages avec François Couplan"
        className="w-full rounded-xl"
        loading="lazy"
      />

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
        <p>Des plantes sauvages comestibles et médicinales, il en existe des milliers.</p>
        <p>
          Mais François t'a sélectionné les meilleures, et tu découvriras chaque semaine dans{" "}
          <em className="font-semibold text-primary">Les Secrets des Plantes Sauvages</em>&nbsp;:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            De nouvelles plantes sauvages <strong className="text-foreground">comestibles</strong>, délicieuses et gorgées de nutriments&nbsp;;
          </li>
          <li>
            De nouvelles plantes sauvages <strong className="text-foreground">médicinales</strong>, incroyablement puissantes et efficaces&nbsp;!
          </li>
        </ul>
        <p>
          Au total, <strong className="text-foreground">tu seras capable de trouver, identifier et cueillir plus de 38 plantes sauvages différentes</strong>, abondantes dans nos régions et disponibles toute l'année&nbsp;!
        </p>
      </div>

      <img
        src={plantesGridImg}
        alt="Grille de 38+ plantes sauvages à découvrir"
        className="w-full rounded-xl"
        loading="lazy"
      />

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
        <p>
          Parmi ces 38 plantes incroyables, qui (re)trouveront bientôt leur place dans ton assiette et ta pharmacie, tu découvriras&nbsp;:
        </p>

        <ol className="list-decimal pl-5 space-y-4">
          {plants.map((text, i) => (
            <li key={i} className="leading-relaxed">
              {text}
            </li>
          ))}
        </ol>

        <p className="font-semibold text-foreground">
          Et encore plus de 27 plantes sauvages incontournables, qui révolutionneront ton quotidien&nbsp;!
        </p>
        <p>Car avec toutes ces cueillettes et grâce aux conseils de François&nbsp;:</p>
      </div>
    </div>
  </section>
);

export default PlantDiscoverySection;
