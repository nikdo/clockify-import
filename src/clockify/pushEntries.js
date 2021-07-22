import rxjs from 'rxjs'
import operators from 'rxjs/operators'
import postEntry from './postEntry'

const { from, of } = rxjs
const { concatMap, delay } = operators

const rateLimit = 2 * 1000 / 10

export default clockifyEntries => {
  if (clockifyEntries.length) {
    console.log(`Pushing ${clockifyEntries.length} entries to Clockify:`)
  } else {
    console.log('No entries to import.')
  }
  from(clockifyEntries)
    .pipe(concatMap(entry =>
      of(postEntry(entry)).pipe(delay(rateLimit))
    ))
    .subscribe()
}
