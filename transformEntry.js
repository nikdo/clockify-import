import config from './config.json'
import moment from 'moment'
import getTaskId from './getTaskId'

export default ({ description, is_billable, start, end, tags }) => ({
    projectId: config.clockify.projectId,
    description,
    billable: is_billable.toString(),
    start: moment(start).toISOString(),
    end: moment(end).toISOString(),
    taskId: getTaskId(tags)
})