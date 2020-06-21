<template>
  <div class="container flex-column d-flex h-100" v-if="user">
    <l-typography class="pt-5" h2 bold>Welcome in your profile area, {{user.pseudo}}</l-typography>
    <b-row class="pt-5 pb-5 h-100">
      <b-col :cols="12" lg="4" class="col-wrapper-profile">
        <l-card-profile
          :count="effectedCount"
          label="Traduction éffectué"
          redirect-link="/translator-area/profile/effected-translate"
          redirect-label="Voir"
        />
      </b-col>
      <b-col :cols="12" lg="4" class="col-wrapper-profile">
        <l-card-profile
          :count="runningCount"
          label="Traduction en cours"
          redirect-link="/translator-area/profile/running-translate"
          redirect-label="Voir"
        />
      </b-col>
      <b-col :cols="12" lg="4" class="col-wrapper-profile">
        <l-card class="d-flex align-items-center justify-content-center">
          <l-card-profile
            count="2.5"
            label="Notation"
          />
        </l-card>
      </b-col>
      <b-col :cols="12" lg="4" class="col-wrapper-profile">
        <l-card class="d-flex align-items-center justify-content-center">
          <div class="text-center">
            <font-awesome-icon icon="user" style="font-size: 70px"/>
            <l-typography  h3 bold value="Profile" class="text-center pt-3"/>
            <l-button style="margin: auto" class="mt-3" @click="$router.push('/translator-area/profile/information')" rounded>Voir</l-button>
          </div>
        </l-card>
      </b-col>
      <b-col :cols="12" lg="8" class="col-wrapper-profile">
        <l-card>
          <l-card-header>Information</l-card-header>
          <l-card-body>
            <p class="text-muted">Bienvenue sur notre platforme, nous sommes heureux de vous acceuillir.</p>
            <p class="text-muted">J’espere que vous prendrez plaisir à traduire des textes d’autres personnes avec notre système.</p>
            <p class="text-muted">Des mise à jours sont prévue pour vous faciliter au mieux les traductions.</p>
          </l-card-body>
        </l-card>
      </b-col>
    </b-row>
  </div>
  <div v-else>
    Pas de profile
  </div>
</template>

<script>
    import LCard from "~/components/base/card";
    import user from "~/services/requests/user";
    import LTypography from "~/components/base/typography";
    import CardFlip from "~/components/base/card-flip";
    import LCardHeader from "~/components/base/card-header";
    import LCardBody from "~/components/base/card-body";
    import LButton from "../../../../components/base/button";
    import file_request from "../../../../services/requests/file_request";
    import LCardProfile from "../../../../components/card/card-profile";
    export default {
      name: "index",
      components: {LCardProfile, LButton, LCardBody, LCardHeader, CardFlip, LTypography, LCard},
      data() {
        return {
          user: null,
          effectedCount: 0,
          runningCount: 0
        }
      },
      methods: {
        getTranslations() {
          file_request.getMyRunningTranslation().then(r => {
            this.runningCount = r.data.files.length
          })
          file_request.getMyEffectedTranslation().then(r => {
            this.effectedCount = r.data.files.length
          })
        },
      },
      mounted() {
        user.getUserInfo().then(r => {
          this.user = r.data
          this.getTranslations()
        })
      }
    }
</script>

<style lang="scss" scoped>
  .col-wrapper-profile {
    padding: 20px;
  }
</style>
