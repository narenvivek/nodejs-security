const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
var cookieParser = require('cookie-parser') //for cookie parsing
// var csrf = require('csurf') //csrf module

// setup route middlewares
var csrfProtection = csrf({
  cookie: true
})
var parseForm = bodyParser.urlencoded({
  extended: false
})

const app= express();

app.use(cookieParser())

//setting the view engine as EJS. 
app.set('view engine', 'ejs');

//roots the views directory to public
app.set('views', 'public');

//tells express that the public folder is the static folder
app.use(express.static("public"));

//home route
app.get("/", csrfProtection, function(req,res){
  res.render("./pages/index");
});

// routing plot.ejs file
// this simply means calling localhost:3000/plot will render this page in our app
app.get("/plot", csrfProtection, function(req,res){
  res.render("./pages/plot");
});

// routing cast.ejs file 
//this simply means calling localhost:3000/cast will render this page in our app
app.get("/cast", csrfProtection, function(req,res){
  res.render("./pages/cast");
});

app.listen(3000, function(){
        console.log("SERVER STARTED ON localhost:3000");     
})