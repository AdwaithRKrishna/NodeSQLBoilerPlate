require('dotenv').config()
module.exports = {
  development: {
    username: process.env.DB_USER_NAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB || 'nodejsDev',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  }
}
