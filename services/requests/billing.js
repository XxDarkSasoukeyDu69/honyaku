import {baseUrl, token} from "./config";
import axios from 'axios'

export default {
  payment: file_id => {
    return axios.post(baseUrl + '/api/billing/postPaymentIntent',{file_id: file_id},{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  },
  insertBilling: form_data => {
    return axios.post(baseUrl + '/api/billing/insertBilling', form_data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  },
  successPayment: file_id => {
    return axios.post(baseUrl + '/api/billing/success', {file_id: file_id}, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
}
