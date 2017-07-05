const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'localhost:27017/CDA-Students');

module.exports = {mongoose};
