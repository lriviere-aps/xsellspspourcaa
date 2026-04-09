import openBoxImg from "@/assets/open-box-glow.png";
import logoAps from "@/assets/logo-aps.png";

const OrderConfirmationBanner = () => (
  <section className="bg-muted">
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Text */}
      <div className="flex-1 space-y-4">
        <img src={logoAps} alt="Logo APS" width={64} height={64} className="w-16 h-16" />
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground leading-snug">
          Ta commande est enregistrée…<br />
          mais ne part pas tout de suite&nbsp;!
        </h2>
        <p className="text-muted-foreground text-sm md:text-base font-sans font-semibold">
          Dans quelques minutes, tu recevras ta confirmation de commande par mail (pense bien à vérifier tes spams&nbsp;!).
        </p>
        <p className="text-foreground text-lg md:text-xl font-sans leading-snug">
          Découvre la suite logique au{" "}
          <strong className="text-primary italic">Calendrier de l'Autonomie</strong>
        </p>
        <p className="text-muted-foreground text-base md:text-lg font-sans leading-relaxed">
          Le premier niveau d'autonomie que tu dois atteindre est l'autonomie alimentaire.
          Et le meilleur moyen d'y arriver rapidement est de découvrir la cueillette de plantes sauvages.
        </p>
      </div>

      {/* Image */}
      <div className="shrink-0 w-48 md:w-64">
        <img
          src={openBoxImg}
          alt="Boîte ouverte avec lumière dorée"
          width={512}
          height={512}
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
);

export default OrderConfirmationBanner;
