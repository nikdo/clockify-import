import sinon from 'sinon'
import input from './input.json'
import output from './output.json'
import transformEntry from './transformEntry'

const sandbox = sinon.createSandbox()

beforeEach(() => {
    sandbox.stub(process, 'env').value({ 'CLOCKIFY_PROJECT_ID': 'foo' })
})

afterEach(() => {
    sandbox.restore()
})

it('transforms entry', () => {
    expect(transformEntry(input)).toEqual(output)
})

it('sets clockify project ID from env variable', () => {
    sandbox.stub(process, 'env').value({ 'CLOCKIFY_PROJECT_ID': 'xy42' })
    expect(transformEntry(input))
        .toHaveProperty('projectId', 'xy42')
})

it('keeps description', () => {
    const togglEntry = {
        ...input,
        description: 'Doing pushups'
    }
    expect(transformEntry(togglEntry))
        .toHaveProperty('description', 'Doing pushups')
})

it('transforms billable', () => {
    const togglEntry = {
        ...input,
        is_billable: true
    }
    expect(transformEntry(togglEntry))
        .toHaveProperty('billable', 'true')
})

it('transforms start time to UTC', () => {
    const togglEntry = {
        ...input,
        start: '2020-10-07T18:30:05+02:00'
    }
    expect(transformEntry(togglEntry))
        .toHaveProperty('start', '2020-10-07T16:30:05.000Z')
})

it('transforms end time to UTC', () => {
    const togglEntry = {
        ...input,
        end: '2020-10-07T18:30:05+02:00'
    }
    expect(transformEntry(togglEntry))
        .toHaveProperty('end', '2020-10-07T16:30:05.000Z')
})