const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");


Router.get("/users", (req, res) => {

    mysqlConnection.query("SELECT* FROM user", (err, rows, fields) => {
        if (!err) {
            res.send(rows);

        } else {
            console.log(err);
        }

    })


})

Router.get("/users/:id", (req, res) => {
    let query = `SELECT* FROM user where id=${req.params.id}`
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows[0]);

        } else {
            console.log(err);
        }

    })


})

Router.post("/users", (req, res) => {

    let query = `insert into user(firstname,lastname,gender)values('${req.body.firstname}','${req.body.lastname}','${req.body.gender}')`

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);

        } else {
            res.send(err)
            console.log(err);
        }

    })


})

Router.put("/users", (req, res) => {

    let query = `update user set firstname='${req.body.firstname}',lastname='${req.body.lastname}',gender='${req.body.gender}' where id='${req.body.id}';`

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);

        } else {
            res.send(err)
            console.log(err);
        }

    })


})

Router.delete("/users/:id", (req, res) => {

    console.log('this is the request:', req)
    let query = `delete from user where id='${req.params.id}';`

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);

        } else {
            res.send(err)
            console.log(err);
        }

    })


})






module.exports = Router;