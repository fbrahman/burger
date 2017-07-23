// Set up MySQL connection.
const mysql = require("mysql");
const keys = require('./keys')

var connection = mysql.createConnection(keys.sqlConfig);

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
