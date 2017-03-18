var test = require('tape');
var toInteger = require('.');

test('toInteger(value)', function (t) {
  t.equal(toInteger(1.9), 1);
  t.equal(toInteger('5.5'), 5);
  t.equal(toInteger(true), 1);
  t.equal(toInteger(false), 0);
  t.equal(toInteger(NaN), 0);
  t.equal(toInteger(Infinity), 0);
  t.end();
});
