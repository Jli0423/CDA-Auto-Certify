const express = require('express');
const bodyParser = require('body-parser');
const promise = require('promise');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

var {Student} = require('./models/students');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/CDA-Students');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/', express.static('views'));


app.get('/', (req, res)=>{
  res.render('home');
  var student = new Student({
    firstName: req.query.firstName,
    lastName: req.query.lastName
  });
  student.save().then((doc) => {
    res.send(doc);
  }).catch((e) =>{
    res.status(400).send();
  });
});

app.listen(3000, (req, res)=>{
  console.log('Server is up on port 3000');
})
