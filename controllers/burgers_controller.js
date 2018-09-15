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

    app.post("/api", function (req, res) {
        var foodName = req.body.name;
        console.log(req.body.name);
        // res.send(req.body.name)
        orm.insertOne("burger_name", foodName, function (data) {
            console.log("------------Success---------");
        });

    })

    app.post("/update", function (req, res) {

        var ids_to_update = req.body.id;
        console.log(ids_to_update);

        for (var i = 0; i < ids_to_update.length; i++) {
            var id = ids_to_update[Number(i)];
            console.log(id);
            orm.updateOne(true, id, function (data) {
                console.log(data);
            });
        }
    });

}

