(function(exports) {

  'use strict';

  function addZero(value, digits) {
    digits = digits || 2;

    var isNegative = Number(value) < 0;
    var buffer = value.toString();

    // Strip minus sign if number is negative
    if(isNegative) {
      buffer = buffer.slice(1);
    }

    if(buffer.length < digits) {
      buffer = new Array(digits).join('0') + buffer;
    }

    // Adds back minus sign if needed
    return (isNegative ? '-' : '') + buffer;
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return addZero; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = addZero;
  } else {
    exports.addZero = addZero;
  }

})(this);
