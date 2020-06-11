<template>
    <div>
      <l-section-header
        title="Condition général de vente"
      />
      <div class="container">
        <l-paragraph title="1. COMMENT COMMANDER" :texts="[

        ]"/>
        <l-paragraph title="6. COMMANDE 2-CLICK" :texts="[
          'La commande en 2-Click est la façon la plus rapide et la plus simple pour commander des produits en toute sécurité sur le site.'
        ]"/>
      </div>
      <l-footer/>
    </div>
</template>

<script>
    import LFooter from "~/components/base/footer";
    import LParagraph from "../../components/base/paragraph";
    import LSectionHeader from "../../components/section/section-header";
    export default {
      name: "index",
      components: {LSectionHeader, LParagraph, LFooter}
    }
</script>

<style scoped>

</style>
