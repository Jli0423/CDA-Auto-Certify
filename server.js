require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const promise = require('promise');
const flash = require('flash');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

var {Student} = require('./models/students');
var {mongoose} = require('./db/mongoose');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(cookieSession({
  name: 'session',
  keys: ['secret']
}));
app.use(session());
app.use(flash());
app.use('/', express.static('views'));

const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/current', (req,res)=>{
  Student.find().then((students)=>{
    res.send({students})
  }).catch((e)=>{
    res.status(400).send();
  });
})

app.get("/completed", (req, res) =>{
  res.render("completed");
})

app.post('/certify', urlencodedParser, (req, res) => {
  res.redirect("/completed");
  var student = new Student({
    _id: req.body.firstName + " " + req.body.lastName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    driverLicense: req.body.driverNum,
    startClassDate: req.body.inClassStart,
    startCarDate: req.body.inCarStart,
    endClassDate: req.body.inClassEnd,
    endCarDate: req.body.inCarEnd,
    classMark: req.body.inClassMark,
    carMark: req.body.inCarMark
  });
  student.save().then((doc) => {
    res.send(doc);
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

module.exports = {app};
