<template>
  <div :class="[{'d-flex': inline}]">
    <l-typography medium class="mb-1 mt-2">{{label}}</l-typography>
    <div class="input-group">
        <div class="select item"
             @click="toggleDropDown"
             v-click-outside="closeDropDown">
          <div class="d-flex justify-content-between align-items-center">
            <div class="active_libel" ref="active_libel"><flag :iso="value" class="mr-3"/>{{ value }}</div>
            <font-awesome-icon icon="chevron-down" style="" class="text-muted"/>
          </div>
        </div>
        <div class="option item" ref="option">
          <div class="option_item" v-for="(item, key) in items" :key="key" :value="key" @click="$emit('input', item.libel || item.language)">
            <flag :iso="item.libel || item.language" class="mr-3"/>{{ item.libel || item.language }}</div>
        </div>
    </div>
  </div>
</template>

<script>
    import LTypography from "./typography";
    export default {
      components: {LTypography},
      props: {
          label: String,
          inline: Boolean,
          items: Array,
          countryFlag: Boolean,
          value: String
        },
      name: "l-select",
      methods: {
          toggleDropDown() {
            this.$refs.active_libel.style.visibility = 'hidden'
            this.$refs.option.style.visibility = 'visible'
          },
          closeDropDown() {
            this.$refs.active_libel.style.visibility = 'visible'
            this.$refs.option.style.visibility = 'hidden'
          }
      }
    }
</script>

<style lang="scss" scoped>
  .input-group {
    position: relative;
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
    border: 0;
    border-radius: 0.25rem;
    transition: all 0.15s ease;
    .select {
      position: relative;
      padding: 0.625rem 0.75rem;
    }
    .item {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      margin-bottom: 0;
      display: block;
      width: 100%;
      height: calc(2.75rem + 2px);
      font-size: 1rem;
      line-height: 1.5;
      color: #8898aa;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #f1f1f1;
      border-radius: 0.25rem;
      -webkit-transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  .option_item {
    padding: 0.625rem 0.75rem;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .option_item:hover {
    background: #D60000;
    color: white;
    position: relative;
  }
  .option {
    position: absolute!important;
    width: 100%;
    z-index: 100;
    overflow-y: auto;
    min-height: 200px;
    max-height: 200px;
    box-shadow: 0px 0px 20px #e4e2e2;
  }
</style>
