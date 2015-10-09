# add-zero [![Build Status](https://semaphoreci.com/api/v1/projects/f2401791-7ad2-4e03-907e-6fa543063669/565398/badge.svg)](https://semaphoreci.com/rafaelrinaldi/add-zero)

> Add a leading zero to a number.

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install add-zero --save
```

Via [Bower](http://bower.io):

```sh
$ bower install add-zero --save
```

## Usage

```javascript
var addZero = require('add-zero');

addZero(5); // 05
addZero(10); // 10
addZero(5, 3); // 005
addZero(100, 3); // 100
addZero(-5); // -05
addZero(-5, 3); // -005
```

### API

### `addZero(value, [digits])`

#### `value`

Type: `number` _(integer)_ or `string`  

Value in which a leading zero should be added to.

#### `digits`

Type: `number`  
Default: `2`  

Total number of digits or decimal places.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
