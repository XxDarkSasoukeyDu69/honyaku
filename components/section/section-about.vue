<template>
  <section class="container vh-100 d-flex align-items-center mb-5 mt-5 pt-5 pb-5" id="about">
    <div class="w-100">
      <l-typography class="text-center mb-3" h2 medium>Amazing team</l-typography>
      <l-typography class="text-center" h3 semi-light>Cette plateforme a été créée et développé par :</l-typography>
      <div class="text-center mt-5 pt-5">
        <b-img
          class="shadow-lg mb-4"
          height="175"
          width="175"
          rounded="circle"
          src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/90253805_1586916894791505_4131064914418597888_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQnHAB8kU_c4vxKxKOARyks_8JMPlii4qKKAjZg8_W0YPLxZhcHofTJmvIxc7C78lrDrbFWoB4bYJMBFn-EfXUFC&_nc_ht=scontent-cdt1-1.xx&oh=89be230c30dcb4501a0982662431f1da&oe=5F0228FA"/>
        <l-typography h4 bold>Alexandre Cailler</l-typography>
        <l-typography h5 semi-light>Développeur Laravel/Node, Nginx <br> Vue(Nuxt ou CLI)/React/React-native, Docker, PostgreSQL</l-typography>
        <div class="d-flex justify-content-center mt-3 ">
          <a href="https://www.facebook.com/alexandre.cailler.16">
            <l-fab back-color="#4267b2" size="40">
              <font-awesome-icon :icon="['fab', 'facebook-f']" style="font-size: 20px; color: #FFFFFF" />
            </l-fab>
          </a>
          <a href="https://www.linkedin.com/in/alexandre-cailler-192249159/">
            <l-fab back-color="#0476b5" size="40" class="ml-4 mr-4">
              <font-awesome-icon :icon="['fab','linkedin-in']" style="font-size: 20px; color: #FFFFFF" />
            </l-fab>
          </a>
          <a href="https://www.instagram.com/alex.cailler02/">
            <l-fab back-color="#cd5f76" size="40">
              <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 20px" />
            </l-fab>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

    import LTypography from "../base/typography";
    import LFab from "../base/fab";

    export default {
      name: "l-section-about",
      components: {LFab, LTypography}
    }
</script>

<style scoped>
  #about {
    position: relative;
    z-index: 40;
  }
</style>
