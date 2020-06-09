<template>
    <div class="nav-p nav-top mt-5 mb-5">
      <div class="container-fluid d-flex justify-content-between">
        <l-typography class="ml-5" bolder h4>Honyaku</l-typography>
        <div class="d-flex mr-5">
          <div v-for="(item, key) in items" :key="key" class="item-menu" :ref="item.link" :class="[{active: item.active}]" @click="navigate(item.link)" >
            <span>{{ item.libel }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import LTypography from "./typography";
    export default {
      name: "l-navbar",
      components: {LTypography},
      props: {
        items: Array,
        required: true
      },
      methods: {
        navigate(itemLink) {
          this.setActive(itemLink)
          this.$router.push(itemLink)
        },
        setActive(itemLink) {
          if (!document.getElementsByClassName('nav-p')[0].querySelector('.active')) return;
          document.getElementsByClassName('nav-p')[0].querySelector('.active').classList.remove('active')
          if (!this.$refs[itemLink]) return;
          this.$refs[itemLink][0].classList.add('active')
        }
      },
      mounted() {
        this.setActive(this.$route.path)
      }
    }
</script>

<style lang="scss" scoped>
  .nav-p {
    right: 0;
    top: 0;
    width: 100%;
    position: absolute;
    z-index: 10;
  }
  .nav-top {
    .item-menu {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 136px;
      height: 42px;
      span {
        font-size: 20px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        color: #000000;
      }
    }
    .active {
      background: #D60000;
      border-radius: 32px;
      box-shadow: -3px 5px 15px rgba(191, 63, 63, 0.45);
      span {
        color: white;
      }
    }
  }


</style>
