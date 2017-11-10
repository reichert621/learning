const { findKthToLast } = require('../q2');
const LinkedList = require('../../../data-structures/linked-list');
const { assert } = require('chai');

describe('q2', () => {
  describe('findKthToLast', () => {
    it('finds the kth to last element in a linked list', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c')
        .append('d');

      assert.equal(findKthToLast(list, 1), 'd');
      assert.equal(findKthToLast(list, 2), 'c');
      assert.equal(findKthToLast(list, 3), 'b');
      assert.equal(findKthToLast(list, 4), 'a');
      assert.equal(findKthToLast(list, 5), null);
      assert.equal(findKthToLast(list, 0), null);
    });

    it('handles a list with just one (head) node', () => {
      const list = new LinkedList().append('a');

      assert.equal(findKthToLast(list, 1), 'a');
    });

    it('handles a list with no nodes', () => {
      const list = new LinkedList();

      assert.equal(findKthToLast(list, 0), null);
      assert.equal(findKthToLast(list, 1), null);
    });

    it('returns null for an invalid list input', () => {
      assert.equal(findKthToLast(), null);
      assert.equal(findKthToLast(null), null);
      assert.equal(findKthToLast(undefined), null);
    });

    it('returns null for an invalid k input', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c');

      assert.equal(findKthToLast(list, -1), null);
      assert.equal(findKthToLast(list, 0), null);
      assert.equal(findKthToLast(list, 10), null);
    });
  });
});
