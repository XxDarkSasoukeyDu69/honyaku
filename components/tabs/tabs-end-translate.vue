<template>
  <div class="h-100">
    <SlideXLeftTransition :duration="300" v-show="value === 0">
      <div class="h-100">
        <l-typography h3 bold>Vous avez fini de traduire ce fichier ?</l-typography>
        <b-row class="justify-content-center align-items-center">
          <b-col sm="8">
            <img style="height: auto; width: 100%" :src="require('@/assets/images/3659412.png')">
          </b-col>
        </b-row>
      </div>
    </SlideXLeftTransition>
    <SlideXLeftTransition v-show="value === 1" :duration="300">
      <div>
        <l-typography h3 bold>Envoyer une message ?</l-typography>
        <l-typography h5 medium>Ecrivez une petite note à la personne concernée, nous lui transmetrons</l-typography>
        <div class="text-center mt-5 mb-5">
          <img style="width: 175px; height: 175px" :src="require('@/assets/images/mail.png')" >
        </div>
        <div>
          <l-input textarea placeholder="Message" v-model="message" />
        </div>
      </div>
    </SlideXLeftTransition>
    <SlideXLeftTransition v-show="value === 2" :duration="300">
      <div class="h-100">
        <l-typography h3 bold>Merci beaucoup ! </l-typography>
        <div class=" h-100 d-flex align-items-center justify-content-center">
          <div class="text-center">
            <img style="width: 200px; height: 200px" :src="require('@/assets/images/recognition.png')" >
            <l-typography class="mt-3" h3 bold color="#b2B2B2">Plus qu'a envoyer :-)</l-typography>
          </div>
        </div>
      </div>
    </SlideXLeftTransition>
  </div>
</template>

<script>
    import LTabs from "../base/tabs";
    import LTypography from "../base/typography";

    import {SlideXLeftTransition} from 'vue2-transitions'
    import LInput from "../base/input";

    export default {
      props: {
        value: Number
      },
      data() {
        return {
          message: ''
        }
      },
      updated() {
        this.$emit('message', this.message)
      },
      name: "l-tabs-end-translate",
      components: {LInput, LTypography, LTabs, SlideXLeftTransition}
    }
</script>

<style scoped>

</style>
