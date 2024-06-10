require('dotenv').config()
var mysql = require("mysql")

var connect_DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "sbms"
});

connect_DB.connect(function(err) {
    if (err) throw err;
});

module.exports = connect_DB;