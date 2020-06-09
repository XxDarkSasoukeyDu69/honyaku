<template>
  <div class="modal-p" id="modal-p">
    <slot/>
  </div>
</template>

<script>
    export default {
        name: "l-modal",
      props: {
        value : { type: Boolean , required: false, default: false},
      },
      methods: {
        openModal() {
          document.getElementById('modal-p').style.visibility = 'visible';
          document.getElementById('modal-p').style.clipPath = 'circle(75%)';
          document.getElementById('modal-p').style.background =  'linear-gradient(270deg, #172b4d 0%, #1a174d 100%)';
        },
        closeModal() {
          document.getElementById('modal-p').style.clipPath = 'circle(0% at 90% 20%)';
          document.getElementById('modal-p').style.background =  'linear-gradient(270deg, #172b4d 0%, #1a174d 100%)';
          //document.getElementById('modal-p').style.visibility = 'hidden';
        },
      },
      watch: {
          value: function (newVal) {
            if(newVal === true) this.openModal()
            else this.closeModal()
          }
      }
    }
</script>

<style lang="scss" scoped>
  .modal-p {
    visibility: hidden;
    padding: 1em;
    width: 100vW;
    height: 100vh;
    clip-path: circle(10% at 90% 20%);
    transition: all .5s ease-in-out;
    cursor: pointer;
    position: absolute;
    z-index: 122;
    h1 {
      color: white;
      margin: 0;
    }

    p {
      color: white;
      font-size: .8rem;
    }
    button {
      float: right;
      color: white;
      font-weight: bold;
      transition: color .5s;
      position: relative;
      margin-right: 4%;
    }
  }
</style>
