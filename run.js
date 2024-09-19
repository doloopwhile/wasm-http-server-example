import http from "http";
import {run} from "./build/release.js"

http.createServer((request, response) => {
  // WASI関数に渡す配列
  const requestEnv = []
  for (const key in request.headers) {
    requestEnv.push({key, value: request.headers[key]});
  }
  requestEnv.push({key: 'REQUEST_METHOD', value: request.method});
  const result = run(requestEnv);
  const headers = {}
  result.headers.forEach((h) => {
    headers[h.key] = h.value;
  })
  response.writeHead(result.status, headers);
  response.end(result.body, "utf-8");
}).listen(8080);
