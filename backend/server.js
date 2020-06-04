const express = require("express");
const bodyParser = require("body-parser");
const PeopleRoutes=require("./routes/people");
const UserRoutes=require("./routes/user-route");
var cors = require('cors')
const mysqlConnection=require("./connection");

var app = express();

app.use(cors())

app.use(bodyParser.json());

app.use("/",UserRoutes);


app.listen(3000);