const { Pool } = require('pg');
const { param } = require('../api/routes');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  port: process.env.DBPORT
});

pool.on('connect', () => console.log(`${new Date().toLocaleString()} -> banco de dados conectado.`));

module.exports = {
  query: (sql, params) => pool.query(sql, params)
};