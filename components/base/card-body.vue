<template>

  <div class="card-body-p">
    <l-typography><slot/></l-typography>
  </div>

</template>

<script>
    import LTypography from "./typography";
    export default {
        name: "l-card-body",
      components: {LTypography}
    }
</script>

<style scoped>
  .card-body-p {
    padding: 0em 2.25em;
  }
</style>
