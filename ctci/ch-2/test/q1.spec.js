const { removeDupesSet, removeDupesRunner } = require('../q1');
const LinkedList = require('../../../data-structures/linked-list');
const { assert } = require('chai');

describe('q1', () => {
  describe('removeDupesSet', () => {
    it('removes duplicates from an unsorted linked list', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c')
        .append('c')
        .append('b')
        .append('a');

      const actual = removeDupesSet(list);
      const expected = 'a->b->c';

      assert.equal(actual.inspect(), expected);
    });

    it('does not change a linked list of unique values', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c')
        .append('d');

      const actual = removeDupesSet(list);
      const expected = 'a->b->c->d';

      assert.equal(actual.inspect(), expected);
    });

    it('handles a list of all the same value', () => {
      const list = new LinkedList()
        .append('a')
        .append('a')
        .append('a')
        .append('a');

      const actual = removeDupesSet(list);
      const expected = 'a';

      assert.equal(actual.inspect(), expected);
    });

    it('handles a list with no nodes', () => {
      const list = new LinkedList();
      const actual = removeDupesSet(list);
      const expected = '';

      assert.equal(actual.inspect(), expected);
    });

    it('handles invalid inputs', () => {
      assert.equal(removeDupesSet(), undefined);
      assert.equal(removeDupesSet(null), null);
      assert.equal(removeDupesSet(undefined), undefined);
    });
  });

  describe('removeDupesRunner', () => {
    it('removes duplicates from an unsorted linked list', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c')
        .append('c')
        .append('b')
        .append('a');

      const actual = removeDupesRunner(list);
      const expected = 'a->b->c';

      assert.equal(actual.inspect(), expected);
    });

    it('does not change a linked list of unique values', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c')
        .append('d');

      const actual = removeDupesRunner(list);
      const expected = 'a->b->c->d';

      assert.equal(actual.inspect(), expected);
    });

    it('handles a list of all the same value', () => {
      const list = new LinkedList()
        .append('a')
        .append('a')
        .append('a')
        .append('a');

      const actual = removeDupesRunner(list);
      const expected = 'a';

      assert.equal(actual.inspect(), expected);
    });

    it('handles a list with no nodes', () => {
      const list = new LinkedList();
      const actual = removeDupesRunner(list);
      const expected = '';

      assert.equal(actual.inspect(), expected);
    });

    it('handles invalid inputs', () => {
      assert.equal(removeDupesRunner(), undefined);
      assert.equal(removeDupesRunner(null), null);
      assert.equal(removeDupesRunner(undefined), undefined);
    });
  });
});
