import getTaskId from './getTaskId'

it('returns Development task id given dev tag', () => {
  const config = { clockify: { tasks: { Development: 'dev42' } } }
  expect(getTaskId(config)(['investigation', 'dev']))
    .toEqual('dev42')
})

it('returns Design task id given ux tag', () => {
  const config = { clockify: { tasks: { Design: 'design42' } } }
  expect(getTaskId(config)(['learning', 'ux']))
    .toEqual('design42')
})

it('returns Design task id given pm tag', () => {
  const config = { clockify: { tasks: { Design: 'design42' } } }
  expect(getTaskId(config)(['grooming', 'pm']))
    .toEqual('design42')
})

it('returns Non-development task id given no ux and dev tags', () => {
  const config = { clockify: { tasks: { 'Non-development': 'misc42' } } }
  expect(getTaskId(config)(['administrative']))
    .toEqual('misc42')
})
