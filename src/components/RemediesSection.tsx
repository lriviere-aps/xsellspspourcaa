import remedesImg from "@/assets/remedes-naturels-new.png";

const RemediesSection = () => (
  <section className="bg-background font-sans">
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-primary text-left font-sans">
        Tu fabriqueras de puissants remèdes, 100% naturels et efficaces !
      </h2>

      <img
        src={remedesImg}
        alt="Remèdes naturels à base de plantes sauvages"
        className="w-full rounded-xl"
        loading="lazy"
      />

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-neutral-900 font-sans">
        <p>Ton livre n'est que le début de ton aventure avec les plantes médicinales.</p>
        <p>
          Avec <em className="font-semibold text-primary">Les Secrets des Plantes Sauvages</em>, tu découvriras encore plus de plantes médicinales et encore plus de remèdes, <strong className="text-foreground">EN DIRECT&nbsp;!</strong>
        </p>
        <p>
          Parmi eux, <strong className="text-foreground">le vin médicinal d'herbe sacrée</strong>, redécouvert dans un manuscrit du XIII<sup>e</sup> siècle…
        </p>
        <p>
          Ou <em>l'aluyne</em>, une incroyable aromatique que tu connais sans doute sous sa forme distillée… mais qui ne révèle ses incroyables vertus médicinales que sous la forme que François te révèlera en vidéo&nbsp;!
        </p>
        <p className="font-semibold text-foreground">
          Au total, François te révèle des dizaines de puissants remèdes médicinaux, dont 11 filmés de A à Z&nbsp;!
        </p>
        <p>
          Toutes ces vidéos, <strong className="text-foreground">c'est comme si tu étais sur le terrain avec François</strong>, pour cueillir sereinement tes premières plantes à ses côtés&nbsp;:)
        </p>
        <p>Mais on ne s'arrête pas là&nbsp;!</p>
      </div>
    </div>
  </section>
);

export default RemediesSection;
