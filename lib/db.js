var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Commonplant1234!',
    database: 'vsa'
});
db.connect();

module.exports = db;