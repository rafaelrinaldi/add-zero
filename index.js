(function(exports) {

'use strict';

function addZero(value, digits) {
  digits = digits || 2;

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
