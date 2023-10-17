<template>
    <div>
        <select @change="switchLanguage">
            <option
                v-for="sLocale in supportedLocales"
                :key="`locale-${sLocale}`"
                :value="sLocale"
                :selected="locale === sLocale"
            >
                {{$t(`locale.${sLocale}`)}}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Translations from '@/i18n/translations'

export default defineComponent({
    setup () {
        const { t, locale } = useI18n()
        const router = useRouter()
        const supportedLocales = Translations.supportedLocales

        const switchLanguage = async (event: Event) => {
            const newValue = event.target.value
            await Translations.switchLocale(newValue)

            try {
                router.replace({ params: { locale: newValue }})
            } catch (e) {
                console.error(e)
                router.push("/")
            }
        }

        return { 
            t, locale, supportedLocales,
            switchLanguage
        }
    }
})
</script>

<style scoped>

</style>