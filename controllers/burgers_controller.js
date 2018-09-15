var express = require('express');
var app = express();
var orm = require('../config/orm.js');

module.exports = function (app) {

    app.get("/", function (req, res) {
        
        orm.selectAll(function (data) {
            
            var eaten = data.filter(function (obj) {
                return obj.devoured === 1
            });

            var notEaten = data.filter(function (obj) {
                return obj.devoured === 0
            });
            console.log("-------this is this Controller--------")
            res.render("index", { eaten, notEaten });
        });
    });

    app.get("/api", function (req, res) {
        orm.selectAll(function (data) {
            res.json(data); 
        })
    })
}

