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
import { useI18n } from 'vue-i18n'
import Translations from '@/i18n/translations'

export default defineComponent({
    setup () {
        const { t, locale } = useI18n()

        const supportedLocales = Translations.supportedLocales

        const switchLanguage = async (event: Event) => {
            const newValue = event.target.value
            await Translations.switchLocale(newValue)
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