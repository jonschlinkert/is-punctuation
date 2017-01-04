'use strict';

var punctuationRegex = require('punctuation-regex');

module.exports = function(str) {
  return typeof str === 'string' && punctuationRegex().test(str);
};
