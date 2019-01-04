const test = require('ava')
const isNullOrEmpty = require('../src/is-null-or-empty')

test('checks if a variable is null or empty', t => {
  const item = ''
  const status = isNullOrEmpty(item)
  t.deepEqual(status, true)
})
