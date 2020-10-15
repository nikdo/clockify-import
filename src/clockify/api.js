import axios from 'axios'

const {
  CLOCKIFY_API_KEY,
  CLOCKIFY_BASE_URL
} = process.env

export default axios.create({
  baseURL: CLOCKIFY_BASE_URL,
  headers: {
    'X-Api-Key': CLOCKIFY_API_KEY
  }
})
