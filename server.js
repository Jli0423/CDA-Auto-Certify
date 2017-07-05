const express = require('express');
const bodyParser = require('body-parser');
const promise = require('promise');
const mongoose = require('mongoose');
const flash = require('flash');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

var {
  Student
} = require('./models/students');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/CDA-Students');

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

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.get('/certify', (req, res) => {
  res.render('home');
});

app.post('/certify', urlencodedParser, (req, res) => {
  var student = new Student({
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

app.listen(3000, (req, res) => {
  console.log('Server is up on port 3000');
})
