
var connection = require("../config/connection.js");

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

module.exports = orm;

