'use strict';

var addZero = require('./');
var test = require('tape');

// console.log(addZero(5), '05');
// console.log(addZero(10), '10');
// console.log(addZero(5, 3), '005');
// console.log(addZero(100, 3), '100');
// console.log(addZero(0), '00');
// console.log(addZero(-5), '-05');
// console.log(addZero(-10), '-10');
// console.log(addZero(-5, 3), '-005');

test('add zero', function(t) {
  t.deepEqual(addZero(5), '05', 'default decimal places should be 2');
  t.deepEqual(addZero(10), '10', 'only add zero if not enough decimal places');
  t.deepEqual(addZero(5, 3), '005', 'test 3 decimal places');
  t.deepEqual(addZero(100, 3), '100', 'test 3 decimal places max digits');
  t.deepEqual(addZero(20, 3), '020', 'test 2 digits number within 3 digit decimal places');
  t.deepEqual(addZero(0), '00', 'test zero value');
  t.deepEqual(addZero(-5), '-05', 'test negative value with default decimal places');
  t.deepEqual(addZero(-10), '-10', 'test negative value when not enough decimal places');
  t.deepEqual(addZero(-5, 3), '-005', 'test negative value with 3 decimal places');
  t.end();
});

