'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    async = require('async');

// Return a list of thing 'names' 
exports.awesomeThings = function (req, res) {

    return Thing.find(function (err, things) {
        if (err) {
            res.send(err);
            return;
        }

        var thingNames = [];

        async.each(things, function (thing, cb) {
            thingNames.push(thing.name);
            cb();
        }, function (err) {
            console.log(err, thingNames);
            return res.send(thingNames);
        });
    });
};
