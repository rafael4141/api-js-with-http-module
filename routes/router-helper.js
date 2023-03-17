const routes = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
  get (route, callback) {
    this.GET[route] = callback
  },
  post (route, callback) {
    this.POST[route] = callback
  },
  put (route, callback) {
    this.PUT[route] = callback
  },
  delete (route, callback) {
    this.DELETE[route] = callback
  }
}

module.exports = routes
