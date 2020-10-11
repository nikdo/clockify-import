import program from 'commander'
import { readFile } from 'fs/promises'
import fetchReport from './src/api/fetchReport'
import pushEntries from './src/api/pushEntries'
import parseEntries from './src/parseEntries'

program
  .version('1.0.0')
  .usage('command')
  .description('Imports Toggl tasks into Clockify.')

program
  .command('sync <date>')
  .description('sync time entries')
  .action(date => {
    fetchReport(date)
      .then(parseEntries)
      .then(pushEntries)
      .catch(console.error)
  })

program
  .command('fetch <date>')
  .description('fetch time entries from Toggl')
  .action(date => {
    fetchReport(date)
      .then(report => console.log(JSON.stringify(report, undefined, '  ')))
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
