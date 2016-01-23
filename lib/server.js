// create a temporary http server
'use strict';
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

module.exports = function(templatePath, options) {
    require('lasso').configure(options.lassoConfig);
    var app = express();
    app.use(options.lassoConfig['url-prefix'], serveStatic(path.join(process.cwd(), options.lassoConfig.outputDir)));
    app.get('/', function(request, response) {
        response.writeHeader(200, {
            'Content-Type': 'text/html'
        });
        // load the renderer
        require('./renderer/' + options.templateType)(templatePath, response);
    });
    return app.listen(options.port);
};
