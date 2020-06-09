<template>
  <div>
    <l-modal v-model="modal">
      <div class="d-flex justify-content-center mt-5">
        <l-fab back-color="#FFFFFF">
          <font-awesome-icon icon="times" style="font-size: 30px; color: #D60000" @click="modal = false">close</font-awesome-icon>
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
                <l-input type="email" v-model="email" class="upload" placeholder="Email"/>
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
    </l-modal>
    <navbar :items="getMenu" />
    <section class="vh-100" style="background: linear-gradient(149deg, rgb(245, 196, 185) 0px, rgb(173, 172, 236) 50%, rgb(96, 142, 199) 100%) !important;">
      <div class="container h-100 d-flex align-items-center justify-content-center">
        <div class="text-center">
          <l-typography title-landing color="#ffffff" medium>Honyaku</l-typography>
          <l-typography class="mt-3" h3 color="#ffffff">Get A Quick, Free Translation</l-typography>
          <button @click="modal = true" class="button-landing">Get Started</button>
        </div>
      </div>
    </section>
    <section class="container mt-5 pt-5 mb-5 pb-5" style="height: 100vh">
      <b-row class="h-100 align-items-center">
        <b-col lg="6">
          <l-fab back-color="#54daa180" class="mb-5 "><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab>
          <l-typography h2 medium>Awesome features</l-typography>
          <l-typography semi-light>Bienvenue sur la platforme indispensable, vous permettant de traduire vos text.</l-typography>
          <ul class="mt-5 pt-3">
            <li class="d-flex align-items-center mb-3"><l-fab back-color="#54daa180" size="35"><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab><l-typography h5 bold class="mb-0 ml-3">Devener traducteur de text</l-typography></li>
            <li class="d-flex align-items-center mb-3"><l-fab back-color="#54daa180" size="35"><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab><l-typography h5 bold class="mb-0 ml-3">Faites appelle a un traducteur</l-typography></li>
            <li class="d-flex align-items-center mb-3"><l-fab back-color="#54daa180" size="35"><font-awesome-icon icon="users" style="color: #1aae6f"/></l-fab><l-typography h5 bold class="mb-0 ml-3">Traduisez vos text automatiquement</l-typography></li>
          </ul>
        </b-col>
        <b-col lg="6">
          <div class="ml-5 mr-5">
            <img style="height: auto; width: 100%" :src="require('@/assets/images/3545776.png')"/>
          </div>
        </b-col>
      </b-row>
    </section>
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
                    Vous garantissant une traduction sous les plus brèves délaies.</l-typography>
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
    <section class="container vh-100 d-flex align-items-center mb-5 mt-5 pt-5 pb-5" id="about">
      <div class="w-100">
        <l-typography class="text-center mb-3" h2 medium>Amazing team</l-typography>
        <l-typography class="text-center" h3 semi-light>Cette plateforme a été créé et développé par une seule personne, moi !</l-typography>
        <div class="text-center mt-5 pt-5">
          <b-img
            class="shadow-lg mb-4"
            height="175"
            width="175"
            rounded="circle"
            src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/90253805_1586916894791505_4131064914418597888_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQnHAB8kU_c4vxKxKOARyks_8JMPlii4qKKAjZg8_W0YPLxZhcHofTJmvIxc7C78lrDrbFWoB4bYJMBFn-EfXUFC&_nc_ht=scontent-cdt1-1.xx&oh=89be230c30dcb4501a0982662431f1da&oe=5F0228FA"/>
          <l-typography h4 bold>Alexandre Cailler</l-typography>
          <l-typography h5 semi-light>Développeur "presque" full stack junior</l-typography>
          <div class="d-flex justify-content-center mt-3 ">
            <a href="https://www.facebook.com/alexandre.cailler.16">
              <l-fab back-color="#4267b2" size="40">
                <font-awesome-icon :icon="['fab', 'facebook-f']" style="font-size: 20px; color: #FFFFFF" />
              </l-fab>
            </a>
            <a href="https://www.linkedin.com/in/alexandre-cailler-192249159/">
              <l-fab back-color="#0476b5" size="40" class="ml-4 mr-4">
                <font-awesome-icon :icon="['fab','linkedin-in']" style="font-size: 20px; color: #FFFFFF" />
              </l-fab>
            </a>
            <a href="https://www.instagram.com/alex.cailler02/">
              <l-fab back-color="#cd5f76" size="40">
                <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 20px" />
              </l-fab>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="skewWrapper">
      <div class="skewY" style="background: linear-gradient(87deg, #172b4d 0, #1a174d 100%)"></div>
      <div class="container">
        <b-row class="justify-content-center">
          <b-col lg="8" style="position: relative">
            <div style="background: #f4f4f4; border-radius: 10px" class="pt-5 pb-5">
              <div class="mr-5 ml-5">
                <l-typography h2 value="Contact" class="mb-4" medium/>
                <l-typography h5 medium>N’hésitez pas à me contacter pour toutes questions sur la plateforme.</l-typography>
                <form @submit="submitFormContact">
                  <l-input v-model="form.pseudo" placeholder="Pseudo" type="text" class="mt-5"/>
                  <l-input v-model="form.email" placeholder="Email" type="text"/>
                  <l-input v-model="form.message" placeholder="Email" textarea/>
                  <div class="d-flex justify-content-between align-items-center">
                    <l-button rounded value="Envoyer !" class="mt-5"/>
                  </div>
                </form>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <section class="container vh-100 d-flex align-items-center" id="contact">
      <div class="w-100">
        <l-typography class="text-center" h2 medium >Available only for this format</l-typography>
        <div class="d-flex justify-content-around mt-5">
          <l-fab back-color="#176286" size="60">Json</l-fab>
        </div>
      </div>
    </section>
    <l-footer/>
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

export default {
  components: {
    LSelect,
    LFab,
    LInput,
    LCard,
    LTypography,
    LFooter,
    LModal,
    LButton,
    Typography,
    UploadBox,
    Navbar
  },
  data() {
    return {
      form: {
        pseudo: '',
        email: '',
        message: ''
      },
      loading: false,
      email: '',
      modal: false,
      file: null,
      source: 'en',
      target: 'fr',
      countries_code: []
    }
  },
  methods: {
    upload() {
      let formData = new FormData();
      formData.append('filemail', this.email)
      formData.append('filename', this.file.name)
      formData.append('file', this.file)
      formData.append('type', (/[.]/.exec(this.file.name)) ? /[^.]+$/.exec(this.file.name) : undefined)
      file_request.postFile(formData).then(r => {
        alert('transfert réussie')
      }).catch(e => {
        alert("transfert echoué")
      })
    },
    getCountriesCode() {
      google_request.getCountriesSupport().then(r =>{
        this.countries_code = r.data.countries_code
      })
    },
    submitFormContact() {

    },
    submitForm(e) {
      e.preventDefault()
      this.loading = true
      this.upload()
    }
  },
  computed: {
    getMenu() {
      if (this.$token) return [{libel: "Accueil", link: '/'}, {libel: "Traduction", link: '/translator-area/list-trad'}, {libel: 'Profile', link: '/translator-area/profile/', active: true}]
      else return [{libel: 'Sign Up' , link: '/auth/subscribe'}, {libel: 'Login', link: '/auth/login', active: true}]
    },
  },
  mounted() {
    this.getCountriesCode()
  }
}
</script>

<style lang="scss" scoped>
.button-landing {
  margin-top: 3rem;
  border: none;
  width: 250px;
  height: 60px;
  background: #D60000;
  box-shadow: -3px 5px 15px rgba(191, 63, 63, 0.45);
  border-radius: 42px;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: white;
}
.wrapper-left {
  margin-left: 17em;
}
.button-landing:focus {
  border: none;
  outline: none;
}
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
  li {
    list-style: none;
  }
</style>
