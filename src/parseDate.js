import * as chrono from 'chrono-node'
import moment from 'moment-timezone'
import resolveYesterday from './toggl/resolveYesterday'

export default async inputDate => {
  if (inputDate) {
    const parsed = chrono.parseDate(inputDate)
    if (parsed) {
      return moment(parsed).format('YYYY-MM-DD')
    } else {
      throw new Error(`The specified date "${inputDate}" is not valid`)
    }
  } else {
    return await resolveYesterday()
  }
}
