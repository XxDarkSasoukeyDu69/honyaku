import {baseUrl, token} from "./config";
import axios from 'axios'

export default {
  getCountriesSupport: () => {
    return axios.get(baseUrl + '/api/google/language/support', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
}
