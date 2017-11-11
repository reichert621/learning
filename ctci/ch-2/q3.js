/**
 * Delete Middle Node: Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily the exact middle)
 * of a singly linked list, given only access to that node.
 *
 * Example
 * Input: the node c from the linked list a->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 */

/**
 * Remove a middle node from a linked list by moving the data from the
 * next node to the given node, and then updating the pointer of the given
 * node to skip the next node and point to the one after that.
 *
 * Time: O(1)
 * Additional space: O(1)
 *
 * @param {Node} node - the middle node to remove
 */
const removeMiddleNode = (node) => {
  if (!node || !node.next) {
    throw new Error('Invalid node');
  }

  node.data = node.next.data;
  node.next = node.next.next;
};

module.exports = {
  removeMiddleNode
};
