<template>
  <div class="card-item">
    <div class="ml-5">
      <l-typography h4 bold class="mb-1">{{ item.fileMail }}</l-typography>
      <div class="d-flex">
        <l-typography class="text-muted" h5>{{ item.fileName }}</l-typography>
        <div v-if="status" class="ml-3 d-flex status">
          <l-typography class="mr-2" color="#a2a2a2">{{ item.state === 'warning' ? 'finie' : 'Pas finie' }}</l-typography>
          <div class="dot" :class="[{
          'bg-danger': item.state === 'noTranslate',
          'bg-warning': item.state === 'running',
          'bg-success': item.state === 'warning',
        }]"></div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center">
        <slot name="btn" />
    </div>
  </div>
</template>

<script>
    import LButton from "../base/button";
    import LTypography from "../base/typography";
    export default {
        name: "l-card-trad-item",
        props: {
          item: Object,
          status: Boolean
        },
        components: {LTypography, LButton}
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
  .dot {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    display: inline-block;
  }
</style>
