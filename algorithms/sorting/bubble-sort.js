/**
 * Bubble sort
 * Complexity: O(n^2)
 */

module.exports = function bubblesort(arr) {
  let len = arr.length;

  for (let n = 1; n < len; n++) {
    for (let i = 0; i < len - n; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];

  arr[i] = arr[j];
  arr[j] = tmp;

  return arr;
}
