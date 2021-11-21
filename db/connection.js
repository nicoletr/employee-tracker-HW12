const mysql = require('mysql2');

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const connection = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);
connection.connect ( err => {
  if (err) throw err;
});

module.exports = connection;