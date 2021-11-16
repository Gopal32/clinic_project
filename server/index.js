const express = require("express");
const path = require("path");
const mysql = require("mysql");
const session = require('express-session');
const flash = require('connect-flash');
const ejs = require("ejs");
const cors = require('cors');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gopal@19",
    database: "newTab"
});

const app = express();

app.use(cors());

app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

//Database connection
connection.connect((err) => {
    if(err) throw err;
    console.log("Connection successfully....")
})

//view engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.get('/', (req,res) => {
    res.render("user",{title: "ADD"})
})

//Save user data
app.post('/save', (req,res) => {
    let data = {first_name:req.body.f_name, last_name: req.body.l_name, email: req.body.email,u_password: req.body.pass};
    let sql = "Select count(1) AS cnt from User_login where email = ?";
    let sql1 = "insert into User_login set ?";
    let qry = connection.query(sql,req.body.email,(err,row)=>{
        if(err){
            console.log(err);
        }   
        else{
            if(row[0].cnt > 0){  
                //   res.status(404).json({ message: "User Already exist" });
                  req.flash('message', "User Already exist");
                  res.send(req.flash('message'));
                  res.end(); 
            }else{
                connection.query(sql1,data,(err, insert) =>{
                    if(err) throw err;
                    res.redirect('/login');
                    res.end();
                })                  
            }
        }
    });
})

//user Login page
app.get('/login', (req,res) => {
    res.render("login",{title: "Login sdfd"})
})

//save login
app.post('/save_login', (req,res) => {
    let email = req.body.email;
	let password = req.body.pass;
    let sql = "Select count(1) from User_login where email = ? And U_password = ?";
	if (email && password) {
		connection.query('SELECT * FROM User_login WHERE email = ? AND U_password = ?', [email, password],(error, results) => {
			if (results.length > 0) {
				res.redirect('/');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

//speciality
app.get('/add_Speciality', (req,res) => {
    let sql = "Select * from Doct_speciality"
    let qry = connection.query(sql,(err,row) => {
        if(err) throw err;
        res.json(row);
    })
})

//specilaity_add
app.get('/speciality', (req,res) => {
    res.render("home", {
        title:"Speciality"
    })
})

//save specilaity
app.post('/save_spectiality', (req,res) => {
    let data = req.body;
    let sql = 'Insert into Doct_speciality set ?';
    if(!data){
        res.status(422).json({ message: "Please enter Speciality" });
    }else{
        let qry = connection.query(sql,data,(err,row) => {
            if(err) throw err;
            res.redirect('/add_speciality')
        })
    }
})

//edit speciality
app.get('/edit/:Sr_no', (req,res) => {
    let data = req.params.Sr_no;
    let sql = "Select * from Doct_speciality where Sr_no = ?"
    let qry = connection.query(sql,[data],(err,row) => {
        if(err) throw err;
        res.render("Spec_edit", {
            title: "Edit Spec",
            user: row[0]
        });
    });
});

//edit speciality_add
app.post('/edit_spectiality',(req,res) => {
    let data = [req.body.spec, req.body.srno];
    let sql = "Update Doct_speciality set speciality = ? where Sr_no = ?";
    let qry = connection.query(sql,data,(err,row) => {
        if(err) throw err;
        res.redirect('/speciality_home')
    })
})

//delete speciality
app.get('/delete/:Sr_no', (req,res) => {
    let data = [req.params.Sr_no];
    let sql = "delete from Doct_speciality Where Sr_no = ?"
    let qry = connection.query(sql,data,(err,row) => {
        if(err) throw err;
        res.redirect('/speciality_home')
    })
})

//doctor_add
app.get('/doctor_add',(req,res) => {
    let sql = "Select * from Doct_speciality";
    let qry = connection.query(sql,(err,row) => {
        if(err) throw err;
        res.render('Add_doctor',{
            title: "add doctor",
            user: row
        })
    })
})

//add_doctor
app.post('/add_doctor' ,(req,res) => {
    let data = {first_name:req.body.f_name, last_name:req.body.l_name, speciality:req.body.spec, slot_time:req.body.time,photo:req.body.photo, doctor_desc: req.body.desc};
    let sql = "insert into doctor_info set ?";
    let qry = connection.query(sql,[data],(err,row, fields) => {
        if(err) throw err;
        res.redirect('/speciality_home')
    });
});

//server connection
app.listen(4000, () => {
    console.log("Server is running 4000")
})
