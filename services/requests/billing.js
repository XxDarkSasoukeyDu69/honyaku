import {baseUrl, token} from "./config";
import axios from 'axios'

export default {
  payement: token_id => {
    return axios.post(baseUrl + '/api/billing/postPaymentIntent', {token: token_id},{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
}
