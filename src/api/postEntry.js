import ora from 'ora'
import clockifyApi from './clockifyApi'

export default clockifyEntry => {
  const { CLOCKIFY_WORKSPACE_ID } = process.env
  const spinner = ora(clockifyEntry.description).start()
  return clockifyApi.post(
    `/workspaces/${CLOCKIFY_WORKSPACE_ID}/time-entries`,
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
