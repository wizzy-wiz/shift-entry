// var url = require("url");
var http = require("http");
// const fs = require("fs");
var mysql = require("mysql");
var express = require("express");
// const axios = require("axios");

var app = express();
// var connection = require("./database");

var connection = mysql.createConnection({
//   host: "localhost",
  user: "root",
  password: "I@mRe4lIronm@n.",
  database: "tnetdatabase",
});

// app.get("/", function (req, res) {
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

// app.listen(3000, function () {
//   console.log("app listening on port 8000");
//   connection.connect(function(err){
//     if(err) throw err;
//     console.log('Database connected');
//   })
// });

// mainpackage = {
//     MShiftName: "This ",
//     MShiftStart: "Is",
//     MShiftEnd: "Example Package",
// };

// let shiftname = mainpackage.MShiftName;
// let shiftstart = mainpackage.MShiftStart;
// let shifend = mainpackage.MShiftEnd;

// const data = JSON.stringify(mainpackage);
// fs.appendFile("package.json", data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });

// // this is sql part
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "admin",
//     password: "pass12345",
//     database: "shiftentries",
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");

//     var sql =
//         "INSERT INTO shifts (shiftname, shiftstart, shiftend) VALUES (shiftname, shiftstart, shiftend)";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });
