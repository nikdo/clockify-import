import ora from 'ora'
import { togglApi } from './api'

export default () => {
  const spinner = ora('Fetching Toggl timezone').start()
  return togglApi.get('/me')
    .then(res => res.data.timezone)
    .then(timezone => {
      spinner.succeed()
      return timezone
    })
    .catch(error => {
      spinner.fail(error.message)
    })
}
