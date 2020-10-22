'use strict';

var respond = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    respond.ok("Running Alhamdulillah", res)
};