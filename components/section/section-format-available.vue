<template>
  <section class="container vh-100 d-flex align-items-center" id="contact">
    <div class="w-100">
      <l-typography class="text-center" h2 medium >Available only for this format</l-typography>
      <div class="d-flex justify-content-around mt-5">
        <l-fab back-color="#176286" size="60">Json</l-fab>
      </div>
    </div>
  </section>
</template>

<script>
    import LTypography from "../base/typography";
    import LFab from "../base/fab";
    export default {
        name: "l-section-format-available",
      components: {LFab, LTypography}
    }
</script>

<style scoped>

</style>
