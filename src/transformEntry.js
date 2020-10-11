import moment from 'moment'
import config from '../config.json'
import getTaskId from './getTaskId'

// eslint-disable-next-line camelcase
export default ({ description, is_billable, start, end, tags }) => ({
  projectId: config.clockify.project_id,
  description,
  billable: is_billable.toString(),
  start: moment(start).toISOString(),
  end: moment(end).toISOString(),
  taskId: getTaskId(tags)
})
