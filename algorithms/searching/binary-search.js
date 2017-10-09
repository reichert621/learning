/**
 * Binary search (naive implementation)
 * Complexity: O(log(n))
 * @param  {Array} arr - array to search
 * @param  {Number|String} target - element to search for
 * @return {Number} index of element, or -1 if not found
 */
const naive = (arr, target) => {
  if (!arr || !arr.length) return -1;

  const mid = Math.floor(arr.length / 2);
  const val = arr[mid];

  if (val === target) {
    return mid;
  } else if (val > target) {
    return search(arr.slice(0, mid), target);
  } else {
    const offset = mid + 1;
    const idx = search(arr.slice(offset), target);

    return idx === -1 ? -1 : (offset + idx);
  }
};

/**
 * Binary search
 * Complexity: O(log(n))
 * @param  {Array} arr - array to search
 * @param  {Number|String} target - element to search for
 * @return {Number} index of element, or -1 if not found
 */
module.exports = function binarysearch(arr, target) {
  if (!arr || !arr.length) return -1;

  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = arr[mid];

    if (val === target) return mid;
    if (val < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};
