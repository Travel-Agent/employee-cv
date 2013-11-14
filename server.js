'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();

// Connect to database
var db = require('./lib/db/mongo');

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
    require(modelsPath + '/' + file);
});

// Populate empty DB with dummy data
require('./lib/db/dummydata');

// Controllers
var api = require('./lib/controllers/api');
var appRoute = ('development' === app.get('env')) ? 'app' : 'public';

// Express All configuration
app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

//express development configuration
app.configure('development', function () {
    app.use(express.static(path.join(__dirname, '.tmp')));
    app.use(express.static(path.join(__dirname, appRoute)));
    app.use(express.errorHandler());
});

//express production conf
app.configure('production', function () {
    app.use(express.favicon(path.join(__dirname, appRoute, 'favicon.ico')));
    app.use(express.static(path.join(__dirname, appRoute)));
});

// Routes
app.get('/api/awesomeThings', api.awesomeThings);

//general catch route
app.use(function (req, res) {
    res.sendfile(path.join(__dirname, appRoute, 'index.html'));
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});