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
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>