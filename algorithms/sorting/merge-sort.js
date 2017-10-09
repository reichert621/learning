/**
 * Utility to merge two arrays
 */
const merge = (left, right) => {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }

  return merged
    .concat(left.slice(i))
    .concat(right.slice(j));
};

/**
 * Merge sort
 * Complexity: O(nlog(n))
 * @param  {Array} arr - array to sort
 * @return {Array} sorted array
 */
module.exports = function mergesort(arr) {
  if (arr.length < 2) return arr;

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merge(
    mergesort(left),
    mergesort(right)
  );
};
