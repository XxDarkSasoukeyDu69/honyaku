<template>
  <SlideYUpTransition :duration="300">
    <div class="modal-p-wrapper" :class="[{'overlay-dark': overlayDark}]" v-show="value" role="dialog">
      <div class="modal-p" v-click-outside="closeModal">
        <div class="p-4">
          <slot />
        </div>
      </div>
    </div>
  </SlideYUpTransition>
</template>

<script>

  import { SlideYUpTransition } from "vue2-transitions";
  import LCard from "./card";
  import LButton from "./button";

    export default {
      components: {
        LButton,
        LCard,
        SlideYUpTransition
      },
      name: "l-modal",
      props: {
        overlayDark: Boolean,
        value: Boolean
      },
      methods: {
        closeModal() {
          this.$emit('input', false)
        }
      }
    }
</script>

<style lang="scss" scoped>

  .overlay-dark {
    background: #000000b8;
  }

  .modal-p-wrapper {
   // visibility: hidden;
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    .modal-p {
      margin: 15px;
      border-radius: 10px;
      width: 800px;
      background: white;
    }
  }
</style>
