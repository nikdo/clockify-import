import jest from 'jest-mock'
import { getYesterdayInTimezone } from './resolveYesterday'

describe('getYesterdayInTimezone', () => {
  it('given 1AM at UTC returns day before in Berlin', () => {
    Date.now = jest.fn(() => new Date('2020-10-10T01:00:00Z').valueOf())
    expect(getYesterdayInTimezone('Europe/Berlin')).toEqual('2020-10-09')
  })

  it('given 1AM at UTC returns two days day before in LA', () => {
    Date.now = jest.fn(() => new Date('2020-10-10T01:00:00Z').valueOf())
    expect(getYesterdayInTimezone('America/Los_Angeles')).toEqual('2020-10-08')
  })
})
