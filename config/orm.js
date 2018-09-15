
var connection = require("../config/connection.js");

// Create an orm.js file inside config directory.

// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var orm = {
    selectAll: function (cb) {
        var sql = "SELECT * FROM burgers";
        connection.query(sql, function (err, result) {
            if (err) throw err

            console.log(result);
            cb(result)
        });
    },
    insertOne: function (col, val, cb) {
        var sql = "INSERT INTO burgers (??) VALUES (?)";
        connection.query(sql, [col, val], function (err, result) {
            if (err) throw err

            console.log(result);
            cb(result)
        });
    },
    updateOne: function (newInfo, userId, cb) {
        var sql = "UPDATE burgers SET devoured=? WHERE id=?"
        connection.query(sql, [newInfo, userId], function (err, result) {
            if (err) throw err

            console.log(result);
        });
    }
}


   
 

// INSERT INTO burgers (burger_name) VALUES ('Double Double');

module.exports = orm;

