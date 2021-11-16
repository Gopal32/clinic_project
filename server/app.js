// const path = require('path');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const express = require('express');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Gopal@19',
//     database:'newTab'
// });

// const app = express();

// app.listen(4000,() =>{
//     console.log("Server is running on 4000")
// });

// connection.connect((err) => {
//     if(err){
//         console.log("Error Connection " + err);
//         return;
//     }
//     console.log("Connection successful")
// });

app.set("views",path.join(__dirname,"views"));
// app.set("view engine", "ejs");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req, res) =>{
//     let sql = "select * from M12";
//     let qry = connection.query(sql,(err,row) =>{
//         if(err){
//             // console.log("Error connection" +err)
//             // return;
//             throw err;
//         }
//         res.render("user",{
//             title: "Student Information",
//             user : row
//         })
//     })
// })

// app.get('/add',(req,res)=>{
//     res.render("add",{
//         title: "Add Student"
//     });
// });

// app.post('/save',(req,res) => {
//     let data = {roll_no: req.body.rno, S_name: req.body.sname};
//     let sql = "INSERT INTO M12 SET ?";
//     let qry = connection.query(sql,data,(err,row)=>{
//         if(err) throw err;
//         res.redirect('/')
//     });
// });

// app.get('/edit/:roll_no',(req,res) => {
//     let roll = req.params.roll_no;
//     let sql = "SELECT * FROM M12 where roll_no = ? ";
//     let qry = connection.query(sql,[roll],(err,row) => {
//         if(err) throw err;
//         res.render("edit", {
//             title : "Edit Student",
//             user: row[0]
//         });
//     });
// });

// app.post('/save', (req,res) => {
//     let data = [req.body.sname, req.body.rno];
//     let sql = "UPDATE M12 SET S_name = ? WHERE roll_no = ?";
//     let qry = connection.query(sql,data,(err,row) => {
//         if(err) throw err;
//         res.redirect("/");
//     })
// })

// app.get('/delete/:roll_no', (req,res) => {
//     // const enroll = req.params.roll_no;
//     let sql = "DELETE from M12 where roll_no = ?";
//     let qry = connection.query(sql,[req.params.roll_no],(err,row) =>{
//         if(err) throw err;
//         res.redirect("/");
//     })
// })
// // app.get('/delete/:roll_no',(req,res)=>{
// //     const enroll = req.params.roll_no;
// //     let sql = "DELETE FROM M12 WHERE roll_no = ?";
// //     let qry = connection.query(sql,[enroll],(err,row)=>{
// //         if (err) throw err;
// //         res.redirect('/');
// //     });
// // });

const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

const port = process.env.PORT || 3000;

app.use(session({
	secret:'geeksforgeeks',
	saveUninitialized: true,
	resave: true
}));

app.use(flash());

app.get('/', (req, res) => {
req.flash('message', 'Success!!');
res.send(req.flash('message'));
// res.redirect('/gfg');
});

app.get('/gfg', (req, res) => {
	res.send(req.flash('message'));
});

app.listen(port, (err) => {
if (err) console.log(err);
console.log('Server is up and listening on', port);
});
