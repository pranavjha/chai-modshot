// ## plugin implementation for node.
'use strict';
var Promise = require('bluebird');
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs-extra');
var defaultsDeep = require('lodash/defaultsDeep');
var options, configured;
module.exports = function chaiAccessibility(chai) {
    var Assertion = chai.Assertion;
    Assertion.addMethod('consistentWith', function(useCase, selector, delay) {
        if (!configured) {
            module.exports.configure();
        }
        // extract the templatePath
        var templatePath = this._obj;
        // normalize the options
        if (typeof selector === 'number') {
            delay = selector;
            selector = null;
        }
        if (typeof selector === 'string') {
            selector = [
                selector
            ];
        }
        // create the server
        var server = require('./server')(templatePath, options);
        return new Promise(function(resolve, reject) {
            // run modshot on the filePath
            process.env.PHANTOMJS_EXECUTABLE = require.resolve('phantomjs/bin/phantomjs');
            exec(
                [
                    path.join(require.resolve('modshot/package.json'), '../bin/modshot.js'),
                    '-u',
                    'http://localhost:' + options.port + '/',
                    '-o',
                    options.outDir
                ].concat(selector ? selector.map(function(sel) {
                    return '-s ' + '\'' + sel + '\' ';
                }) : []).concat(delay ? [
                    '--delay',
                    delay
                ] : []).concat(useCase ? [
                    '-p',
                    useCase
                ] : []).join(' '),
                {
                    cwd: process.cwd(),
                    env: process.env
                },
                function(err, stdout) {
                    server.close();
                    if (err) {
                        return reject(err);
                    }
                    // FIXME: maybe there is a better way?
                    if (stdout.indexOf('FAIL') !== -1) {
                        console.log(stdout);
                        return reject('visual regression failed!');
                    }
                    return resolve(stdout);
                }
            );
        });
    });
};

module.exports.configure = function(newOpts) {
    options = defaultsDeep(newOpts || {}, {
        outDir: 'shots/units',
        tolerance: 5,
        port: 4567,
        templateType: 'marko',
        lassoConfig: {
            plugins: [
                'lasso-less',
                'lasso-autoprefixer',
                'lasso-marko'
            ],
            'url-prefix': '/static',
            outputDir: 'static',
            fingerprintsEnabled: false,
            minify: false,
            bundlingEnabled: false,
            resolveCssUrls: true,
            cacheProfile: 'development'
        }
    });
    fs.mkdirsSync(path.join(process.cwd(), options.outDir));
    configured = true;
};
