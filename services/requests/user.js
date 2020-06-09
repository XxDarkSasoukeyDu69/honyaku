import axios from 'axios'
import {baseUrl, token} from './config'

export default {
  getUserInfo: (paramsToken)  => {
    return axios.get(baseUrl + '/api/user', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${paramsToken || token}`,
      }
    })
  },
  register: (pseudo, email, password) => {
    return axios.post(baseUrl + '/api/register/' ,{
      pseudo: pseudo,
      email: email,
      password: password,
      password_confirmation: password,
    },{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  },
  login: (email, password) => {
    return axios.post(baseUrl + '/api/login', {
        email: email,
        password: password
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
  },
  updateInfo: (form, user_id) => {
    return axios.put( baseUrl + '/api/user/update/' + user_id, form, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
  }
}
