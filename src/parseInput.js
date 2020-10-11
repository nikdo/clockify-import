import config from '../config.json'
import transformEntry from './transformEntry'

export default toggleReportJson => toggleReportJson.data.map(transformEntry(config))
