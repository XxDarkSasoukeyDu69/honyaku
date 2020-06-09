<template>
    <div>
      <div class="container">
        <div style="height: 50vh" class="d-flex align-items-center">
          <div>
            <h3>ce qu'il faut traduire : </h3>
            <div v-if="toTranslate">"{{ toTranslate[index].value }}"</div>
            <div v-else>Désolé il n'y a rien a traduire pour le moment dans cette rubrique</div>
          </div>
        </div>
        <hr>
        <div style="height: 50vh" class="mt-5">
          <b-form @submit="next_step">
            <l-input textarea v-model="tradSet" placeholder="écriver votre traduction ici" rows="10"/>
            <div class="d-flex">
              <l-button rounded class="mt-3" @click="previous_step">Précédent</l-button>
              <l-button rounded style="background: #1aae6f; box-shadow: none" class="mt-3 ml-3" type="submit">Valider !</l-button>
              <l-button rounded style="background: #3a46ae; box-shadow: none" class="mt-3 ml-3" @click="save_translation()">Sauvegarder !</l-button>
            </div>
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

    export default {
      name: "index",
      components: {LInput, LButton},
      data() {
        return {
          index: 0,
          fr_json: frJson,
          toTranslate: null,
          tradSet: '',
          routeIndex: this.$route.params.index
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
          this.toTranslate[this.index].trad = this.tradSet
          this.index++
          this.tradSet = this.toTranslate[this.index].trad
        },
        save_translation() {
          let translate = traduceService.reconstruct(this.toTranslate)
          let formData = new FormData();
          formData.append('file', JSON.stringify(translate))
          file_request.updateTranslation(this.routeIndex, formData).then(r => {})
        }
      },
      mounted() {
        file_request.getFile(this.routeIndex).then(r => {
          this.toTranslate = traduceService.flatten(JSON.parse(r.data.file.contentToTranslate), JSON.parse(r.data.file.contentTranslate))
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
