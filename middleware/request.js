const { ok, notFound, serverError } = require('../helpers/http-helper')
const routes = require('../routes/router-helper')
const setHeaders = require('./set-headers')

async function request (req, res) {
  setHeaders(res)
  const { method, url } = req

  const callback = routes[method][url]

  if (!callback) {
    notFound(res)
    return
  }

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  let request

  req.on('end', async () => {
    request = {
      ...(JSON.parse(body) || {})
    }

    try {
      const result = await callback(request)
      ok(res, result)
    } catch (error) {
      console.error(error)
      serverError(res)
    }
  })
}

module.exports = request
