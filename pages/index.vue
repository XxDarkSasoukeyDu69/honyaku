<template>
  <div>
    <l-modal v-model="isConfirmUploadModal" overlay-dark>
      <div class="d-flex justify-content-between">
        <l-typography h3 bold>Transfert réussi ! </l-typography>
       <font-awesome-icon @click="isConfirmUploadModal = false" icon="times" style="font-size: 20px; cursor: pointer">close</font-awesome-icon>
      </div>
      <l-typography>Un mail vous a été envoyer</l-typography>
      <l-typography>Avec l'identifiant suivant : {{ id_order }}</l-typography>
      <l-typography>Cet identifiant vous permet de suivre l'état de votre commande, sur le lien suivant: <nuxt-link to="/follow-order">Lien</nuxt-link></l-typography>
    </l-modal>
    <l-modal v-model="modalPurchase" overlay-dark>
      <l-typography class="text-center" h3 bold>Quel format vous choisissez ?</l-typography>
      <b-row>
        <b-col class="justify-content-center">
          <img class="p-lg-5 p-md-5 p-sm-5 p-2" style="height: auto; width: 100%" :src="require('@/assets/images/wellness.png')"/>
          <l-typography h5 bold class="text-center mb-2">Free</l-typography>
          <l-button rounded value="I choose" style="margin: auto" @click="upload"/>
        </b-col>
        <b-col class="justify-content-center">
          <img class="p-lg-5 p-md-5 p-sm-5 p-2" style="height: auto; width: 100%" :src="require('@/assets/images/money.png')"/>
          <l-typography h5 bold class="text-center mb-2">Billing . 1,99 / 5 000 caractères</l-typography>
          <l-button rounded value="I choose" style="margin: auto" @click="navToBilling()"/>
        </b-col>
      </b-row>
    </l-modal>
    <l-modal-path click-path v-model="modal">
      <div class="d-flex justify-content-center mt-5">
        <l-fab back-color="#FFFFFF">
          <font-awesome-icon  icon="times" style="font-size: 30px; color: #D60000" @click="modal = false">close</font-awesome-icon>
        </l-fab>
      </div>
      <div class="container mt-5">
        <b-row class="justify-content-center">
          <b-col lg="6">
            <div style="background: #f4f4f4; border-radius: 10px" class="pt-5 pb-5">
              <div class="text-center">
                <l-typography h2 class="text-center mb-4" bold>Déposer votre fichier à traduire</l-typography>
              </div>
              <l-typography h5 style="text-align: center" class="mt-5 mb-3 mr-5 ml-5" >Nous acceptons seulement les formats json i18n.</l-typography>
              <form @submit="submitForm" class="mr-5 ml-5">
                <l-input type="email" v-model="email" class="upload" placeholder="Email" required />
                <div class="mb-4 d-flex justify-content-between">
                  <l-select v-model="source" country-flag class="w-100 mr-2" label="From :" :items="countries_code"/>
                  <l-select v-model="target" country-flag class="w-100 ml-2" label="Target :" :items="countries_code"/>
                </div>
                <upload-box @change="file = $event"/>
                <div class="d-flex justify-content-between align-items-center">
                  <l-button class="mt-4" :loading="loading" type="submit" rounded >Valider</l-button>
                </div>
              </form>
            </div>
          </b-col>
        </b-row>
      </div>
    </l-modal-path>
    <navbar :items="getMenu" />
    <l-section-landing-main v-model="modal"/>
    <l-section-features />
    <l-section-choice-translate />
    <l-section-format-available />
    <l-section-contact />
    <l-section-about />
    <l-footer />
  </div>
</template>

<script>

import Navbar from "~/components/base/navbar";
import UploadBox from "~/components/base/upload-box";
import Typography from "~/components/base/typography";
import LButton from "~/components/base/button";
import file_request from "../services/requests/file_request";
import LModal from "../components/base/modal";
import LFooter from "../components/base/footer";
import LTypography from "../components/base/typography";
import LCard from "../components/base/card";
import LInput from "../components/base/input";
import LFab from "../components/base/fab";
import LSelect from "../components/base/select";
import google_request from "../services/requests/google_request";
import LSectionContact from "../components/section/section-contact";
import LSectionAbout from "../components/section/section-about";
import LSectionFormatAvailable from "../components/section/section-format-available";
import LSectionChoiceTranslate from "../components/section/section-choice-translate";
import LSectionFeatures from "../components/section/section-features";
import LSectionLandingMain from "../components/section/section-landing-main";
import LModalPath from "../components/base/modal-path";
import fileConverter from "../services/fileConverter";
import billing from "../services/requests/billing";

export default {
  components: {
    LModalPath, LSectionLandingMain, LSectionFeatures, LSectionChoiceTranslate, LSectionFormatAvailable, LSectionAbout,
    LSectionContact, LSelect, LFab, LInput, LCard, LTypography, LFooter, LModal, LButton, Typography, UploadBox, Navbar
  },
  data() {
    return {
      loading: false,
      email: '',
      modalPurchase: false,
      modal: false,
      file: null,
      source: 'en',
      target: 'fr',
      countries_code: [],
      id_order: '',
      isConfirmUploadModal: false
    }
  },
  methods: {
    navToBilling() {
      var reader = new FileReader();
      billing.insertBilling(this.createFormData()).then(r => {
        window.location.href = '/billing?file_id=' + r.data.data.id
      }).catch(e => {
        alert('Une erreur c\'est produite avec votre fichier')
      })
    },
    createFormData() {
      let type = (/[.]/.exec(this.file.name)) ? /[^.]+$/.exec(this.file.name)[0] : undefined
      let formData = new FormData();
      formData.append('fileMail', this.email)
      formData.append('fileName', this.file.name)
      formData.append('file', this.file)
      formData.append('targetLang', this.target)
      formData.append('sourceLang', this.source)
      formData.append('fileType', type)
      return formData
    },
    upload() {
      file_request.postFile(this.createFormData()).then(r => {
        this.modalPurchase = false
        this.modal = false
        let self = this
        this.id_order = r.data.result.id
        setTimeout(function () {
          self.isConfirmUploadModal = true
        }, 2000)
      }).catch(e => {
        this.modalPurchase = false
        alert("transfert echoué")
      })
    },
    getCountriesCode() {
      google_request.getCountriesSupport().then(r =>{
        this.countries_code = r.data.countries_code
      })
    },
    submitForm(e) {
      e.preventDefault()
      if (this.file === null) {
        alert('Il semble avoir aucun fichier de renseigner');
        return;
      }
      this.modalPurchase = true
    }
  },
  computed: {
    getMenu() {
      if (this.$token) return [{libel: "Accueil", link: '/'}, {libel: "Traduction", link: '/translator-area/list-trad'}, {libel: 'Profile', link: '/translator-area/profile/', active: true}]
      else return [{libel: 'Sign Up' , link: '/auth/subscribe'}, {libel: 'Login', link: '/auth/login', active: true}]
    },
  },
  watch: {
    modal: function (newVal) {
      if(newVal === true) this.modalPurchase = false
    }
  },
  mounted() {
    this.getCountriesCode()
  }
}
</script>

<style lang="scss" scoped>
.wrapper-left {
  margin-left: 17em;
}

  li {
    list-style: none;
  }
</style>

<style>
  .skewY {
    transform-origin: 0;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: skewY(-8deg);
  }
  .skewWrapper {
    position: relative;
    overflow: hidden;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .btn-transparent {
    background: none; border: none;
  }
</style>
