// html renderer
'use strict';
var fs = require('fs-extra');
module.exports = function(templatePath, response) {
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
};