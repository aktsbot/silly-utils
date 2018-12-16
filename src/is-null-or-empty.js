/**
 * A method to check if a variable in null, undefined or empty
 * @param {*} input
 * @return {boolean} - true when input is null, undefined or empty
 */
let isNullOrEmpty = input => {
  return input === undefined || input === null || input === '';
};

module.exports = isNullOrEmpty;
