<template>
    <div class="card-header-p">
      <l-typography h3 bold><slot/></l-typography>
    </div>
</template>

<script>
    import LTypography from "./typography";
    export default {
        name: "l-card-header",
      components: {LTypography}
    }
</script>

<style scoped>
.card-header-p {
  padding: 1.75em 2.25em;
}
</style>
