<template>
    <div>
      <navbar :items="menu"/>
      <div class="vh-100 wrapper-main">
        <nuxt-child />
      </div>
    </div>
</template>

<script>
    import Navbar from "../../components/base/navbar";
    export default {
        name: "index",
      components: {Navbar},
      data() {
          return {
            menu: [{libel: "Accueil", link: '/'}, {libel: "Traduction", link: '/translator-area/list-trad'}, {libel: 'Profile', link: '/translator-area/profile/', active: true}]
          }
      },
      mounted() {
        this.$token === null ? this.$router.push('/auth/login') :  ''
      }
    }
</script>

<style scoped>
  .wrapper-main {
    padding-top: 100px;
  }
</style>
