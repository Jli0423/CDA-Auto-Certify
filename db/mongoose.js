const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jli0423:Justin_199898li@ds064299.mlab.com:64299/heroku');

module.exports = {mongoose};
