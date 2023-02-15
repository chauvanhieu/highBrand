const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "highbrand",
});

module.exports = con;
