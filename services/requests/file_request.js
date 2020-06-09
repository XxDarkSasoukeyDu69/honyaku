import axios from 'axios'
import {baseUrl, token} from './config'

export default {
  getAllFileNoTranslate() {
    return axios.get( baseUrl + '/api/getNoTranslateFiles', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
  },
  getFile: file_id => {
    return axios.get( baseUrl + '/api/getFile/' + file_id, {
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
     }
    })
  },
  postFile: form_data => {
    return axios.post( baseUrl + '/api/file', form_data, {
      Accept: 'application/json',
      'content-type': 'multipart/form-data',
    })
  },
  setStatusRunning: id_file => {
    return axios.put(baseUrl + '/api/setRunningTranslate/'+ id_file, {}, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
  },
  postTranslate: json_string => {
    return axios.put( baseUrl + '/api/update', {
      json_string : json_string
    }, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
  },
  getMyEffectedTranslation: () => {
    return axios.get( baseUrl + '/api/file/getMyEffectedTranslation', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
  },
  getMyRunningTranslation: () => {
    return axios.get(baseUrl + '/api/file/getMyRunningTranslation', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
  },
  updateTranslation: (trad_id, form_data) => {
    return axios.post( baseUrl + '/api/file/updateTranslation/' + trad_id, form_data, {
      headers: {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    })
  }
}
