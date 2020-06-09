<template>
    <div class="card-p" :class="getClass">
      <slot />
    </div>
</template>

<script>
    export default {
      name: "l-card",
      props: {
      },
      computed: {
        getClass() {
          return [
            {

            }
          ]
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>
  .card-p {
    background: #FFFFFF;
    box-shadow: 0px 0px 28px rgba(198, 198, 198, 0.25);
    border-radius: 28px;
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
