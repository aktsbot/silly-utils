const test = require('ava');
const addArrayElements = require('../src/add-array-elements');

test('Should return 0 for empty array', t => {
  const array = [];
  const sum = addArrayElements(array);
  t.deepEqual(sum, 0);
});

test('Should return sum of elements', t => {
  const array = [1, 2, 3];
  const sum = addArrayElements(array);
  t.deepEqual(sum, 6);
});

test('Should return 0 for non array input', t => {
  const array = 'Mleh';
  const sum = addArrayElements(array);
  t.deepEqual(sum, 0);
});
