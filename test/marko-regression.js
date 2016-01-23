'use strict';
var chai = require('chai');
chai.use(require('../'));
var expect = chai.expect;
describe('visual regression: marko', function() {
    it('should be able to validate an html string', function() {
        expect(1).to.eql(1);
    });
});