/**
 * Get last element in array
 * @param {Array} array
 * @return {*} - last element in array
 */
const last = array => {
  const lastElement = array[array.length - 1];
  return lastElement;
};

module.exports = last;
