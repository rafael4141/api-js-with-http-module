const ok = (res, data) => {
  res.writeHead(200)
  res.end(JSON.stringify(data))
}

const notFound = (res) => {
  res.writeHead(404)
  res.end('not found')
}

const serverError = (res) => {
  res.writeHead(500)
  res.end('Internal Server Error')
}

module.exports = { ok, notFound, serverError }
