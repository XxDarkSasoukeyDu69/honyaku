<template>
    <div>
      <l-section-header title="Politique de confidentialité"/>
      <div class="container mt-5 pt-5 mb-5 pb-5">
        <l-paragraph title="Qui sommes nous ?" :texts="[
          'L\'adresse de notre site web est : https://honyaku.fr.'
        ]"/>
        <l-paragraph title="Fichiers" :texts="[
          'Au sein de cette plateforme il vous ai possible de poster des fichiers de type JSON au format i18n, ces fichiers seront enregistrer dans notre base de données, leur contenue sera supprimer une fois la traduction effectuer. Dans le cas ou aucune traduction est effectuer, le fichier sera supprimer au bout d\'une durée de 30 jours.',
          'Lors de l\'enregistrement d\'un fichier de type JSON au format i18n, vous renseignez un e-mail qui lui restera dans notre base de données d\'une durée indéterminer. Il sera supprimé sur demande, par le biais du formulaire de contact présent sur la page d\'accueil, https://honyku.fr/.',
          'Les fichiers que vous choisissez de faire traduire gratuitement, seront traduis par de tierce personnes volontaires. Ces tierces personne auront accès à votre mail ainsi qu\'au contenu de votre fichier.'
        ]"/>
        <l-paragraph title="Cookies" :texts="[
          'Le cookie est une suite d’informations, généralement de petite taille et identifié par un nom, qui peut-être transmis à votre navigateur par un site web sur lequel vous vous connectez. Votre navigateur web le conservera pendant une durée limité, et le renverra au serveur web chaque fois que vous vous y reconnecterez. Vous acceptez l\'utilisation des cookies dès lors que vous acceptez leurs usages en bas de l\'écran ou bien en vous inscrivant sur notre site. Nous utilisons les cookies pour relever le trafic sur notre plateforme.'
        ]"/>
        <l-paragraph title="Statistiques et mesures d'audience" :texts="[
         'Nous utilisons google annalytics pour enregistrer le trafic sur notre plateforme, dans le but de recueillir des statistiques globales sur nos utilisateurs, dans l\'unique cas où vous avez accepté l\'utilisation des cookies sur notre plateforme.'
        ]"/>
      </div>
      <l-footer />
    </div>
</template>

<script>
    import LFooter from "../../components/base/footer";
    import LParagraph from "../../components/base/paragraph";
    import LTypography from "../../components/base/typography";
    import LButton from "../../components/base/button";
    import LSectionHeader from "../../components/section/section-header";
    export default {
      name: "index",
      components: {LSectionHeader, LButton, LTypography, LParagraph, LFooter},
    }
</script>

<style scoped>

</style>
