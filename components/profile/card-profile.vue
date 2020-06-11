<template>
  <l-card class="d-flex align-items-center justify-content-center">
    <div class="text-center">
      <l-typography h0 bolder :value="count" class="text-center"/>
      <l-typography h5 bold :value="label" class="text-center pt-5" />
      <l-button v-if="redirectLabel" style="margin: auto" class="mt-3" @click="$router.push(redirectLink)" rounded>{{ redirectLabel }}</l-button>
    </div>
  </l-card>
</template>

<script>
    import LCard from "../base/card";
    import LTypography from "../base/typography";
    import LButton from "../base/button";
    export default {
      name: "l-card-profile",
      props: {
        count: [String, Number],
        label: String,
        redirectLink: String,
        redirectLabel: String
      },
      components: {LButton, LTypography, LCard}
    }
</script>

<style scoped>

</style>
