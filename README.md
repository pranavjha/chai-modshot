[![Build Status](https://travis-ci.org/pranavjha/chai-modshot.svg)](https://travis-ci.org/pranavjha/chai-modshot)
[![Code Climate](https://codeclimate.com/github/pranavjha/chai-modshot/badges/gpa.svg)](https://codeclimate.com/github/pranavjha/chai-modshot)

[![Dependency Status](https://david-dm.org/pranavjha/chai-modshot.svg)](https://david-dm.org/pranavjha/chai-modshot)
[![devDependency Status](https://david-dm.org/pranavjha/chai-modshot/dev-status.svg)](https://david-dm.org/pranavjha/chai-modshot#info=devDependencies)
[![peerDependency Status](https://david-dm.org/pranavjha/chai-modshot/peer-status.svg)](https://david-dm.org/pranavjha/chai-modshot#info=peerDependencies)


# chai-modshot

> visual regression testing plugin for chai


## How to use

Can be used with the `should`, `expect` or `assert` interfaces.

``` javascript

// 1. testing an HTML file for visual regression
var htmlFilePath = require.resolve('./index.html');
return expect(htmlFilePath).to.be.consistentWith('html-file-1');

// 2. testing a marko template for visual regression
var templatePath = require.resolve('./template.marko');
return expect(templatePath).to.be.consistentWith('marko-template-1');

```

## Installation and Setup

Do an `npm install chai-modshot` to get up and running. Then use it for assertions.


```javascript

var chai = require('chai');
var chaiModshot = require('chai-modshot');

chai.use(chaiModshot);

```



## Configuring chai-modshot

`chai-modshot` can **optionally** be configures using a configure function as shown below. This should be done before
the assertions. Also, configuring `chai-modshot` multiple times overrides the previous configurations.


```javascript
require('chai-modshot').configure({
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

```

The `.configure` function takes an object with the below keys as parameter:

 - `outDir` (Default: `'shots/units'`) the output directory for screenshots.
 - `tolerance` (Default: `5`) the percentage deviation with original screenshots upto which, the assertions should not fail.
 - `port` (Default: `4567`) the port to start the server on.
 - `templateType` (Default: `'lasso'`) the template engine that should be used. Currently, `marko` and `html` are supported
 - `lassoConfig` the lasso configuration that should be passed to the template. The default configuration is as in the
   above example.