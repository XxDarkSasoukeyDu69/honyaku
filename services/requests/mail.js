import axios from 'axios'
import {baseUrl, token} from "./config";

export default {
  sendEmailContact: form => {
    return axios.post(baseUrl+'/api/mail/sender', form, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
}
