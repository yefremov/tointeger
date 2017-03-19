# tointeger

Convert value to an integer value.

Please note that this is not an ecma262 "tointeger" implementation,
but just a safer version of what you usually want from `parseInt()`
to a value to integer value.

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
