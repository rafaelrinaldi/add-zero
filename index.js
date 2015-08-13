(function(exports) {

'use strict';

function addZero(value, digits) {
  value = value.toString();
  digits = digits || 2;

  if(value.length < digits) {
    return new Array(digits).join('0') + value;
  }

  return value;
}

if(typeof define === 'function' && define.amd) {
  define(function() { return addZero; });
} else if(typeof module !== 'undefined' && module.exports) {
  module.exports = addZero;
} else {
  exports.addZero = addZero;
}

})(this);
