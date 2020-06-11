<template>
  <div>
    <l-section-header title="Détails de l'achat"/>
    <div class="container d-flex align-items-center front-to-overlay " style="height: 50vh">
      <div>
        <div class="mb-5">
          <l-typography h3>
            Paiements de 1.99 euros pour une traduction automatique.
          </l-typography>
          <nuxt-link to="/billing-info">Politique de vente</nuxt-link>
        </div>
        <b-row>
          <b-col lg="6" md="6" sm="6" class="align-items-center d-flex justify-content-between mb-4">
            <div class="d-flex align-items-center billingInfo-rounded ">
              <div class="d-flex">
                <flag :iso="billingFile.source" class="mr-2"/>
                <l-typography bold>{{billingFile.source}}</l-typography>
              </div>
              <font-awesome-icon icon="arrow-right" class="ml-5 mr-5"/>
              <div class="d-flex">
                <flag :iso="billingFile.target" class="mr-2"/>
                <l-typography bold>{{billingFile.target}}</l-typography>
              </div>
            </div>
            <div>
              <l-typography bold color="#404040"> {{ billingFile.filename }}</l-typography>
            </div>
          </b-col>
          <b-col lg="6" md="6" sm="6" class="mb-4">
            <l-input v-model="form.name" placeholder="Nom"/>
          </b-col>
          <b-col lg="6" md="6" sm="6" class="mb-4">
            <l-input v-model="form.email" placeholder="Email"/>
          </b-col>
          <b-col lg="6" md="6" sm="6" class="mb-4">
            <div ref="card"></div>
            <div id="card-errors" ref="errors" role="alert"></div>
          </b-col>
        </b-row>
        <l-button rounded @click="purchase">Purchase</l-button>
      </div>
    </div>
    <l-footer/>
  </div>
</template>

<script>
    import LTypography from "../../components/base/typography";
    import LButton from "../../components/base/button";
    import billing from "../../services/requests/billing";
    import LInput from "../../components/base/input";
    import LFooter from "../../components/base/footer";
    import LSectionHeader from "../../components/section/section-header";

    let stripe = Stripe('pk_test_51GrrvuA5V0shW7u3rwrOj8U3RQI3hrJL6Gyn9Ovyc7oMQjRWaRAennFlGmZwSoAzggDrn5OgVxF8oy3PeeL493re00WBk0IOgx'),
      elements = stripe.elements(),
      card = undefined;

    var style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#e5424d',
        ':focus': {
          color: '#303238',
        },
      },
    };

    export default {
      name: "index.vue",
      components: {LSectionHeader, LFooter, LInput, LButton, LTypography},
      data() {
        return {
          billingSecret: null,
          billingFile: [],
          file: null,
          form: {
            email: '',
            name: '',
          }
        }
      },
      mounted() {

        let billingFile = JSON.parse(localStorage.getItem('billingFile'))
        this.form.email = billingFile.email
        this.billingFile = billingFile
        this.file = this.urltoFile(billingFile.blobFile, billingFile.filename)

        billing.payement().then(r => {
          this.billingSecret = r.data
        })
        card = elements.create('card', {style: style});
        card.mount(this.$refs.card);
      },
      methods: {
        async stripeTokenHandler(token) {
          const response = await billing.payement(token.id)
          return response;
        },
        urltoFile(url, filename, mimeType){
          if(String(url).match(/^data:([^;]+);/) || ''){
            mimeType = mimeType || (url.match(/^data:([^;]+);/)||'')[1];
            return (fetch(url)
                .then(function(res){return res.arrayBuffer();})
                .then(function(buf){return new File([buf], filename, {type:mimeType});
                })
            );
          } else {
            return (fetch(url).then(r => {return []}))
          }
        },
        purchase() {
          let self = this;
          console.log(this.billingSecret.client_secret)
          const result =  stripe.confirmCardPayment(this.billingSecret.client_secret, {
            payment_method: {
              card: card,
              billing_details: {
                name: this.form.name,
              }
            }
          }).then(r => console.log(r)).catch(e => console.log(e))
        }
      }
    }
</script>

<style scoped>
  .billingInfo-rounded {
    background: #e2e2e296;
    padding: 7px 20px;
    border-radius: 42px;
  }

  .front-to-overlay {
    position: relative;
    z-index: 100;
  }

  .StripeElement {
    position: relative;
    flex: 1 1 auto;
    margin-bottom: 0;
    display: block;
    width: 100%;
    padding: 0.725rem 0.75rem;
    font-size: 1rem;
    line-height: 2.5;
    color: #8898aa;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #f1f1f1;
    border-radius: 0.25rem;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
</style>
