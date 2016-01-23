// create a temporary http server
'use strict';
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

module.exports = function(templatePath, options) {
    var app = express();
    app.use(options.lasso['url-prefix'], serveStatic(path.join(process.cwd(), options.lasso.outputDir)));
    app.get('/', function(request, response) {
        response.writeHeader(200, {
            'Content-Type': 'text/html'
        });
        require('marko').load(templatePath).render({}, response);
    });
    return app.listen(options.port);
};
