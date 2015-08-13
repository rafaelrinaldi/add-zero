'use strict';

var addZero = require('./');
var test = require('tape');

test('add zero', function(t) {
  t.deepEqual(addZero(5), '05', 'default decimal places should be 2');
  t.end();
});
