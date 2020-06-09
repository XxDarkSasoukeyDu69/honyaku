<template>
  <button v-if="type" class="button d-flex justify-content-center align-items-center pl-3 pr-3" :class="getClass" :type="type"><b-spinner v-if="loading" variant="light" small class="mr-2"/><slot/>{{ value }}</button>
  <button v-else class="button d-flex justify-content-center align-items-center pl-3 pr-3" :class="getClass" @click="$emit('click', $event)"><slot/>{{ value }}</button>
</template>

<script>
    export default {
      name: "l-button",
      props: {
          rounded: Boolean,
          semiRounded: Boolean,
          value: String,
          loading: Boolean,
          type: String
      },
      computed: {
        getClass() {
          return [{
            'rounded-p': this.rounded,
            semiRounded: this.semiRounded,
          }]
        }
      }
    }
</script>

<style lang="scss" scoped>
  $background: #D60000;
  .rounded-p {
    border-radius: 50px;
    font-family: Nunito;
    box-shadow: -3px 5px 15px rgba(191, 63, 63, 0.45);
  }
  .semiRounded {
    border-radius: 10px;
  }
  .button {
    height: 40px;
    border: none;
    background: $background;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    transition: all ease 0.2s;
  }
  .button:hover {
    background: darken($background, 30%)
  }
  .button:focus {
    outline: none;
  }
  .buttonLanding {
    margin-top: 3rem;
    border: none;
    width: 250px;
    height: 60px;
    background: #D60000;
    box-shadow: -3px 5px 15px rgba(191, 63, 63, 0.45);
    border-radius: 42px;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: white;
  }
</style>
