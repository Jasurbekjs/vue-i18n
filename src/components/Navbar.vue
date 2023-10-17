<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">
                    {{$t("nav.home")}}
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/about">
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

export default defineComponent({
    setup () {
       
    },
    components: {
        LanguageSwitcher
    }
})
</script>

<style scoped>

</style>