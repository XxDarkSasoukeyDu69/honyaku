<template>
    <div class="container h-100">
      <l-typography h2 bolder class="mb-5 mt-5">Retrouver ici, l'enssemble des text à traduire</l-typography>
      <b-row v-if="files === null || files.length > 0" class="h-100">
        <b-col lg="8" v-for="(file, key) in files" :key="key++">
          <div class="card-item">
            <div class="ml-5">
              <l-typography h4 bold class="mb-1">{{ file.fileMail }}</l-typography>
              <l-typography class="text-muted" h5>{{ file.fileName }}  10 Phrases</l-typography>
            </div>
            <l-button rounded class="mr-5" @click="navToTranslate(file.id)">GO</l-button>
          </div>
        </b-col>
      </b-row>
      <div v-else class="h-100 d-flex align-items-center justify-content-center">
        <l-typography h3 color="#cacaca">Il n'y a pas de fichier à traduire pour le moment</l-typography>
      </div>
    </div>
</template>

<script>
    import file_request from "../../../../services/requests/file_request";
    import LTypography from "../../../../components/base/typography";
    import LButton from "../../../../components/base/button";

    export default {
        name: "index",
      components: {LButton, LTypography},
      data() {
        return {
          files: null,
        }
      },
      methods: {
        navToTranslate(idFile) {
          file_request.setStatusRunning(idFile).then(r => {
            this.$router.push('/translator-area/traduction/' + idFile)
          })
        }
      },
      mounted() {
        file_request.getAllFileNoTranslate().then(r => {
          this.files = r.data.files
        })
      }
    }
</script>

<style scoped>
  .card-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 114px;
    left: 681px;
    top: 1162px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(216, 191, 191, 0.25);
    border-radius: 92px;
  }
</style>
