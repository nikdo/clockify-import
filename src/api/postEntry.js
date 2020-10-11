import ora from 'ora'
import config from '../../config.json'
import clockifyApi from './clockifyApi'

export default clockifyEntry => {
  const spinner = ora(clockifyEntry.description).start()
  return clockifyApi.post(
    `/workspaces/${config.clockify.workspace_id}/time-entries`,
    clockifyEntry
  )
    .then(storedEntry => {
      spinner.succeed()
      return storedEntry.data
    })
    .catch(error => {
      spinner.fail(error.message)
      if (error.response) {
        console.log(error.response.data)
      }
      console.log(error.config)
    })
}
