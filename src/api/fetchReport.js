import ora from 'ora'
import togglApi from './togglApi'

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
    .catch(e => {
      spinner.fail(e.message)
    })
}
