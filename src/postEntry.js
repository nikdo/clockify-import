import fetch from 'node-fetch'
import ora from 'ora'

export default clockifyEntry => {
  const { CLOCKIFY_BASE_URL, CLOCKIFY_WORKSPACE_ID, CLOCKIFY_API_KEY } = process.env
  const url = `${CLOCKIFY_BASE_URL}/workspaces/${CLOCKIFY_WORKSPACE_ID}/time-entries`
  const spinner = ora(clockifyEntry.description).start()
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': CLOCKIFY_API_KEY
    },
    body: JSON.stringify(clockifyEntry)
  })
    .then(response => {
      if (!response.ok) throw new Error(response.status)
      return response.json()
    })
    .then(storedEntry => {
      spinner.succeed()
      return storedEntry
    })
    .catch(e => spinner.fail(e))
}
