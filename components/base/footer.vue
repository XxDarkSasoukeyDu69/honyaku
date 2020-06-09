<template>
    <div class="footer">
      <div class="container mb-5 pb-5" style="margin-top: 300px">
        <b-row>
          <b-col lg="6">
            <l-typography h3 color="#D60000">Thank you for supporting us!</l-typography>
            <l-typography h3>Let's get in touch on any of these platforms.</l-typography>
          </b-col>
          <b-col lg="6">

          </b-col>
        </b-row>
        <hr style="position:relative;" class="mt-5 mb-5">
        <b-row>
          <b-col lg="6">
            <l-typography>&copy; 2020 <span style="color: #D60000">Alexandre Cailler</span></l-typography>
          </b-col>
          <b-col lg="6">
            <ul class="float-right">
              <li class="d-inline-block pl-3"><l-typography class="text-muted" to="/contact">Contact</l-typography></li>
              <li class="d-inline-block pl-3"><l-typography class="text-muted" to="/about">About me</l-typography></li>
              <li class="d-inline-block pl-3"><l-typography class="text-muted" to="/cookie">Cookie</l-typography></li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
    import LTypography from "./typography";
    export default {
        name: "l-footer",
      components: {LTypography}
    }
</script>

<style scoped>
  .footer {
    position: relative;
    padding-top: 500px;
    margin-top: -420px;
    overflow: hidden;
    background: transparent;
  }
  .footer:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 600px;
    height: 2000px;
    background: #f4f5f7;
    -webkit-transform: skew(0, -8deg);
    transform: skew(0, -8deg);
  }
</style>
