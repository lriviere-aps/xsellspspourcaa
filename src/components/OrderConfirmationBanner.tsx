import openBoxImg from "@/assets/open-box-glow.png";
import logoAps from "@/assets/logo-aps.png";

const OrderConfirmationBanner = () => (
  <section className="bg-muted">
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center space-y-6">
      {/* Logo */}
      <img src={logoAps} alt="Logo APS" width={128} height={128} className="w-28 h-28 mx-auto object-fill" />

      {/* Titre */}
      <h2 className="font-sans text-xl md:text-2xl font-bold text-foreground leading-snug">
        Ta commande est enregistrée…<br />
        mais ne part pas tout de suite&nbsp;!
      </h2>

      {/* Sous-titre */}
      <p className="text-muted-foreground text-sm font-sans">
        Dans quelques minutes, tu recevras ta confirmation de commande par mail
        <br className="hidden md:inline" /> (pense bien à vérifier tes spams&nbsp;!).
      </p>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={openBoxImg}
          alt="Boîte ouverte avec lumière dorée"
          width={512}
          height={512}
          className="w-40 md:w-52 h-auto"
        />
      </div>

      {/* Accroche */}
      <p className="text-foreground text-base md:text-lg font-sans font-semibold leading-snug">
        Découvre la suite logique au{" "}
        <strong className="text-primary italic">Calendrier de l'Autonomie</strong>
      </p>

      <p className="text-muted-foreground text-sm md:text-base font-sans leading-relaxed max-w-xl mx-auto">
        Le premier niveau d'autonomie que tu dois atteindre est l'autonomie alimentaire.
        Et le meilleur moyen d'y arriver rapidement est de découvrir la cueillette de plantes sauvages.
      </p>
    </div>
  </section>
);

export default OrderConfirmationBanner;
