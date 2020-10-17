import ora from 'ora'
import config from '../../config.json'
import clockifyApi from './api'

export default clockifyEntry => {
  const spinner = ora(clockifyEntry.description).start()
  return clockifyApi.post(
    `/workspaces/${config.clockify.workspace_id}/time-entries`,
    clockifyEntry
  )
    .then(storedEntry => {
      spinner.succeed()
      return storedEntry
    })
    .catch(error => {
      spinner.fail(error.message)
    })
}
