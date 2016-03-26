'use strict';
var chai = require('chai');
chai.use(require('../' + (process.env.APP_DIR_FOR_CODE_COVERAGE || '') + 'lib/index'));
var expect = chai.expect;

/* globals describe, it */
describe('chai-modshot: marko', function() {

    it('checks a marko template for consistency', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image1');
    });

    it('checks a selector for consistency', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image2', 'h1');
    });

    it('checks an array of selectors for consistency', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image3', [
            'h1',
            'h2'
        ]);
    });

    it('checks a comma separated list of selectors for consistency', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image3', 'h1,h2');
    });

    it('waits for the milliseconds provided before taking the screenshot', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image2', 'h1', 200);
    });

    it('waits for the milliseconds provided before taking the screenshot', function() {
        return expect(require.resolve('./fixtures/template.marko')).to.be.consistentWith('image1', 200);
    });

    it('should be visually consistent when rendered as non-modal', function() {
        return expect(require.resolve('./fixtures/template.html')).to.be.consistentWith('image6');
    });
});
