/**
 * Chapter 2 - Question 1
 *
 * Remove Dupes: Write code to remove duplicates from an unsorted linked list.
 * How would you solve this problem if a temporary buffer is not allowed?
 */

/**
 * Remove duplicates from a linked list using a Set of all the seen values
 *
 * Time: O(n)
 * Additional space: O(n)
 *
 * @param  {LinkedList} list - the linked list to remove duplicates from
 * @return {LinkedList} the updated linked list
 */
const removeDupesSet = (list) => {
  if (!list || !list.head) {
    return list;
  }

  let current = list.head;
  let seen = new Set([current.data]);

  while (current.next) {
    let val = current.next.data;

    if (seen.has(val)) {
      current.next = current.next.next;
    } else {
      seen.add(val);
      current = current.next;
    }
  }

  return list;
};

/**
 * Remove duplicates from a linked list using a runner
 *
 * Time: O(n^2)
 * Additional space: O(1)
 *
 * @param  {LinkedList} list - the linked list to remove duplicates from
 * @return {LinkedList} the updated linked list
 */
const removeDupesRunner = (list) => {
  if (!list || !list.head) {
    return list;
  }

  let current = list.head;

  while (current) {
    let runner = current;

    while (runner.next) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return list;
};

module.exports = {
  removeDupesSet,
  removeDupesRunner
};
