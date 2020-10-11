import config from '../config.json'
import transformEntry from './transformEntry'

export default togglReport => togglReport.data.map(transformEntry(config))
