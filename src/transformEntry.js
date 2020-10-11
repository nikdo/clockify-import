import moment from 'moment'
import getTaskId from './getTaskId'

// eslint-disable-next-line camelcase
export default config => ({ description, is_billable, start, end, tags }) => ({
  projectId: config.clockify.project_id,
  description,
  billable: is_billable.toString(),
  start: moment(start).toISOString(),
  end: moment(end).toISOString(),
  taskId: getTaskId(config)(tags)
})
