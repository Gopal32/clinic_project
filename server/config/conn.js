const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gopal@19",
    database: "newTab"
});

//Database connection
connection.connect((err) => {
    if(err) throw err;
    console.log("Connection successfully....")
})

module.exports = connection;