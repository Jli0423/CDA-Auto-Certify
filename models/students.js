const mongoose = require('mongoose');

var student = mongoose.model('student', {
  name:{
    type: String,
    required: true,
    minlength: 2
  }
});

module.exports = {
  student
}
