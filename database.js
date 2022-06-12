var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "I@mRe4lIronm@n.",
  database: "tnetdatabase",
});

module.exports = connection;

// INSERT INTO `tnetdatabase`.`employee_table` (`name`, `start`, `end`) VALUES ('Hikmat Imanov', '12:45', '17:50');
