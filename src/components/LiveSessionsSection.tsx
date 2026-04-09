import liveImg from "@/assets/live-sessions-direct.png";
import { Video, Headphones, FileText } from "lucide-react";

const LiveSessionsSection = () => (
  <section className="text-secondary-foreground font-sans bg-lime-900">
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-left font-sans">
        François te donne rendez-vous tous les mois, EN DIRECT !
      </h2>

      <img
        src={liveImg}
        alt="Les Secrets des Plantes Sauvages — Le Direct avec Antoine et François Couplan"
        className="w-full rounded-xl"
        loading="lazy"
      />

      <div className="space-y-5 text-base md:text-lg leading-relaxed text-background font-sans">
        <p>
          <em className="font-semibold text-primary">Les Secrets des Plantes Sauvages</em>, c'est aussi un <strong className="text-secondary-foreground">live privé EN DIRECT tous les mois</strong>, strictement réservé aux membres&nbsp;!
        </p>
        <p>
          François est toujours très demandé et occupé par mille projets, alors c'est une opportunité unique, que tu ne trouveras nulle part ailleurs&nbsp;!
        </p>
        <p>
          <strong className="text-secondary-foreground">Tous les mois, tu auras la chance de le retrouver en direct pendant 2 heures</strong>, pour découvrir encore plus de plantes, plus de recettes, plus de remèdes de saison…
        </p>
        <p>
          Mais aussi pour <strong className="text-secondary-foreground">lui poser toutes tes questions&nbsp;!</strong>
        </p>
        <p>Car chacune de ces soirées exceptionnelles sera divisée en deux parties&nbsp;:</p>

        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong className="text-secondary-foreground">"L'Atelier sauvage", inédit et de saison</strong> — François s'empare d'une thématique clef et t'en révèle tous les secrets (les cures de détox sauvage, les meilleurs superaliments sauvages, la cuisine des fleurs comestibles, les arbres médicinaux…)&nbsp;;
          </li>
          <li>
            <strong className="text-secondary-foreground">La "Session Questions / Réponses"</strong> — François répond à toutes tes questions et te révèle les astuces et conseils qu'il réserve habituellement à ses élèves, pour t'aider à identifier une plante, trouver LE bon remède, cuisiner un nouveau plat sauvage…
          </li>
        </ol>

        <p>
          Et si tu n'es pas disponible le soir du live, aucune inquiétude&nbsp;: <strong className="text-secondary-foreground">Je t'enverrai le replay vidéo et le livret récapitulatif au format PDF</strong>, pour que tu n'en rates jamais une miette.
        </p>
      </div>

      {/* Replay formats */}
      <div className="flex justify-center gap-8 py-6">
        {[
          { icon: Video, label: "VIDÉO" },
          { icon: Headphones, label: "AUDIO" },
          { icon: FileText, label: "DOSSIER COMPLET" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-bold text-secondary-foreground tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LiveSessionsSection;
