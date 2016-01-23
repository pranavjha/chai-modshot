// marko renderer
'use strict';

module.exports = function(templatePath, response) {
    require('marko').load(templatePath).render({}, response);
};
