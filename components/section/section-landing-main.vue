<template>

  <section class="vh-100" style="background: linear-gradient(149deg, rgb(245, 196, 185) 0px, rgb(173, 172, 236) 50%, rgb(96, 142, 199) 100%) !important;">
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="text-center">
        <l-typography title-landing color="#ffffff" medium>Honyaku</l-typography>
        <l-typography class="mt-3" h3 color="#ffffff">Get A Quick, Free Translation</l-typography>
        <button @click="$emit('input', !value)" class="button-landing">Get Started</button>
      </div>
    </div>
  </section>

</template>

<script>
    import LTypography from "../base/typography";
    export default {
      props: {
        value: Boolean
      },
      name: "l-section-landing-main",
      components: {LTypography}
    }
</script>

<style scoped>
  .button-landing:focus {
    border: none;
    outline: none;
  }
  .button-landing {
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
