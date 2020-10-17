import moment from 'moment-timezone'
import fetchTimezone from './fetchTimezone'

export const getYesterdayInTimezone = timezone =>
  moment().subtract(1, 'days').tz(timezone).format('YYYY-MM-DD')

export default () => fetchTimezone()
  .then(timezone => getYesterdayInTimezone(timezone))
