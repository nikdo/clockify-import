import axios from 'axios'
import config from '../../config.json'
import interceptors from '../interceptors'

const {
  TOGGL_TOKEN,
  TOGGL_USER_AGENT,
  TOGGL_BASE_URL,
  TOGGL_REPORTS_BASE_URL
} = process.env

const apiConfig = {
  auth: {
    username: TOGGL_TOKEN,
    password: 'api_token'
  },
  params: {
    user_agent: TOGGL_USER_AGENT,
    workspace_id: config.toggl.workspace_id,
    project_ids: config.toggl.project_id
  }
}

export const togglApi = axios.create({
  baseURL: TOGGL_BASE_URL,
  ...apiConfig
})

interceptors.apply(togglApi)

export const reportsApi = axios.create({
  baseURL: TOGGL_REPORTS_BASE_URL,
  ...apiConfig
})

interceptors.apply(reportsApi)
