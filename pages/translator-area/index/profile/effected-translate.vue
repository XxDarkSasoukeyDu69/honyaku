<template>
  <div class="container h-100">
    <l-typography class="pt-5" h2 bold>Vos traductions éffectués</l-typography>
    <b-row v-if="files">
      <b-col lg="8" v-for="(file, key) in files" :key="key++">
        <div class="card-item">
          <div class="ml-5">
            <l-typography h4 bold class="mb-1">{{ file.filemail }}</l-typography>
            <l-typography class="text-muted" h5>{{ file.filename }}  10 Phrases</l-typography>
          </div>
        </div>
      </b-col>
    </b-row>
    <div v-else class="h-100 d-flex align-items-center justify-content-center">
      <l-typography h3 color="#cacaca">Il n'y a pas de fichier à traduire pour le moment</l-typography>
    </div>
  </div>
</template>

<script>
    import LTypography from "~/components/base/typography";
    import file_request from "~/services/requests/file_request";
    import LButton from "~/components/base/button";
    export default {
      name: "effected-translate",
      components: {LButton, LTypography},
      data() {
        return {
          files: null
        }
      },
      methods: {
        getTranslation() {
          file_request.getMyEffectedTranslation()
            .then(r => {
              this.files = r.data.files
            })
        }
      },
      mounted() {
        this.getTranslation()
      }
    }
</script>

<style scoped>

</style>
