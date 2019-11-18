const mysql = require('mysql2/promise')
require('dotenv').config()
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env]

const dbName = process.env.DB || 'YOUR_DB';

mysql
  .createConnection({
    host: config.host || '127.0.0.1',
    port: config.port || '3306',
    user: config.username || 'root',
    password: config.password || 'password'
  })
  .then(connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then(res => {
      console.info('Database create or successfully checked')
      process.exit(0)
    })
  })
