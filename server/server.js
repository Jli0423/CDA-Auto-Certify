const express = require('express');
const bodyParser = require('body-parser');
const promise = require('promise');
const _ = require('lodash');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
var {Student} = require('./../models/students');
var app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/CDA-Students');
app.post('/student', (req, res)=>{
  var student = new Student({
    name : req.body.name
  });
  student.save().then((doc) => {
    res.send(doc);
  }).catch((e) => {
    res.status(400).send();
  })
});


app.listen(3000, ()=>{
  console.log('Server is up on port 3000');
})
