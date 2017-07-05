const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Student = mongoose.model('Student', {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: false
  },
  driverLicense: {
    type: String
  },
  startClassDate: {
    type: Date
  },
  startCarDate: {
    type: Date
  },
  endClassDate: {
    type: Date
  },
  endCarDate: {
    type: Date
  },
  classMark: {
    type: Number
  },
  carMark: {
    type: Number
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number
  }
})

module.exports = {
  Student
}
