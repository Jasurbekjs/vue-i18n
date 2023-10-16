import { createI18n } from "vue-i18n";

const messages = {
    en: {
        nav: {
            home: "Home",
            about: "About"
        },
        home: {
            header: "Welcome to the Vue 3 I18n",
            added_by: "JMCorp"
        },
        about: {
            header: "About us"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            about: "О нас"
        },
        home: {
            header: "Добро пожаловать во Vue 3 I18n",
            added_by: "JM Corp"
        },
        about: {
            header: "О нас"
        }
    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, 
    legacy: false, // for vue 3
    globalInjection: true,
    messages
})