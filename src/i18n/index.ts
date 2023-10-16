import { createI18n } from "vue-i18n";
import pluralRules from './rules/pluralization'
import numberFormats from './rules/numbers'

const messages = {
    en: {
        nav: {
            home: "Home",
            about: "About"
        },
        home: {
            header: "Welcome to the Vue 3 I18n",
            added_by: "Company {company}",
            num_visits: "This page hasn`t been visited | This page has been visited {n} time | This page has been visited {n} times"
        },
        about: {
            header: "About us",
            currency: "Currency: "
        }
    },
    ru: {
        nav: {
            home: "Главная",
            about: "О нас"
        },
        home: {
            header: "Добро пожаловать во Vue 3 I18n",
            added_by: "Компания {company}",
            num_visits: "Страницу не посещали | Страницу посещали {n} раз | Страницу посещали {n} раза | Страницу посещали {n} раз"
        },
        about: {
            header: "О нас",
            currency: "Валюта: "
        }
    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, 
    legacy: false, // for vue 3
    globalInjection: true,
    messages,
    pluralRules,
    numberFormats
})