import recettesImg from "@/assets/recettes-sauvages.jpg";

const RecipesSection = () => (
  <section className="bg-card font-sans">
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-primary text-left font-sans">
        Tu cuisineras d'incroyables recettes sauvages, délicieuses et 100% faites-maison !
      </h2>

      <img
        src={recettesImg}
        alt="Recettes sauvages préparées par François Couplan"
        className="w-full rounded-xl"
        loading="lazy"
      />

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
        <p>
          François a collaboré plusieurs dizaines d'années avec des chefs étoilés et ADORE se faire plaisir avec la cuisine sauvage&nbsp;!
        </p>
        <p className="font-semibold text-foreground">
          Alors compte sur lui pour te régaler, faire le plein de vitamines et épater tes proches&nbsp;;)
        </p>
        <p>
          Apéros, quiches sauvages, beignets de fleurs, soupes revisitées, gâteaux et desserts, boissons pétillantes…
        </p>
        <p>
          Tu découvriras dans{" "}
          <em className="font-semibold text-primary">Les Secrets des Plantes Sauvages</em>{" "}
          des dizaines d'incroyables recettes sauvages, dont <strong className="text-foreground">8 tournées en vidéo</strong>, en direct de la cuisine de François&nbsp;!
        </p>
        <p>Mais ce n'est pas tout…</p>
      </div>
    </div>
  </section>
);

export default RecipesSection;
