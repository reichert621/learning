const { removeMiddleNode } = require('../q3');
const LinkedList = require('../../../data-structures/linked-list');
const { assert } = require('chai');

/**
 * Utility function to convert an array to a linked list
 * @param  {Array} arr
 * @return {LinkedList}
 */
const getTestLinkedList = (arr) => {
  const ll = new LinkedList();

  return arr.reduce((list, el) => {
    return list.append(el);
  }, ll);
};

describe('q3', () => {
  describe('removeMiddleNode', () => {
    it('removes a middle node from a linked list', () => {
      const list = getTestLinkedList(['a', 'b', 'c', 'd']);
      const node = list.getNode(2);

      removeMiddleNode(node);

      const expected = 'a->b->d';

      assert.equal(list.inspect(), expected);
    });

    it('removes multiple middle nodes from a linked list', () => {
      const list = getTestLinkedList(['a', 'b', 'c', 'd', 'e', 'f']);

      removeMiddleNode(list.getNode(1));
      removeMiddleNode(list.getNode(1));
      removeMiddleNode(list.getNode(1));
      removeMiddleNode(list.getNode(1));

      const expected = 'a->f';

      assert.equal(list.inspect(), expected);
    });

    it('handles an invalid node', () => {
      const list = getTestLinkedList(['a']);
      const node = list.getNode(0);

      try {
        removeMiddleNode(node);
      } catch (err) {
        const expected = 'Invalid node';

        assert.equal(err.message, expected);
      }
    });
  });
});
