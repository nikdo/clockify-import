import program from 'commander'
import { readFile } from 'fs/promises'
import parseInput from './src/parseInput'
import pushEntries from './src/pushEntries'
import fetchReport from './src/api/fetchReport'

program
  .version('1.0.0')
  .usage('command')
  .description('Imports Toggl tasks into Clockify.')

program
  .command('push <filename>')
  .description('push time entries from file to Clockify')
  .action(filename => {
    readFile(filename)
      .then(data => JSON.parse(data))
      .then(json => parseInput(json))
      .then(entries => pushEntries(entries))
      .catch(e => console.error(e))
  })

program
  .command('fetch <date>')
  .description('fetch time entries from Toggl')
  .action(date => {
    fetchReport(date)
      .then(entries => console.log(JSON.stringify(entries, undefined, '  ')))
  })

program.parse(process.argv)
