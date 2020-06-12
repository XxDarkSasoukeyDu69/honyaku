<template>
  <section class="container vh-100 d-flex align-items-center" id="contact">
    <div class="w-100">
      <l-typography class="text-center" h2 medium >Available only for this formats</l-typography>
      <div class="d-flex justify-content-center mt-5">
        <l-fab back-color="#000000" size="60">Json</l-fab>
        <l-fab back-color="#464646" size="60" class="ml-5 mr-5">Txt</l-fab>
        <l-fab back-color="#2a5394" size="60">Docx</l-fab>
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
