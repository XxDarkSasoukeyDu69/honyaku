<template>
  <div>
    <div class="pince" :style="`color: ${color}; background-color: ${backColor}; height: ${size}px; width: ${size}px`">
      <span><slot/></span>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        color: String,
        backColor: String,
        size: {
          type: [String, Number],
          default: 60 || '60'
        }
      },
      name: "l-fab"
    }
</script>

<style lang="scss" scoped>
  .pince {
    border-radius: calc(50px * 10);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -2px 2px 10px #969696;
    span {
      color: white;
      font-weight: bold;
    }
  }
</style>
