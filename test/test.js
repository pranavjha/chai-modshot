'use strict';
var chai = require('chai');
chai.use(require('../' + (process.env.APP_DIR_FOR_CODE_COVERAGE || '') + 'lib/index'));
var expect = chai.expect;

/* globals describe, it */
describe.only('chai-modshot: marko', function() {

    it('checks a marko template for consistency', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image1');
    });

    it('should be visually consistent when rendered as non-modal', function() {
        return expect(require.resolve('./fixtures/template.html')).to.be.consistentWith('image2');
    });
});
