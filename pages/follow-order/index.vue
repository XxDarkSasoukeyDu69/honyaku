<template>
    <div>
      <l-modal v-model="confirm_modal" overlay-dark>
        <l-typography bold h3 value="Etes vous sur de supprimer votre commande ?"/>
        <div class="d-flex justify-content-center mt-4">
            <l-button class="mr-3" rounded value="Non" @click="confirm_modal = false" />
            <l-button rounded @click="deleteOrder(result.id, $event)" value="Oui"/>
        </div>
      </l-modal>
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
              <l-button rounded :loading="loading" type="submit" value="valider"/>
            </form>
          </b-col>
        </b-row>
        <l-wrapper-check :item="result" message="Insérer un code valide" style-class="mt-5">
          <b-row slot="content" class="mt-5">
            <b-col lg="8" class="mb-5">
              <l-card-trad-item :item="result" status>
                <l-button slot="btn" hover-expand rounded class="mr-5" @click="openModal">
                  <font-awesome-icon slot="prepend-icon" icon="times"/>Suprimmer</l-button>
              </l-card-trad-item>
            </b-col>
          </b-row>
        </l-wrapper-check>
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
    import LTypography from "../../components/base/typography";
    import LCardTradItem from "../../components/card/card-trad-item";
    import LWrapperCheck from "../../components/base/wrapper-check";
    import LModal from "../../components/base/modal";
    export default {
      name: "index",
      components: {LModal, LWrapperCheck, LCardTradItem, LTypography, LInput, LButton, LFooter, LSectionHeader},
      data() {
        return {
          code: '',
          loading: false,
          result: null,
          confirm_modal: false
        }
      },
      methods: {
        deleteOrder(item_id) {
          file_request.deleteOrder(item_id).then(r => {
            this.confirm_modal = false
            this.result = null
          }).catch(e => alert('Une erreur est survenue'))
        },
        openModal() {
          var self = this
          setTimeout(function () {
            self.confirm_modal = true
          })
        },
        submitForm(e) {
          e.preventDefault()
          this.loading = true
          file_request.getOrder(this.code).then(r => {
            this.result = r.data.file
          }).catch(e => {
            console.log(e)
          }).finally(e => {
            this.loading = false
          })
        }
      }
    }
</script>
