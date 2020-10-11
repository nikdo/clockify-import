export default config => tags => {
  if (tags.includes('dev')) {
    return config.clockify.tasks.Development
  } else if (tags.includes('ux') || tags.includes('pm')) {
    return config.clockify.tasks.Design
  }
  return config.clockify.tasks['Non-development']
}
