const parseSuccess = (response: any) => {
  return { ok: true, data: response.data, headers: response.headers }
}

const parseError = (response: any) => {
  let message, status
  // console.log({ response })
  if (!response) {
    message = 'Check your network connection and try again.'
    status = 408
  } else {
    message = response.message
    status = response.status
  }
  status = response.status

  console.log({ status, message })
  return { status, message }
}

export default {
  parseSuccess,
  parseError,
}
