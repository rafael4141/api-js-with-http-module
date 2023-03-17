const { Client } = require('pg')

const client = new Client({
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
})

async function verifyTables (client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT,
      email TEXT,
      password TEXT
    );
  `)
}

module.exports = {
  client,
  verifyTables
}
