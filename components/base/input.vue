<template>
  <div class="mb-2 input-group">
    <textarea v-if="textarea" :placeholder="placeholder" rows="4" :value="value"
              @input="$emit('input',$event.target.value)"/>
    <input v-else :value="value" :type="type" autocomplete="off" :placeholder="placeholder" @input="$emit('input',$event.target.value)"/>
  </div>
</template>

<script>
    export default {
        name: "l-input",
      props: {
        placeholder: String,
        type: String,
        textarea: Boolean,
        value : { type: String , required: false, default: ''},
      },
      data() {
          return {
            model: ''
          }
      },
      watch: {
        value: function (newVal) {
          this.model = newVal
        }
      }
    }
</script>

<style lang="scss" scoped>
  .input {
    width: 100%;
    border: none;
    border-bottom: solid 1px #A6A6A6;
    padding-left: 20px;
    font-family: "Helvetica Neue", 'sans-serif';
    font-weight: 500;
    font-size: 20px;
  }
  .input::placeholder{
    font-family: "Helvetica Neue", 'sans-serif';
    font-weight: 500;
    font-size: 20px;
    color: #A6A6A6
  }
  .input:focus {
    outline: none;
  }
  .input-group {
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
    border: 0;
    border-radius: 0.25rem;
    transition: all 0.15s ease;
    input, textarea {
      position: relative;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      margin-bottom: 0;
      display: block;
      width: 100%;
      //height: calc(2.75rem + 2px);
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
