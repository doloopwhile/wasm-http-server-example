class Header {
  key: string
  value: string
}

class Response {
  status: number
  headers: Header[]
  body: string
}

class RequestEnv {
  key: string
  value: string
}

export function run(request: RequestEnv[]): Response {
  let requestMethod = ''

  for(let i = 0; i < request.length; i++) {
    const r = request[i]
    if (r.key === 'REQUEST_METHOD') {
      requestMethod = r.value
    }
  }

  return {
    status: 200,
    headers: [
      { key: 'Content-Type', value: 'text/plain' }
    ],
    body: "Hello " + requestMethod + "!"
  }
}

