
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "e_commerce",
    multipleStatement: true
});

function createConnection() {
    mysqlConnection.connect((err) => {
        if (!err) {
            console.log("Connected");
            // createDatabase()
            createTable()

        } else {
            console.log("Connection Failed", err);
        }
    })
}



function createDatabase() {
    mysqlConnection.query("CREATE DATABASE e_commerce", (err, result) => {
        if (!err) {
            console.log("Database created");
        } else {
            console.log('this is the err:', err);
        }
    })
}

function createTable() {
    var sql = "CREATE TABLE if not exists user(id int auto_increment,firstname varchar(100),lastname varchar(100),gender varchar(10),primary key(id))";
    mysqlConnection.query(sql, (err, result) => {
        if (!err) {
            console.log("table created")
        } else {
            console.log("this is the err", err);
        }

    })
}

createConnection()

module.exports = mysqlConnection;