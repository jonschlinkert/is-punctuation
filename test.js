'use strict';

require('mocha');
var assert = require('assert');
var isPunctuation = require('./');

describe('is-punctuation', function() {
  it('should match punctuation', function() {
    assert(!isPunctuation('foo'));
    assert(!isPunctuation('bar!'));
    assert(isPunctuation('!'));
    assert(isPunctuation('@'));
    assert(isPunctuation('$'));
    assert(isPunctuation('&'));
    assert(isPunctuation('/'));
    assert(isPunctuation('*'));
  });
});
