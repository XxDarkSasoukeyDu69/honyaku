<template>
    <div style="margin-top: 3em;">
      <l-typography h3 bold v-if="title">{{title}}</l-typography>
      <l-typography class="mb-3" h5 v-if="texts" v-for="(text, key) in texts" :key="key">{{text}}</l-typography>
    </div>
</template>

<script>
    import LTypography from "./typography";
    export default {
      props: {
        title: String,
        texts: Array
      },
        name: "l-paragraph",
      components: {LTypography}
    }
</script>

<style scoped>

</style>
