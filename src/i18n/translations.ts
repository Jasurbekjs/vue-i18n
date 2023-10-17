import i18n from "@/i18n"
import { nextTick } from 'vue'

const Translations = {
    get defaultLocale (): string {
        return import.meta.env.VITE_DEFAULT_LCOALE;
    },

    get supportedLocales (): string[] {
        return (import.meta.env.VITE_SUPPORTED_LOCALES as string).split(",");
    },

    get currentLocale () {
        return i18n.global.locale.value;
    },
    set currentLocale (newLocale: string) {
        i18n.global.locale.value = newLocale;
    },

    isLocaleSupported (locale: string){
        return Translations.supportedLocales.includes(locale);
    },
    getUserLocale () {
        const locale = window.navigator.language || 
                       window.navigator.userLanguage ||
                       Translations.defaultLocale;

        return {
            locale, 
            localeNoRegion: locale.split("-").at(0)
        }
    },
    getPersistedLocale () {
        const persistedLocale = localStorage.getItem("user-locale") as string

        if(Translations.isLocaleSupported(persistedLocale)) return persistedLocale
        else return null
    },
    guessDefaultLocale () {
        const userPersistedLocale = Translations.getPersistedLocale()
        if(userPersistedLocale) return userPersistedLocale

        const userPreferredLocale = Translations.getUserLocale()
        if(Translations.isLocaleSupported(userPreferredLocale.locale)) return userPreferredLocale.locale
        if(Translations.isLocaleSupported(userPreferredLocale.localeNoRegion)) return userPreferredLocale.localeNoRegion

        return Translations.defaultLocale
    },

    async switchLocale (newLocale: string) {
        await Translations.loadLocaleMessages(newLocale);
        Translations.currentLocale = newLocale;
        document.querySelector("html")?.setAttribute("lang", newLocale);
        localStorage.setItem("user-locale", newLocale);
    },

    async loadLocaleMessages (locale: string) {
        if(!i18n.global.availableLocales.includes(locale)){
            const messages = await import(`@/i18n/locales/${locale}.json`);
            i18n.global.setLocaleMessage(locale, messages.default);
        }

        return nextTick()
    },

    async routerMiddleware (to: any, _from: any, next: any) {
        const paramLocale = to.params.locale

        if(!Translations.isLocaleSupported(paramLocale)){
            return next(Translations.guessDefaultLocale());
        }

        await Translations.switchLocale(paramLocale);

        return next()
    },

    i18nRoute(to: any) {
        return {
          ...to,
          params: {
            locale: Translations.currentLocale,
            ...to.params
          }
        }
    }
}

export default Translations