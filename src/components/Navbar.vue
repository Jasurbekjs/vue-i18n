<template>
    <nav>
        <ul>
            <li>
                <RouterLink :to="Translations.i18nRoute({name: 'home'})">
                    {{$t("nav.home")}}
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="Translations.i18nRoute({name: 'about'})">
                    {{$t("nav.about")}}
                </RouterLink>
            </li>
        </ul>
        <LanguageSwitcher />
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import Translations from '@/i18n/translations'

export default defineComponent({
    setup () {
       return { Translations }
    },
    components: {
        LanguageSwitcher
    }
})
</script>

<style scoped>

</style>