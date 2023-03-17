require('dotenv/config')
const http = require('http')
const { client, verifyTables } = require('./database/database-helper')
const setupRoutes = require('./routes/setup-routes')
const request = require('./middleware/request')

const host = 'localhost'
const port = 8000

setupRoutes()

const server = http.createServer(request)

client.connect().then(async () => {
  await verifyTables(client)
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
  })
})
