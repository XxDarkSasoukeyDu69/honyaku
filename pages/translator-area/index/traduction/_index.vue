<template>
  <div class="h-100">
    <l-modal v-model="finish_modal" overlay-dark>
      <div style="height: 500px;">
        <l-tabs-end-translate v-model="index_tabs" />
      </div>
      <div class="d-flex">
        <l-button rounded :value="index_tabs === 0 ? 'Annulé' : 'Précédent'" @click="index_tabs === 0  ? finish_modal = false : index_tabs--"/>
        <l-button class="ml-3" rounded :value="index_tabs === 2 ? 'Suivant' : 'Confirmer'" @click="index_tabs === 2 ? setFinished : index_tabs++"/>
      </div>
    </l-modal>
    <div class="container h-100 flex-column d-flex">
      <div style="height: 100%" class="pt-5">
        <div>
          <l-typography h3 bold>Ce qu'il faut traduire : </l-typography>
          <div v-if="toTranslate">"{{ toTranslate[index].value }}"</div>
          <div v-else>Désolé il n'y a rien à traduire pour le moment dans cette rubrique</div>
        </div>
      </div>
      <div class="float-right">
        {{ index + 1 }} / {{ toTranslate ? toTranslate.length : 0 }}
      </div>
      <hr>
      <div style="height: 100%" class="mt-5 mb-5">
        <b-form @submit="next_step">
          <l-input textarea v-model="tradSet" placeholder="écriver votre traduction ici" rows="10"/>
          <b-row class="ml-2 mr-2">
            <l-button rounded class="mt-3 col-sm-4" @click="previous_step">Précédent</l-button>
            <l-button rounded style="background: #1aae6f; box-shadow: none" class="mt-3 col-sm-4" type="submit">Valider !</l-button>
            <l-button rounded style="background: #3a46ae; box-shadow: none" class="mt-3 col-sm-4" @click="save_translation()">Sauvegarder !</l-button>
          </b-row>
        </b-form>
      </div>

    </div>
  </div>
</template>

<script>

  import frJson from '~/locales/fr.json'
  import traduceService from "../../../../services/traduction-manager";
  import file_request from "../../../../services/requests/file_request";
  import LButton from "../../../../components/base/button";
  import LInput from "../../../../components/base/input";
  import LTypography from "../../../../components/base/typography";
  import LModal from "../../../../components/base/modal";
  import LTabs from "../../../../components/base/tabs";
  import LTabsEndTranslate from "../../../../components/tabs/tabs-end-translate";

    export default {
      name: "index",
      components: {LTabsEndTranslate, LTabs, LModal, LTypography, LInput, LButton},
      data() {
        return {
          index_tabs: 0,
          test: true,
          index: 0,
          fr_json: frJson,
          toTranslate: null,
          tradSet: '',
          routeIndex: this.$route.params.index,
          finish_modal: false
        }
      },
      methods: {
        previous_step(e) {
          e.preventDefault()
          if (this.index !== 0) this.index--
          this.tradSet = this.toTranslate[this.index].trad
        },
        next_step(e) {
          e.preventDefault()
          if((this.index + 2) > this.toTranslate.length )  {
            this.finish_modal = true
          } else {
            this.toTranslate[this.index].trad = this.tradSet
            this.index++
            this.tradSet = this.toTranslate[this.index].trad
          }
        },
        save_translation() {
          let translate = traduceService.reconstruct(this.toTranslate)
          let formData = new FormData();
          formData.append('file', JSON.stringify(translate))
          file_request.updateTranslation(this.routeIndex, formData).then(r => {})
        },
        setFinished() {

        }
      },
      mounted() {
        file_request.getFile(this.routeIndex).then(r => {
          this.toTranslate = traduceService.flatten(JSON.parse(r.data.file.contentToTranslate)) // , JSON.parse(r.data.file.contentTranslate)
          this.tradSet = this.toTranslate[this.index].trad
        })
      },
      beforeDestroy() {
       this.save_translation()
      }
    }
</script>

<style scoped>

</style>
