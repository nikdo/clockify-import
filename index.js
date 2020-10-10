import dotenv from 'dotenv'
import program from 'commander'
import { readFile } from 'fs/promises'
import parseInput from './src/parseInput'
import pushEntries from './src/pushEntries'

dotenv.config()

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
  .command('fetch [date]')
  .description('fetch time entries from Toggl')
  .action(date => {
    if (date) {
      console.log(date)
    } else {
      console.log('today')
    }
  })

program.parse(process.argv)
