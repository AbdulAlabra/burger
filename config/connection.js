// // Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Abosaad123",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

var mysql = require("mysql");
var connection;
console.log(process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Abosaad123",
    database: "burgers_db"
  });
}
connection.connect(function (err) {
  if (err) {
    console.error("Connection Error" + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;
