const express = require('express');
const mysql = require("mysql");
const path = require('path');

// const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gopal@19",
    database:"newTab"
})

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',(req,res) => {
    res.render("user", {
        title:"Hello"
    })
});

app.get('/add',(req,res) => {
    res.render("gopal", {
        title: "Hello"
    })
})

app.get('/speciality_home', (req,res) => {
    res.render("home", {
        title:"Speciality"
    })
})


// app.use('/',(req,res) => {
//     res.render("user", {
//         title: 'welcome'
//     })
// })

connection.connect((err) => {
    if(err){
        console.log('Error ' +err)
    }else{
        console.log("Succcessfully connected")
    }
});

app.listen('3000', () => {
    console.log("Server run on port 3000")
})