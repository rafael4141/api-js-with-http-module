const { createUserDatabase, updateUserDatabase, deleteUserDatabase } = require('../database/user-database')
const { getUsersDatabase } = require('../database/user-database')
const validationFields = require('../helpers/validation-fields')

async function getUsers () {
  return await getUsersDatabase()
}

async function createUser (data) {
  const fields = ['name', 'email', 'password']
  const isValid = validationFields(fields, data)
  if (!isValid) {
    throw new Error('Fields are invalid')
  }
  return await createUserDatabase(data)
}

async function updateUser (data) {
  const fields = ['id', 'name', 'email']
  const isValid = validationFields(fields, data)
  if (!isValid) {
    throw new Error('Fields are invalid')
  }
  await updateUserDatabase(data)
}

async function deleteUser (data) {
  const fields = ['id']
  const isValid = validationFields(fields, data)
  if (!isValid) {
    throw new Error('Fields are invalid')
  }
  await deleteUserDatabase(data)
}

module.exports = { createUser, getUsers, updateUser, deleteUser }
