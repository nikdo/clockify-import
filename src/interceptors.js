const unpackData = response => response.data

const logError = error => {
  if (error.response) {
    console.log(error.response.data)
  }
  console.log(error.config)
  throw error
}

export default {
  apply: api => api.interceptors.response.use(unpackData, logError)
}
