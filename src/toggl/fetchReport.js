import ora from 'ora'
import { reportsApi } from './api'

export default (date) => {
  const spinner = ora(`Fetching time entries on ${date}`).start()
  return reportsApi.get('/details', {
    params: {
      since: date,
      until: date,
      billable: true
    }
  })
    .then(data => {
      spinner.succeed()
      return data
    })
    .catch(error => {
      spinner.fail(error.message)
    })
}
