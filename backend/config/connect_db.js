const mysql = require('mysql2/promise');
require('dotenv').config()

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD, // replace with your password
  database: 'sbsm',
  connectionLimit: 10, // adjust the limit as needed
});

module.exports = pool;