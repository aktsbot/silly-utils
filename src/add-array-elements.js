/**
 * A method to add up elements in array and return sum
 * @param {array} array
 * @return {number} - sum of the items in array. if array is empty
 * or bad input returns 0
 */
const addArrayElements = array => {
  let sum = 0;
  if (typeof array !== 'object') {
    return sum;
  }

  if (array.length === 0) {
    return sum;
  }

  sum = array.reduce((tempSum, element) => tempSum + element);
  return sum;
};

module.exports = addArrayElements;
