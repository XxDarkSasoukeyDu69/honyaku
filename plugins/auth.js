import {baseUrl} from '../services/requests/config'

export default ({app}, inject) => {
  inject('token', localStorage.getItem('access_token'))
  inject('baseURL', baseUrl)
  inject('myUser', JSON.parse(localStorage.getItem('user')))
}
