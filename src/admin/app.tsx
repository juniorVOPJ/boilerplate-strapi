import Favicon from "./extensions/favicon.ico";
import Logo from "./extensions/fusionlabs.png";

export default {
  config: {
    head: {
      favicon: Favicon,
    },
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    locales: ["pt-BR"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Fusion CMS",
        "Auth.form.welcome.subtitle": "Log in to your Fusion CMS account",
      },
      "pt-BR": {
        "Auth.form.welcome.title": "Bem vindo ao Fusion CMS",
        "Auth.form.welcome.subtitle": "Entrar na sua conta do Fusion CMS",
        "app.components.LeftMenu.navbrand.title": "Fusion CMS",
        "app.components.LeftMenu.navbrand.subtitle": "Painel de Controle",
      },
    },
  },
  bootstrap() {},
};
