<template>
  <div style="background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;">
    <div class="container pt-5">
      <b-row class="h-100 align-self-center justify-content-center mt-5">
        <b-col :cols="12" lg="5">
          <div style="background: #f4f4f4; border-radius: 10px" class="pt-5 pb-5">
            <div class="text-center">
              <typography h1 value="Login" class="mb-4" bolder/>
              <div class="underline"></div>
            </div>
            <typography h5 style="text-align: center" class="mt-5 mr-5 ml-5" bold>Welcome to todoworld
              if you login you accept the <span style="color: royalblue">terms</span> and <span style="color: royalblue">condition</span>.</typography>
            <form @submit="submitForm" class="mr-5 ml-5">
              <l-input v-model="email" placeholder="Email" class="mb-4 mt-5" type="text"/>
              <l-input v-model="password" placeholder="Password" type="password"/>
              <div class="d-flex justify-content-between align-items-center">
                <l-button rounded value="Login !" :loading="loading" type="submit" class="mt-5"/>
              </div>
            </form>
          </div>
          <typography class="float-right mt-3" color="#cacaca" to="/auth/subscribe">Here for register</typography>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
    import Typography from "~/components/base/typography";
    import LButton from "~/components/base/button";
    import LInput from "~/components/base/input";
    import user from "~/services/requests/user";
    import LCard from "../../components/base/card";
    export default {
        name: "login",
        components: {LCard, LInput, LButton, Typography},
      data() {
        return {
          email: '',
          password: '',
          loading: false,
        }
      },
        methods: {
          submitForm(e) {
            e.preventDefault()
            this.loading = true
            user.login(this.email, this.password).then(r => {
              user.getUserInfo(r.data.access_token)
                .then(resp => {
                  localStorage.setItem('access_token', r.data.access_token)
                  localStorage.setItem('user', JSON.stringify(resp))
                  localStorage.setItem('GDPR:accepted', true)
                  this.$store.commit('updateUser', resp.data)
                  setTimeout( function() { window.location.href = '/translator-area/list-trad' }, 2000)
                }).catch(e => alert('Une erreur c\'est produite'));
            })
          }
        },mounted() {
          console.log(this.email, this.password)
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
