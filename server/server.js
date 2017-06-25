const express = require('express');
const bodyParser = require('body-parser');
const promise = require('promise');
const _ = require('lodash');

var app = express();
app.use(bodyParser.json());

var {student} = require('./../models/students');

app.post('/', (req, res)=>{
  console.log(req.body);
});



app.listen(3000, ()=>{
  console.log('Server is up on port 3000');
})
