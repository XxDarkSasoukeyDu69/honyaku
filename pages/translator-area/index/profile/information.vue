<template>
  <div class="container" v-if="user">
    <l-typography class="pt-5" h2 bold>Vos informations personnel</l-typography>
      <b-row class="mt-5">
        <b-col :cols="12" lg="6">
          <l-card>
            <l-card-body>
              <b-form class="pt-3 pb-3" @submit="updateInfo">
                <b-form-group
                  id="input-group-pseudo"
                  label="Email address"
                  label-for="input-pseudo"
                >
                  <l-input  type="text" v-model="form.pseudo" required id="input-pseudo"/>
                </b-form-group>
                <b-form-group
                  id="input-group-email"
                  label="Pseudo"
                  label-for="input-email"
                >
                  <l-input type="text" v-model="form.email" required id="input-email"/>
                </b-form-group>
                  <b-btn type="submit" variant="success">Enregistrer</b-btn>
              </b-form>
            </l-card-body>
          </l-card>
        </b-col>
      </b-row>
  </div>
</template>

<script>

  import { mapState } from 'vuex';

    import LTypography from "../../../../components/base/typography";
  import LCard from "../../../../components/base/card";
  import LCardBody from "../../../../components/base/card-body";
  import user from "../../../../services/requests/user";
  import LInput from "../../../../components/base/input";
    export default {
        name: "information",
      components: {LInput, LCardBody, LCard, LTypography},
      computed: {
        ...mapState(["user"]),
      },
      data() {
        return {
          form: {
            email: '',
            pseudo: ''
          }
        }
      },
      watch: {
        user: function (newVal) {
          this.form.email = newVal.email
          this.form.pseudo = newVal.pseudo
        }
      },
      methods: {
        updateInfo() {
          user.updateInfo(this.form, this.user.id)
        }
      }
    }
</script>

<style scoped>

</style>
