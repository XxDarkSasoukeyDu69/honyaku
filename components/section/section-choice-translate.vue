<template>
  <section class="skewWrapper" style="padding-top: 5rem">
    <div class="skewY" style="background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important;"></div>
    <div class="container">
      <b-row>
        <b-col lg="6">
          <div class="d-flex">
            <l-fab back-color="white" class="mr-4">
              <font-awesome-icon icon="sign-language" color="#3bbf52" style="font-size: 30px" />
            </l-fab>
            <div>
              <l-typography h2 medium color="#ffffff">Two Choice Of Translate</l-typography>
              <l-typography color="#ffffff">Sur cette platforme, j'ai decidé de mettre en place deux modes de traduction
                dans le but de garder le principe qu'un autre utilisateur traduise votre fichier.</l-typography>
            </div>
          </div>
          <b-card class="mt-5 shadow-lg">
            <div class="d-flex ml-4 mr-3 mt-3 mb-2">
              <l-fab back-color="royalblue" size="40">
                <font-awesome-icon icon="gift" style="font-size: 15px"/>
              </l-fab>
              <div class="ml-4">
                <b-card-title>
                  <l-typography h4 medium color="royalblue">Free translate</l-typography>
                </b-card-title>
                <l-typography semi-light>Nous proposons une traduction de vos fichiers et ce gratuitement sous certaines conditions.
                  Afin de garantir un échange entre utilisateurs. La traduction vous est offerte dans le cas où un utilisateur
                  Traduit votre fichier.
                </l-typography>
              </div>
            </div>
          </b-card>
          <b-card class="mt-5 shadow-lg">
            <div class="d-flex ml-4 mr-3 mt-3 mb-2">
              <l-fab back-color="#D60000" size="40">
                <font-awesome-icon icon="money-bill-alt" style="font-size: 15px"/>
              </l-fab>
              <div class="ml-4">
                <b-card-title>
                  <l-typography h4 medium color="#D60000">Payement translate</l-typography>
                </b-card-title>
                <l-typography semi-light>Pour vous, les personnes presser, il est possible de payer un service de traduction automatique.
                  Vous garantissant une traduction sous les plus brefs délaies.</l-typography>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col lg="6">
          <div class="ml-5 mr-5">
            <img style="height: auto; width: 100%" :src="require('@/assets/images/2968170.png')"/>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
    import LTypography from "../base/typography";
    import LFab from "../base/fab";
    export default {
        name: "l-section-choice-translate",
      components: {LFab, LTypography}
    }
</script>

<style scoped>

</style>
