<template>
  <div class="h-100">
    <SlideXLeftTransition :duration="300">
      <div v-show="value === 0" class="h-100">
        <l-typography h3 bold>Vous avez fini de traduire ce fichier ?</l-typography>
        <b-row class="h-100">
          <b-col sm="12" class="h-100 d-flex justify-content-center">
            <img style="height: 100%; width: auto" :src="require('@/assets/images/3659412.png')">
          </b-col>
        </b-row>
      </div>
    </SlideXLeftTransition>
    <SlideXLeftTransition :duration="300">
      <div v-show="value === 1">
        <l-typography h3 bold>Envoyer une message ?</l-typography>
        <l-typography h5 medium>Ecrivez une petite note à la personne concernée, nous lui transmetrons</l-typography>
        <div>
          <l-input textarea placeholder="Message"/>
        </div>
      </div>
    </SlideXLeftTransition>
    <SlideXLeftTransition :duration="300">
      <div v-show="value === 2">
        <l-typography h3 bold>Envoyer une message ?</l-typography>
        <l-typography h5 medium>Ecrivez une petite note à la personne concernée, nous lui transmetrons</l-typography>
        <div>
          sd
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
      name: "l-tabs-end-translate",
      components: {LInput, LTypography, LTabs, SlideXLeftTransition}
    }
</script>

<style scoped>

</style>
