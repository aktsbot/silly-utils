const test = require('ava');
const last = require('../src/last');

test('Should return last element in array', t => {
  const ipArray = ['a', 'b', 'c'];
  const expected = 'c';
  const lastElement = last(ipArray);
  t.deepEqual(lastElement, expected);
});
