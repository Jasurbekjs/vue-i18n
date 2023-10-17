import i18n from "@/i18n"

const Translations = {
    get supportedLocales (): string[] {
        return (import.meta.env.VITE_SUPPORTED_LOCALES as string).split(",")
    },

    set currentLocale (newLocale: string) {
        i18n.global.locale.value = newLocale
    },

    async switchLocale (newLocale: string) {
        Translations.currentLocale = newLocale;
        document.querySelector("html")?.setAttribute("lang", newLocale);
    }

}

export default Translations