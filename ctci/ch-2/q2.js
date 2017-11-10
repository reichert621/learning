/**
 * Chapter 2 - Question 2
 *
 * Return Kth to Last: Implement an algorithm to find
 * the kth to last element of a singly linked list.
 */

/**
 * Find the kth to last element in a linked list by walking one
 * pointer k nodes ahead of the head, and then walking both ahead
 * until the first pointer reaches the end, leaving the second
 * pointer at the kth to last element in the linked list.
 *
 * Time: O(n)
 * Additional space: O(1)
 *
 * @param  {LinkedList} list - the linked list to search
 * @param  {Number} k - the offset from the last element
 * @return {Node.data} the data stored at the kth to last element
 */
const findKthToLast = (list, k) => {
  if (!list || !list.head || !k || k < 1) {
    return null;
  }

  let kth = list.head;
  let runner = kth;

  for (let i = 0; i < (k - 1); i++) {
    if (runner.next) {
      runner = runner.next;
    } else {
      return null;
    }
  }

  while (runner.next) {
    runner = runner.next;
    kth = kth.next;
  }

  return kth.data;
};

module.exports = {
  findKthToLast
};
