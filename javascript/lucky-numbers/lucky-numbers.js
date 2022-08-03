// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export let twoSum = (array1, array2) => Number(array1.join('')) + Number(array2.join(''));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export let luckyNumber = value => {
  let reverseValue = Number(String(value).split('').reverse().join(''));
  return value === reverseValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === '' || input === null || input === undefined) {
    return 'Required field';
  } else if(isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
