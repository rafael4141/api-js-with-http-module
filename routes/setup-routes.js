const routes = require('./router-helper')
const { getUsers, createUser, updateUser, deleteUser } = require('./user-routes')

function setupRoutes () {
  routes.get('/', getUsers)
  routes.post('/', createUser)
  routes.put('/', updateUser)
  routes.delete('/', deleteUser)
}

module.exports = setupRoutes
