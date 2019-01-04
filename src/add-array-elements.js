/**
 * A method to add up elements in array and return sum
 * @param {array} array
 * @return {number} - sum of the items in array. if array is empty
 * or bad input returns 0
 */
let addArrayElements = array => {
  let sum = 0
  if (typeof array !== 'object') {
    return sum
  }

  if (array.length === 0) {
    return sum
  }

  for (let item of array) {
    sum += item
  }
  return sum
}

module.exports = addArrayElements
