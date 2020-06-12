<template>
  <div style="background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;">
    <div class="container pt-5">
      <b-row class="h-100 align-self-center justify-content-center mt-5">
        <b-col :cols="12" lg="5">
          <div style="background: #f4f4f4; border-radius: 10px" class="pt-5 pb-5">
            <div class="text-center">
               <l-typography h1 value="Subscribe" class="mb-4" bolder/>
                <div class="underline"></div>
            </div>
            <l-typography h5 style="text-align: center" class="mt-5 mr-5 ml-5" bold>Welcome to todoworld
              if you register you accept the <nuxt-link to="/cookie" style="color: royalblue">terms</nuxt-link> and <nuxt-link to="/cookie" style="color: royalblue">condition</nuxt-link>.</l-typography>
            <form @submit="submitForm" class="mr-5 ml-5">
              <l-input placeholder="Pseudo" class="mb-4 mt-5" type="text" v-model="formInfo.pseudo"/>
              <l-input placeholder="Email" class="mb-4" type="text" v-model="formInfo.email"/>
              <l-input placeholder="Password" type="password" v-model="formInfo.password"/>
              <div class="d-flex justify-content-between align-items-center">
                <l-button rounded value="Register !" type="submit" :loading="loading" class="mt-5"/>
              </div>
            </form>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <l-typography class="float-right mt-3" color="#cacaca" to="/">Retour Accueil</l-typography>
            <l-typography class="float-right mt-3" color="#cacaca" to="/auth/login">Always an account</l-typography>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
    import LButton from "../../components/base/button";
    import LInput from "../../components/base/input";
    import LTypography from "../../components/base/typography";
    import user from "../../services/requests/user";
    export default {
      name: "subscribe",
      components: {LTypography, LInput, LButton},
      data() {
          return {
            loading: false,
            formInfo: {
              pseudo: '',
              email: '',
              password: ''
            }
          }
      },
      methods: {
        submitForm(e) {
          e.preventDefault()
          this.loading = true
          user.register(this.formInfo).then(r => {
            localStorage.setItem('access_token', r.data.access_token)
            user.getUserInfo(r.data.access_token)
              .then(resp => {
                localStorage.setItem('user', JSON.stringify(resp.data))
                localStorage.setItem('GDPR:accepted', true)
                this.$store.commit('updateUser', resp.data)
                setTimeout( function() { window.location.href = '/translator-area/list-trad' }, 2000)
              })
          }).catch(e => {
            this.loading = false
            alert('Une erreur c\'est produite')
          });
        }
      }
    }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    align-items: center;
  }
  .underline {
    height: 5px;
    border-radius: 50px;
    width: calc(100% / 2);
    background: #D60000;
    margin: auto;
  }
</style>
