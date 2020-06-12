<template>
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
                <l-input v-model="form.pseudo" placeholder="Pseudo/Entreprise" type="text" class="mt-5" required/>
                <l-input v-model="form.email" placeholder="Email" type="email" required/>
                <l-input v-model="form.message" placeholder="Message" textarea required/>
                <div class="d-flex justify-content-between align-items-center">
                  <l-button :loading="loading" rounded value="Envoyer !" class="mt-5"/>
                </div>
              </form>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
    import LTypography from "../base/typography";
    import LInput from "../base/input";
    import LButton from "../base/button";
    import mail from "../../services/requests/mail";
    export default {
        name: "l-section-contact",
      components: {LButton, LInput, LTypography},
      data() {
          return {
            form: {
              pseudo: '',
              email: '',
              message: ''
            },
            loading: false
          }
      },
      methods: {
        submitFormContact(e) {
          e.preventDefault()
          this.loading = true
          mail.sendEmailContact(this.form).then(r => {
            Object.keys(this.form).map(key => { this.form[key] = ""})
          }).catch(e => {
            this.loading = false
          })
        },
      }
    }
</script>

<style scoped>
  .skewWrapper {
    position: relative;
    overflow: hidden;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
</style>
