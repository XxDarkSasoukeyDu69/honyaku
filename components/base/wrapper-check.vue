<template>
    <div v-if="item">
      <slot name="content" />
    </div>
    <div v-else class="text-center" :class="styleClass">
      <l-typography h5 bold>{{ message }}</l-typography>
    </div>
</template>

<script>
    import LTypography from "./typography";
    export default {
      name: "l-wrapper-check",
      components: {LTypography},
      props: {
          item: [Object, Array, String, Number],
          message: String,
          styleClass: String
        }
    }
</script>

<style scoped>

</style>
