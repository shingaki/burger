// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Koshima_2019",
//     database: "burgers_db"
// });

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b0fef473fbd53d",
    password: "2f3e88e9",
    database: "heroku_a83fcf0a043b81a"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;