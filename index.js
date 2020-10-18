import program from 'commander'
import { readFile } from 'fs/promises'
import parseDate from './src/parseDate'
import fetchReport from './src/toggl/fetchReport'
import pushEntries from './src/clockify/pushEntries'
import parseEntries from './src/parseEntries'

const description =
`Imports Toggl tasks into Clockify.

Specify dates in absolute or relative formats:
2020-10-10, yesterday, friday, "last wed"`

program
  .version('1.0.0')
  .usage('command')
  .description(description)

program
  .command('sync [date]')
  .description('sync time entries')
  .action(date => {
    parseDate(date)
      .then(fetchReport)
      .then(parseEntries)
      .then(pushEntries)
      .catch(console.error)
  })

program
  .command('fetch [date]')
  .description('fetch time entries from Toggl')
  .action(date => {
    parseDate(date)
      .then(fetchReport)
      .then(report => console.log(JSON.stringify(report, undefined, '  ')))
      .catch(console.error)
  })

program
  .command('push <filename>')
  .description('push time entries from toggle report file to Clockify')
  .action(filename => {
    readFile(filename)
      .then(data => JSON.parse(data))
      .then(parseEntries)
      .then(pushEntries)
      .catch(console.error)
  })

program.parse(process.argv)
