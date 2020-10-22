'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.getallbarang);

    app.route('/tampil/:id')
        .get(jsonku.getallbarangbyid);
}