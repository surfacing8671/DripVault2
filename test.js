'use strict';

require('mocha');
var assert = require('assert');
var diamondSafe = require('./');

describe('diamond-safe', function() {
  it('should export a function', function() {
    assert.equal(typeof diamondSafe, 'function');
  });

  it('should export an object', function() {
    assert(diamondSafe);
    assert.equal(typeof diamondSafe, 'object');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      diamondSafe();
    });
  });

});