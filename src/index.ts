
export default function addZero(value: any, digits?: number) {
  digits = digits || 2;

  var isNegative = Number(value) < 0;
  var buffer = value.toString();
  var size = 0;

  // Strip minus sign if number is negative
  if (isNegative) {
    buffer = buffer.slice(1);
  }

  size = digits - buffer.length + 1;
  buffer = new Array(size).join('0').concat(buffer);

  // Adds back minus sign if needed
  return (isNegative ? '-' : '') + buffer;
}

module.exports = addZero;