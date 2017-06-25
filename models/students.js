const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Student = mongoose.model('Student',{
  name:{
    type: String,
    required: true,
    minlength: 2
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number
  }
})

module.exports = {
  Student
}
