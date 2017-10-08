const LinkedList = require('../linked-list');
const { assert } = require('chai');

describe('LinkedList', () => {
  describe('append', () => {
    it('appends correctly', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c');

      const head = list.getHead();
      const a = head;
      const b = head.next;
      const c = b.next;

      assert.equal(a.data, 'a');
      assert.equal(a.next, b);
      assert.equal(a.prev, null);

      assert.equal(b.data, 'b');
      assert.equal(b.next, c);
      assert.equal(b.prev, a);

      assert.equal(c.data, 'c');
      assert.equal(c.next, null);
      assert.equal(c.prev, b);

      assert.equal(list.inspect(), 'a->b->c');
    });
  });

  describe('remove', () => {
    it('removes the head', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c');

      const removed = list.remove('a');
      const head = list.getHead();
      const length = list.getLength();

      assert.equal(removed, true);
      assert.equal(length, 2);
      assert.equal(head.data, 'b');
      assert.equal(list.inspect(), 'b->c');
    });

    it('removes the only node in a list', () => {
      const list = new LinkedList().append('a')
      const removed = list.remove('a');
      const head = list.getHead();
      const length = list.getLength();

      assert.equal(removed, true);
      assert.equal(length, 0);
      assert.equal(head, null);
      assert.equal(list.inspect(), '');
    });

    it('removes from the middle', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c');

      const removed = list.remove('b');
      const head = list.getHead();
      const length = list.getLength();

      assert.equal(removed, true);
      assert.equal(length, 2);
      assert.equal(head.data, 'a');
      assert.equal(head.next.data, 'c');
      assert.equal(list.inspect(), 'a->c');
    });

    it('removes the tail', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c');

      const removed = list.remove('c');
      const head = list.getHead();
      const length = list.getLength();

      assert.equal(removed, true);
      assert.equal(length, 2);
      assert.equal(head.data, 'a');
      assert.equal(head.next.data, 'b');
      assert.equal(head.next.next, null);
      assert.equal(list.inspect(), 'a->b');
    });

    it('returns false if data was not found', () => {
      const list = new LinkedList()
        .append('a')
        .append('b')
        .append('c');

      const removed = list.remove('d');
      const length = list.getLength();

      assert.equal(removed, false);
      assert.equal(length, 3);
      assert.equal(list.inspect(), 'a->b->c');
    });
  });
});
