import config from '../config.json'
import getTaskId from './getTaskId'

it('returns Development task id given dev tag', () => {
  expect(getTaskId(['investigation', 'dev']))
    .toEqual(config.clockify.tasks.Development)
})

it('returns Design task id given ux tag', () => {
  expect(getTaskId(['learning', 'ux']))
    .toEqual(config.clockify.tasks.Design)
})

it('returns Design task id given pm tag', () => {
  expect(getTaskId(['grooming', 'pm']))
    .toEqual(config.clockify.tasks.Design)
})

it('returns Non-development task id given no ux and dev tags', () => {
  expect(getTaskId(['administrative']))
    .toEqual(config.clockify.tasks['Non-development'])
})
