import axios from 'axios'
import config from '../../config.json'

const {
  TOGGL_TOKEN,
  TOGGL_USER_AGENT,
  TOGGL_REPORTS_BASE_URL
} = process.env

const { toggl } = config

export default axios.create({
  baseURL: TOGGL_REPORTS_BASE_URL,
  auth: {
    username: TOGGL_TOKEN,
    password: 'api_token'
  },
  params: {
    user_agent: TOGGL_USER_AGENT,
    workspace_id: toggl.workspace_id,
    project_ids: toggl.project_id
  }
})
