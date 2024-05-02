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
        theme: {
            light: {},
            dark: {
                colors: {},
            },
        },
        locales: ["pt-BR", "en"],
        translations: {
            en: {
                "Auth.form.welcome.title": "Welcome to Fusion CMS",
                "Auth.form.welcome.subtitle":
                    "Log in to your Fusion CMS account",
                "app.components.LeftMenu.navbrand.title": "Fusion CMS",
                "app.components.LeftMenu.navbrand.workplace": "Control Panel",
            },
            "pt-BR": {
                "Auth.form.welcome.title": "Bem vindo ao Fusion CMS",
                "Auth.form.welcome.subtitle":
                    "Entrar na sua conta do Fusion CMS",
                "app.components.LeftMenu.navbrand.title": "Fusion CMS",
                "app.components.LeftMenu.navbrand.workplace":
                    "Painel de Controle",
                "app.components.NpsSurvey.banner-title":
                    "Qual é a probabilidade de você recomendar o Fusion CMS a um amigo, colega ou empresa?",
                "app.components.NpsSurvey.no-recommendation": "Pouco provável",
                "app.components.NpsSurvey.happy-to-recommend": "Altíssima",
                "app.components.NpsSurvey.feedback-response":
                    "Thank you very much for your feedback!",
                "app.components.NpsSurvey.feedback-question":
                    "Você tem alguma sugestão de melhoria?",
                "app.components.NpsSurvey.submit-feedback": "Enviar Feedback",
                "app.components.NpsSurvey.dismiss-survey-label":
                    "Dispensar pesquisa",

                "Settings.application.strapi-version": "Versão do Fusion CMS",
                "Settings.application.strapiVersion": "Versão do Fusion CMS",
                "global.content-manager": "Conteúdo", // Menu
                "global.plugins.content-manager": "Conteúdo",

                "Content Manager": "Conteúdo",
                "content-manager.containers.Home.pluginHeaderTitle": "Conteúdo",
                "content-type-builder.plugin.name": "Estrutura",

                "Content Type Builder": "Estrutura",
                "global.plugins.content-type-builder": "Estrutura",
            },
        },
    },
    bootstrap() {},
};
