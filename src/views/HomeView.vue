<template>
  <main>
    <h1>
      {{$t("home.header")}}
    </h1>
    <p>
      {{$t("home.added_by", {company: 'JMCorp'})}}
    </p>
    <p>
      {{$t("home.num_visits", 1)}}
    </p>
  </main>
</template>

<script lang="ts">
// import { useI18n } from 'vue-i18n'

// export default {
//   setup() {
//     const { t } = useI18n()
    
//     return { t }
//   }
// }


</script>

<style scoped>

</style>