import transformEntry from './transformEntry'

export default toggleReportJson => toggleReportJson.data.map(transformEntry)