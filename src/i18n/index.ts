import { createI18n } from "vue-i18n";
import pluralRules from './rules/pluralization'
import numberFormats from './rules/numbers'
import datetimeFormats from './rules/datetime'

import en from './locales/en.json'
import ru from './locales/ru.json'

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, 
    legacy: false, // for vue 3
    globalInjection: true,
    messages: { en, ru },
    pluralRules,
    numberFormats,
    datetimeFormats
})