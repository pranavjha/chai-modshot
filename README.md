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


## Configuring chai-modshot




## Installation and Setup

Do an `npm install chai-modshot` to get up and running. Then:


```javascript

var chai = require('chai');
var chaiModshot = require('chai-modshot');

chai.use(chaiModshot);

```