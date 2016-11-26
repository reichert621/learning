/**
 * Insertion sort
 * Complexity: O(n^2)
 */

module.exports = function insertionsort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}
