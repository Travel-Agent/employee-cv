'use strict';

var mongoose = require('mongoose');

exports.mongoose = mongoose;

// Configure for possible deployment
var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://viewer:viewer@ds053978.mongolab.com:53978/employee-cv' ||
  'mongodb://localhost/test';

var mongoOptions = { db: { safe: true } };

// Connect to Database
mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + uristring);
  }
});
