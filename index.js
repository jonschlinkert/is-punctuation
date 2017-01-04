'use strict';

var punctuationRegex = require('punctuation-regex');

module.exports = function(str, extended) {
  return typeof str === 'string' && punctuationRegex(extended).test(str);
};
