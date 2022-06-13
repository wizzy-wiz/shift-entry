var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'sadi',      // Replace with your database username
    password: 'sadi1234',      // Replace with your database password
    database: 'users' // // Replace with your database Name
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;