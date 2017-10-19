/**
 * Chapter 1 - Question 1
 *
 * Is Unique: Implement an algorithm to determine if a string has all
 * unique characters. What if you cannot use additional data structures?
 */

/**
 * Check if a string has unique characters using an object for lookup
 *
 * Time: O(n)
 * Additional space: O(n)
 *
 * @param  {String} str - the string (character array) to check
 * @return {Boolean} if the string has unique characters
 */
const hasUniqCharsObj = (str) => {
  if (!str || !str.length) return false;

  let len = str.length;
  let seen = {};

  for (let i = 0; i < len; i++) {
    if (seen[str[i]]) {
      return false;
    }

    seen[str[i]] = true;
  }

  return true;
};

/**
 * Check if a string has unique characters using a Set for lookup
 *
 * Time: O(n)
 * Additional space: O(n)
 *
 * @param  {String} str - the string (character array) to check
 * @return {Boolean} if the string has unique characters
 */
const hasUniqCharsSet = (str) => {
  if (!str || !str.length) return false;

  let len = str.length;
  let seen = new Set();

  for (let i = 0; i < len; i++) {
    if (seen.has(str[i])) {
      return false;
    }

    seen.add(str[i]);
  }

  return true;
};

module.exports = {
  hasUniqCharsObj,
  hasUniqCharsSet
};
