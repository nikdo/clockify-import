import rxjs from 'rxjs'
import operators from 'rxjs/operators'
import postEntry from './postEntry'

const { from, of } = rxjs
const { concatMap, delay } = operators

const rateLimit = 1.1 * 1000 / 10

export default clockifyEntries => {
    from(clockifyEntries)
        .pipe(concatMap(entry =>
            of(postEntry(entry)).pipe(delay(rateLimit))
        ))
        .subscribe()
}
