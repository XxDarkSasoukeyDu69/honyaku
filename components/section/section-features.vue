<template>
  <section class="container mt-5 pt-5 mb-5 pb-5" style="height: 100vh">
    <b-row class="h-100 align-items-center">
      <b-col lg="6">
        <l-fab back-color="#54daa180" class="mb-5 "><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab>
        <l-typography h2 medium>Awesome features</l-typography>
        <l-typography semi-light>Bienvenue sur la platforme indispensable, vous permettant de traduire vos textes.</l-typography>
        <ul class="mt-5 pt-3">
          <li class="d-flex align-items-center mb-3"><l-fab back-color="#54daa180" size="35"><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab><l-typography h5 bold class="mb-0 ml-3">Devener traducteur de textes</l-typography></li>
          <li class="d-flex align-items-center mb-3"><l-fab back-color="#54daa180" size="35"><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab><l-typography h5 bold class="mb-0 ml-3">Faites appelle à un traducteur</l-typography></li>
          <li class="d-flex align-items-center mb-3"><l-fab back-color="#54daa180" size="35"><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab><l-typography h5 bold class="mb-0 ml-3">Traduisez vos texts automatiquement</l-typography></li>
        </ul>
      </b-col>
      <b-col lg="6">
        <div class="ml-5 mr-5">
          <img style="height: auto; width: 100%" :src="require('@/assets/images/3545776.png')"/>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
    import LTypography from "../base/typography";
    import LFab from "../base/fab";
    export default {
        name: "l-section-features",
      components: {LFab, LTypography}
    }
</script>

<style scoped>

</style>
