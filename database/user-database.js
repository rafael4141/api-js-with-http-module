const { client } = require('./database-helper')

async function getUsersDatabase () {
  const query = 'SELECT * FROM users'
  const data = await client.query(query)
  return data.rows
}

async function createUserDatabase (data) {
  const query = 'INSERT INTO users(name, email, password) VALUES ($1, $2, $3)'
  await client.query(query, [data.name, data.email, data.password])
}

async function updateUserDatabase (data) {
  const query = 'UPDATE users SET name = $2, email = $3 WHERE id = $1'
  await client.query(query, [data.id, data.name, data.email])
}

async function deleteUserDatabase (data) {
  const query = 'DELETE FROM users WHERE id = $1'
  await client.query(query, [data.id])
}

module.exports = {
  getUsersDatabase,
  createUserDatabase,
  updateUserDatabase,
  deleteUserDatabase
}
