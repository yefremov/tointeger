# tointeger

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
