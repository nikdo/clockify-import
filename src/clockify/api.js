import axios from 'axios'
import interceptors from '../interceptors'

const {
  CLOCKIFY_API_KEY,
  CLOCKIFY_BASE_URL
} = process.env

const api = axios.create({
  baseURL: CLOCKIFY_BASE_URL,
  headers: {
    'X-Api-Key': CLOCKIFY_API_KEY
  }
})

interceptors.apply(api)

export default api
