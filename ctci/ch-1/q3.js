/**
 * Chapter 1 - Question 3
 *
 * URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the
 * additional characters, and that you are given the "true" length of the string.
 */

/**
 * Replace all spaces in a string with '%20'.
 *
 * Time: O(n)
 * Additional space: O(1)
 *
 * @param  {String} str - the string/url to encode
 * @return {String} the encoded string
 */
const encodeSpaces = (str = '') => {
  if (!str || !str.length) return '';

  let chars = str.split('');
  let len = chars.length;
  let spaces = 0;

  for (let i = 0; i < len; i++) {
    if (chars[i] === ' ') {
      spaces += 1;
    }
  }

  let n = len + (spaces * 2);

  while (n-- && len--) {
    if (chars[len] === ' ') {
      chars[n] = '0';
      chars[--n] = '2';
      chars[--n] = '%';
    } else {
      chars[n] = chars[len];
    }
  }

  return chars.join('');
};

/**
 * Utility to get the expected output of the function above
 * @param  {String} str - the string to encode
 * @return {String} the encoded string
 */
const encodeWithReplace = (str = '') => str.replace(/ /g, '%20');

module.exports = {
  encodeSpaces,
  encodeWithReplace
};
