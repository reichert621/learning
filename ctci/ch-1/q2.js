/**
 * Chapter 1 - Question 2
 *
 * Check Permutation: Given two strings, write a method
 * to decide if one is a permutation of the other.
 */

/**
 * Check if two strings are permutations of one another by
 * sorting them and them comparing their sorted values
 *
 * Time: O(nlog(n))
 * Additional space: O(1)
 *
 * @param  {String} str1 - the first string
 * @param  {String} str2 - the second string
 * @return {Boolean} if the strings are permutations of one another
 */
const compareSorted = (str1, str2) => {
  if (!str1 || !str1.length) return false;
  if (!str2 || !str2.length) return false;
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
};

/**
 * Check if two strings are permutations of one another by
 * sorting them and them comparing their sorted character arrays
 *
 * Time: O(nlog(n))
 * Additional space: O(1)
 *
 * @param  {String} str1 - the first string
 * @param  {String} str2 - the second string
 * @return {Boolean} if the strings are permutations of one another
 */
const compareSortedAsCharArray = (str1, str2) => {
  if (!str1 || !str1.length) return false;
  if (!str2 || !str2.length) return false;
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.split('').sort();
  const sorted2 = str2.split('').sort();

  return sorted1.every((letter, i) => letter === sorted2[i]);
};

/**
 * Check if two strings are permutations of one another by
 * counting the occurences of letters in each in an object
 *
 * Time: O(n)
 * Additional space: O(n)
 *
 * @param  {String} str1 - the first string
 * @param  {String} str2 - the second string
 * @return {Boolean} if the strings are permutations of one another
 */
const arePermutationsObj = (str1, str2) => {
  if (!str1 || !str1.length) return false;
  if (!str2 || !str2.length) return false;
  if (str1.length !== str2.length) return false;

  let seen = {};
  let len = str1.length;

  for (let i = 0; i < len; i++) {
    const letter1 = str1[i];

    seen[letter1] = (seen[letter1] || 0) + 1;
  }

  for (let j = 0; j < len; j++) {
    const letter2 = str2[j];

    if (!seen[letter2]) {
      return false;
    } else {
      seen[letter2] -= 1;
    }
  }

  return true;
};

/**
 * Check if two strings are permutations of one another by
 * counting the occurences of letters in each in a Map
 *
 * Time: O(n)
 * Additional space: O(n)
 *
 * @param  {String} str1 - the first string
 * @param  {String} str2 - the second string
 * @return {Boolean} if the strings are permutations of one another
 */
const arePermutationsMap = (str1, str2) => {
  if (!str1 || !str1.length) return false;
  if (!str2 || !str2.length) return false;
  if (str1.length !== str2.length) return false;

  let seen = new Map();
  let len = str1.length;

  for (let i = 0; i < len; i++) {
    seen.set(str1[i], (seen.get(str1[i]) || 0) + 1)
  }

  for (let j = 0; j < len; j++) {
    const letter2 = str2[j];
    const count = seen.get(str2[j]);

    if (!count) {
      return false;
    } else {
      seen.set(str2[j], count - 1);
    }
  }

  return true;
};

module.exports = {
  compareSorted,
  compareSortedAsCharArray,
  arePermutationsObj,
  arePermutationsMap
};
