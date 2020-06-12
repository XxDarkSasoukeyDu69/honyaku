<template>
  <div @drop.prevent="addFileByDrop" @dragover.prevent class="upload" style="height: 100px;">
    <input id="upload-input" type="file" hidden accept="*.json" @change="addFile($event)"/>
    <label for="upload-input">
      <div style="color: #bdbdbd; font-weight: bold" class="text-center" v-if="!filename">
        Drag a file here or <span style="color: royalblue; font-weight: bold">Browse</span> for a file to upload.
      </div>
      <div v-else style="color: #5ebd53; font-weight: bold">
        <span style="color: royalblue; font-weight: bold">{{filename}}</span> à bien été ajouter
      </div>
    </label>
  </div>
</template>

<script>
    export default {
        name: "l-upload-box",
      data() {
          return {
            files: [],
            filename: null
          }
      },
      methods: {
        addFileByDrop(e) {
          let droppedFiles = e.dataTransfer.files;
          if(!droppedFiles) return;
          this.filename = e.dataTransfer.files[0].name
          this.$emit('change', e.dataTransfer.files[0])
        },
        addFile(e) {
          this.filename = e.target.files[0].name
          this.$emit('change', e.target.files[0])
        }
      }
    }
</script>

<style lang="scss" scoped>
  .upload {
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
    border: 0;
    border-radius: 0.25rem;
    transition: all 0.15s ease;
    label {
      height: 100%;
      position: relative;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.625rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #8898aa;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #f1f1f1;
      border-radius: 0.25rem;
      -webkit-box-shadow: none;
      box-shadow: none;
      -webkit-transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
</style>
