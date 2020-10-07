import dotenv from 'dotenv'
import program from 'commander'
import { readFile } from 'fs/promises'
import parseInput from './parseInput'

dotenv.config()

program
    .version('1.0.0')
    .usage('<filename>')
    .arguments('<filename>')
    .action(filename => {
        readFile(filename)
            .then(data => JSON.parse(data))
            .then(json => parseInput(json))
            .then(parsed => process.stdout.write(JSON.stringify(parsed, null, '  ')))
            .catch(e => console.error(e))
    })
    .parse(process.argv)