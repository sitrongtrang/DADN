var mysql = require("mysql")

var connect_DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sbms"
});

connect_DB.connect(function(err) {
    if (err) throw err;
});

module.exports = connect_DB;