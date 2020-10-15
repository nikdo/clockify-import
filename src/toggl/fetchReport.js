import ora from 'ora'
import togglApi from './api'

export default (date) => {
  const spinner = ora(`Fetching time entries on ${date}`).start()
  return togglApi.get('/details', {
    params: {
      since: date,
      until: date,
      billable: true
    }
  })
    .then(parsedResponse => {
      spinner.succeed()
      return parsedResponse.data
    })
    .catch(error => {
      spinner.fail(error.message)
      if (error.response) {
        console.log(error.response.data)
      }
      console.log(error.config)
    })
}
