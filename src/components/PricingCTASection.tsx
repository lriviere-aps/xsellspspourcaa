import { ShieldCheck, RotateCcw, Lock } from "lucide-react";

const PricingCTASection = () => (
  <section className="font-sans">
    {/* Pricing */}
    <div className="bg-background">
      <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug text-primary text-left font-sans">
          Rejoins Les Secrets des Plantes Sauvages pour seulement 29€/mois !
        </h2>

        <div className="space-y-5 text-base md:text-lg leading-relaxed text-neutral-900 font-sans">
          <p>
            François Couplan, c'est LA référence des plantes sauvages en France et <strong className="text-foreground">il n'y a pas meilleur guide que lui pour découvrir la cueillette&nbsp;!</strong>
          </p>
          <p>
            Mais avec ses mille projets et ses quelques stages affichés complets plus de 6 mois à l'avance, il est inaccessible à la plupart des gens…
          </p>
          <p>
            C'est pourquoi les 80 vidéos des{" "}
            <em className="font-semibold text-primary">Secrets des Plantes Sauvages</em> et ton accès à lui EN DIRECT tous les mois, <strong className="text-foreground">c'est une opportunité incroyable, que tu ne trouveras nulle part ailleurs&nbsp;!</strong>
          </p>
          <p>Mais tu l'imagines, créer et faire vivre ce programme demande un travail et des investissements énormes.</p>
          <p>Au point où l'accès devrait coûter plusieurs centaines d'euros par mois…</p>
          <p>
            Mais tu fais partie de la <em>Communauté APS</em> et tu bénéficies de sa force&nbsp;!
          </p>
          <p>
            En mutualisant tous ces coûts de création entre les centaines de membres du programme, on a réussi à t'obtenir une proposition folle&nbsp;: <strong className="text-foreground">Tu peux rejoindre Les Secrets des Plantes Sauvages pour seulement 29€ par mois pendant 1 an, sans aucun engagement&nbsp;!</strong>
          </p>
        </div>
      </div>
    </div>

    {/* Sans engagement */}
    <div className="bg-card">
      <div className="max-w-2xl mx-auto px-6 py-20 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug text-primary text-left font-sans">
          Tu arrêtes quand tu veux, c'est 100% sans engagement !
        </h2>

        <div className="space-y-5 text-base md:text-lg leading-relaxed text-neutral-900 font-sans">
          <p>
            Grâce à François, dans quelques semaines seulement, tu seras capable de cueillir une dizaine d'incroyables plantes sauvages pour cuisiner de délicieuses recettes maison, et fabriquer de puissants remèdes naturels…
          </p>
          <p>
            Alors je le sais, <em className="font-semibold text-primary">Les Secrets des Plantes Sauvages</em> va transformer ton quotidien pour le meilleur&nbsp;!
          </p>
          <p>Et l'aventure se poursuit pendant 1 an, avec plus de 80 vidéos et 1 live chaque mois avec François&nbsp;!</p>
          <p>Mais c'est toi qui choisis.</p>
          <p className="font-semibold text-foreground">
            Tout au long de cette année de formation, tu restes libre d'arrêter quand tu veux, avec effet immédiat&nbsp;: C'est garanti sans aucun engagement&nbsp;!
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center space-y-3 pt-4">
          <p className="font-semibold text-lg text-red-600">En cliquant sur le bouton ci-dessous tu valides ton inscription&nbsp;:</p>
          <a
            href="#"
            className="inline-block w-full max-w-md bg-primary hover:bg-primary/90 font-bold text-lg py-4 px-8 rounded-xl transition-colors text-center text-white"
          >
            JE REJOINS LES SECRETS DES PLANTES SAUVAGES POUR SEULEMENT 29€/MOIS !
          </a>
          <a href="#" className="inline-block text-sm text-muted-foreground bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-2 px-6 rounded-lg transition-colors">Je refuse cette offre pour l'instant</a>
        </div>
      </div>
    </div>

    {/* 3 Garanties */}
    <div className="bg-background">
      <div className="max-w-2xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-sans">
            Mes 3 garanties
          </h2>
          <p className="text-base md:text-lg text-neutral-900 font-sans">
            En rejoignant <em className="text-primary">Les Secrets des Plantes Sauvages</em>, tu bénéficies de trois garanties ultra-solides, pour te former en toute sérénité.
          </p>
        </div>

        {/* Garantie 1 */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-sans">
                Garantie 1 — Tu arrêtes quand tu veux, c'est sans aucun engagement !
              </h3>
            </div>
          </div>
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-neutral-900 font-sans pl-16">
            <p>
              En rejoignant <em className="text-primary">Les Secrets des Plantes Sauvages</em> aujourd'hui, <strong className="text-foreground">tu arrêtes quand tu veux, c'est garanti sans aucun engagement.</strong>
            </p>
            <p>
              Si tu souhaites arrêter tu m'envoies en 2 clics une demande via le formulaire de contact de mon site et je te désabonne sur le champ et tu ne seras plus prélevé.
            </p>
          </div>
        </div>

        {/* Garantie 2 */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <RotateCcw className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-sans">
                Garantie 2 — Tu as 30 jours pour te faire rembourser intégralement !
              </h3>
            </div>
          </div>
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-neutral-900 font-sans pl-16">
            <p>
              Les membres qui se forment avec François sont unanimes&nbsp;: Découvrir le monde des plantes comestibles, médicinales, cosmétiques… avec lui leur a permis de révolutionner leur quotidien&nbsp;!
            </p>
            <p>
              Ce retour d'expérience m'apporte la certitude que leur <strong className="text-foreground">programme te permettra d'atteindre tes objectifs, et même de les dépasser.</strong>
            </p>
            <p>
              Mais pour que tu puisses te former en toute sérénité, <strong className="text-foreground">je t'offre une garantie satisfait ou 100% remboursé pendant 30 jours</strong> sur ton inscription&nbsp;!
            </p>
            <p>
              Concrètement, ça veut dire que tu peux rejoindre <em className="text-primary">Les Secrets des Plantes Sauvages</em>, visionner toutes les premières vidéos du programme, cueillir tes premières plantes, préparer tes premiers remèdes…
            </p>
            <p>
              Puis peu importe la raison, tu pourras annuler ton inscription et obtenir le <strong className="text-foreground">remboursement intégral</strong> de ton 1<sup>er</sup> mois.
            </p>
            <p>Pour cela, rien de compliqué, tu m'écris un message via mon formulaire de contact.</p>
            <p className="font-semibold text-foreground">
              Tu recevras le remboursement sur ton compte bancaire en 5 à 10 jours.
            </p>
          </div>
        </div>

        {/* Garantie 3 */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-sans">
                Garantie 3 — Paiement ultra-sécurisé SEPA
              </h3>
            </div>
          </div>
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-neutral-900 font-sans pl-16">
            <p className="font-semibold text-foreground">
              Je suis accrédité "SEPA", c'est le moyen de paiement le plus sécurisé qui existe.
            </p>
            <p>
              Le SEPA est une norme européenne de paiement sécurisé qu'utilisent toutes les grosses sociétés, comme EDF, Free, ou Orange.
            </p>
            <p>Il y a deux grandes protections&nbsp;:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Pas besoin de carte bancaire</strong>, le paiement se fait directement de ta banque vers la mienne&nbsp;;
              </li>
              <li>
                <strong className="text-foreground">Tu peux te faire intégralement rembourser directement par ta banque pendant 8 semaines</strong>, sans conditions ni frais.
              </li>
            </ol>
            <p>
              Et pour finir, le paiement est aussi rapide qu'avec une carte bancaire, ton inscription sera immédiatement prise en compte.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Final CTA */}
    <div className="text-secondary-foreground bg-lime-900">
      <div className="max-w-2xl mx-auto px-6 py-20 space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sans leading-tight">
          Rejoins <em className="text-primary">Les Secrets des Plantes Sauvages</em> avec François Couplan…
        </h2>
        <p className="text-lg md:text-xl font-semibold text-background font-sans">
          Et découvre les meilleures cueillettes, recettes et remèdes de la Nature&nbsp;!
        </p>

        <div className="space-y-3 pt-4">
          <p className="font-semibold text-white text-lg underline">En cliquant sur le bouton ci-dessous tu valides ton inscription&nbsp;:</p>
          <a
            href="#"
            className="inline-block w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 px-8 rounded-xl transition-colors"
          >
            JE REJOINS LES SECRETS DES PLANTES SAUVAGES POUR SEULEMENT 29€/MOIS !
          </a>
          <a href="#" className="inline-block text-sm text-muted-foreground bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-2 px-6 rounded-lg transition-colors">Je refuse cette offre pour l'instant</a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingCTASection;
