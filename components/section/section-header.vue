<template>
  <div style="background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;">
    <div class="container pt-5 pb-5">
      <l-button rounded value="Retour" @click="navPrec"><font-awesome-icon slot="prepend-icon" icon="arrow-left" class="mr-2"/></l-button>
      <l-typography h1 color="#FFF" class="pt-3 pb-5">{{ title }}</l-typography>
    </div>
  </div>
</template>

<script>
    import LTypography from "../base/typography";
    import LButton from "../base/button";
    export default {
      props: {
        title: String
      },
      name: "l-section-header",
      components: {LButton, LTypography},
      methods: {
        navPrec() {
          window.history.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
