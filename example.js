const silly = require('./index');

// const array = [1, 2, 3]; // false
const array = null; // true
console.log(silly.isNullOrEmpty(array));
