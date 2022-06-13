// var url = require("url");
var http = require("http");
// const fs = require("fs");
var mysql = require("mysql");
var express = require("express");

var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tnetdatabase",
});

//   let sql = "SELECT * FROM EMPLOYEE_TABLE";
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO customers (name, start, end) VALUES ('Company Inc', '12:33', '13:00')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

// http
//   .createServer(function (req, res) {
//     console.log("server created");
//     connection.connect(function (err) {
//       if (err) throw err;
//       console.log("Database connected");
//     });
//   })
//   .listen(4000);

