const test = require('ava');
const isNullOrEmpty = require('../src/is-null-or-empty');

test('checks if a variable is empty string', t => {
  const item = '';
  const status = isNullOrEmpty(item);
  t.deepEqual(status, true);
});

test('checks if a variable is null', t => {
  const item = null;
  const status = isNullOrEmpty(item);
  t.deepEqual(status, true);
});

test('checks if a variable is undefined', t => {
  const item = undefined;
  const status = isNullOrEmpty(item);
  t.deepEqual(status, true);
});
