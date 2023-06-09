const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_DATABASE,
});

console.log("Database connection successfully established!");

module.exports = connection;