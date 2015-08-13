(function(exports) {

'use strict';

function addZero(value, digits) {
  value = value.toString();
  digits = digits || 2;

  var isNegative = value < 0;

  // Removes minus sign if number is negative
  if(isNegative) {
    value = value.slice(1);
  }

  if(value.length < digits) {
    return (isNegative ? '-' : '') + new Array(digits).join('0') + value;
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
