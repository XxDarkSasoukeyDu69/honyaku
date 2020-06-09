<template>
  <div class="cookie" v-if="isOpen" style="background-color: #fff">
    <l-typography>
      En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies afin de vous offrir une meilleure expérience sur notre site.
    </l-typography>
    <div class="pl-3 d-flex">
      <l-button @click="accept" rounded style="box-shadow: none; background: none; color: #D60000" class="p-0 ml-5">Accepter</l-button>
      <l-button class="ml-1 p-0" style="box-shadow: none; background: none; color: #D60000" @click="$router.push('/cookie')" rounded>En savoir plus</l-button>
    </div>
  </div>
</template>

<script>
    import LTypography from "../components/base/typography";
    import LButton from "../components/base/button";
    export default {
        name: "cookieMessage",
      components: {LButton, LTypography},
      data() {
        return {
          isOpen: false
        }
      },
      created() {
        if(!this.getGDPR() === true) {
          this.isOpen = true
        }
      },
      methods: {
          getGDPR() {
            return localStorage.getItem('GDPR:accepted')
          },
        accept() {
          this.isOpen = false;
          localStorage.setItem('GDPR:accepted', true)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .cookie {
    box-shadow: 0px 1px 20px #dededeb0;
    flex-wrap: wrap-reverse;
    padding: 20px 0px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1120px) {
    .cookie {
      flex-direction: column;
      div:nth-child(1) {
        margin-bottom: 20px;
      }
      div {
        text-align: center;
      }
    }
  }
</style>
