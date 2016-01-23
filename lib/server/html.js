// create a temporary http server
'use strict';
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

module.exports = function(templatePath, options) {
    var app = express();
    app.use('/', serveStatic(path.join(templatePath, '../')));
    app.get('/', function(request, response) {
        fs.readFile(templatePath, function(err, html) {
            if (err) {
                return response.status(500).end();
            }
            response.writeHeader(200, {
                'Content-Type': 'text/html'
            });
            response.write(html);
            response.end();
        });
    });
    return app.listen(options.port);
};
