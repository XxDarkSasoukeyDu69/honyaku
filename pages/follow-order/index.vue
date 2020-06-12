<template>
    <div>
      <l-section-header title="Suivie de commande" />
      <div class="container mt-5 pt-5 mb-5 pb-5" style="position: relative; z-index: 100;">
        <b-row class="justify-content-center mt-5 pt-5">
          <b-col lg="6">
            <form @submit="submitForm">
              <b-form-group
                id="input-group-code"
                label="Code commande"
                label-for="code"
              ><l-input type="text" v-model="code" placeholder="Code commande" required id="code"/>
              </b-form-group>
              <l-button rounded :loading="false" type="submit" value="valider"/>
            </form>
          </b-col>
        </b-row>
        <div class="mt-5 pt-5">

        </div>
        </div>
      <l-footer />
    </div>
</template>

<script>
    import LSectionHeader from "../../components/section/section-header";
    import LFooter from "../../components/base/footer";
    import LButton from "../../components/base/button";
    import LInput from "../../components/base/input";
    import file_request from "../../services/requests/file_request";
    export default {
      name: "index",
      components: {LInput, LButton, LFooter, LSectionHeader},
      data() {
        return {
          code: '',
          loading: false,
          result: null
        }
      },
      methods: {
        submitForm(e) {
          e.preventDefault()
          file_request.getFile(this.code).then(r => {
            this.result = r.data.file
          }).catch(e => {
            console.log(e)
          })
        }
      }
    }
</script>

<style scoped>

</style>
