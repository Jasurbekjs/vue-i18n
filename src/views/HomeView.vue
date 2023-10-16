<template>
  <main>
    <h1>
      {{t("home.header")}}
    </h1>
    <p>
      This page has been visited 3 times.
    </p>
  </main>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    
    return { t }
  }
}


</script>

<style scoped>

</style>