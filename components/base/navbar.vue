<template>
  <div>
    <b-navbar toggleable="lg"  class="nav-top nav-p">
      <b-navbar-brand to="/"><l-typography class="ml-5" bolder h4>Honyaku</l-typography></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" style="border: none">
        <template v-slot:default="{ expanded }">
          <burger v-model="expanded"/>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-for="(item, key) in items" :key="key">
            <div class="item-menu" @click="navigate(item.link)" :ref="item.link" :class="[{
              active: item.active}]">
              <span>{{ item.libel }}</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    import LTypography from "./typography";
    import Burger from "./burger";
    export default {
      name: "l-navbar",
      components: {Burger, LTypography},
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
          if (!document.getElementsByClassName('nav-top')[0].querySelector('.active')) return;
          document.getElementsByClassName('nav-top')[0].querySelector('.active').classList.remove('active')
          if (!this.$refs[itemLink]) return;
          this.$refs[itemLink][0].classList.add('active')
        },
      },
      mounted() {
        this.setActive(this.$route.path)
        this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
        })
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

  .burger {
    display: none;
  }

  @media (max-width: 749px) {
    .burger {
      display: block;
    }
  }

</style>
