import input from './test/input.json'
import output from './test/output.json'
import config from './test/config'
import transformEntry from './transformEntry'

it('transforms entry', () => {
  expect(transformEntry(config)(input)).toEqual(output)
})

it('sets clockify project ID from config', () => {
  const projectIdConfig = {
    ...config,
    clockify: {
      ...config.clockify,
      project_id: 'xy42'
    }
  }
  expect(transformEntry(projectIdConfig)(input))
    .toHaveProperty('projectId', 'xy42')
})

it('keeps description', () => {
  const togglEntry = {
    ...input,
    description: 'Doing pushups'
  }
  expect(transformEntry(config)(togglEntry))
    .toHaveProperty('description', 'Doing pushups')
})

it('transforms billable', () => {
  const togglEntry = {
    ...input,
    is_billable: true
  }
  expect(transformEntry(config)(togglEntry))
    .toHaveProperty('billable', 'true')
})

it('transforms start time to UTC', () => {
  const togglEntry = {
    ...input,
    start: '2020-10-07T18:30:05+02:00'
  }
  expect(transformEntry(config)(togglEntry))
    .toHaveProperty('start', '2020-10-07T16:30:05.000Z')
})

it('transforms end time to UTC', () => {
  const togglEntry = {
    ...input,
    end: '2020-10-07T18:30:05+02:00'
  }
  expect(transformEntry(config)(togglEntry))
    .toHaveProperty('end', '2020-10-07T16:30:05.000Z')
})
