import axios from 'axios'

const {
  TOGGL_TOKEN,
  TOGGL_USER_AGENT,
  TOGGL_REPORTS_BASE_URL,
  TOGGL_WORKSPACE_ID,
  TOGGL_CLIENT_ID
} = process.env

const api = axios.create({
  baseURL: TOGGL_REPORTS_BASE_URL,
  auth: {
    username: TOGGL_TOKEN,
    password: 'api_token'
  },
  params: {
    workspace_id: TOGGL_WORKSPACE_ID,
    user_agent: TOGGL_USER_AGENT,
    client_ids: TOGGL_CLIENT_ID
  }
})

export default api
