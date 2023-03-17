function validationFields (fields, input) {
  for (let i = 0; i < fields.length; i++) {
    if (!input[fields[i]]) {
      return false
    }
  }
  return true
}

module.exports = validationFields
