# tointeger [![Build Status](https://travis-ci.org/yefremov/tointeger.svg?branch=master)](https://travis-ci.org/yefremov/tointeger) [![npm version](https://badge.fury.io/js/tointeger.svg)](https://badge.fury.io/js/tointeger) [![Coverage Status](https://coveralls.io/repos/github/yefremov/tointeger/badge.svg?branch=master)](https://coveralls.io/github/yefremov/tointeger?branch=master)

Convert value to an integer value.

## Installation

```bash
$ npm install tointeger
```

## API

```js
import toInteger from 'tointeger';

toInteger(1.9);
// => 1

toInteger('5.5');
// => 5

toInteger(NaN);
// => 0

toInteger(Infinity);
// => 0

```

## Running tests

```bash
$ npm test
```

## License

[MIT](LICENSE)
