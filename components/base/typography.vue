<template>
  <nuxt-link
    v-if="to"
    :to="to"
    :class="getClass"
    style="text-decoration: none; cursor: pointer"
    :style="`color: ${color}`"><slot />{{ value }}
  </nuxt-link>
  <div
    :class="getClass"
    :style="`color: ${color}`"
    v-else>
    <slot name="prepend"/>
    <slot/>
    <span>{{ value }}</span>
    <slot name="append"/>
  </div>
</template>

<script>
  export default {
    name: "l-typography",
    props: {
      color: String,
      value: [String, Number],
      h0: Boolean,
      h1: Boolean,
      h2: Boolean,
      h3: Boolean,
      h4: Boolean,
      h5: Boolean,
      p: Boolean,
      label: Boolean,
      to: [String, Object],
      cursor: Boolean,
      light: Boolean,
      semiLight: Boolean,
      bold: Boolean,
      medium: Boolean,
      bolder: Boolean,
      titleLanding: Boolean,
    },
    computed: {
      getClass() {
        return [{
          h0: this.h0,
          h1: this.h1,
          h2: this.h2,
          h3: this.h3,
          h4: this.h4,
          h5: this.h5,
          p: this.p,
          cursor: this.cursor,
          label: this.label,
          light: this.light,
          semiLight: this.semiLight,
          medium: this.medium,
          bold: this.bold,
          bolder: this.bolder,
          titleLanding: this.titleLanding
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bolder {font-weight: bolder }
  .bold { font-weight: bold }
  .light { font-weight: lighter }
  .medium { font-weight: 600 }
  .semiLight { font-weight: 300 }
  .h0 {
    font-family: Nunito;
    letter-spacing: 1px;
    font-size: 75px;
    display: block;
  }
  .h1 {
    font-family: Nunito;
    display: block;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .h2 {
    font-family: Nunito;
    display: block;
    font-size: 40px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .h3 {
    font-family: Nunito;
    display: block;
    font-size: 30px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .h4 {
    font-family: Nunito;
    display: block;
    font-size: 25px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .h5 {
    font-size: 20px;
    font-family: Nunito;
    color: #35495e;
  }
  .p {
    font-family: "Helvetica Neue", 'sans-serif';
    font-size: 18px;
    color: #47494e;
  }
  .titleLanding {
    //font-family: 'Nunito', sans-serif;
    font-family: Nunito;
    font-style: normal;
    font-size: 60px;
    line-height: 82px;
  }
</style>
