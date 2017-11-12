const TripleStack = require('../q1');
const { assert } = require('chai');

describe('q1', () => {
  describe('TripleStack', () => {
    it('pushes and pops correctly', () => {
      const s = new TripleStack()
        .push(0, 'a')
        .push(0, 'b')
        .push(0, 'c')
        .push(1, '1')
        .push(1, '2')
        .push(1, '3');

      assert.equal(s.pop(0), 'c');
      assert.equal(s.pop(0), 'b');
      assert.equal(s.pop(0), 'a');
      assert.equal(s.size(0), 0);

      assert.equal(s.pop(1), '3');
      assert.equal(s.pop(1), '2');
      assert.equal(s.pop(1), '1');
      assert.equal(s.size(1), 0);
    });

    it('pushes, pops, and pushes data again correctly', () => {
      const s = new TripleStack()
        .push(2, 'This')
        .push(2, 'is')
        .push(2, 'a')
        .push(2, 'test!');

      assert.equal(s.size(2), 4);
      assert.equal(s.pop(2), 'test!');
      assert.equal(s.size(2), 3);
      assert.equal(s.pop(2), 'a');
      assert.equal(s.size(2), 2);

      s.push(2, 'awesome!');

      assert.equal(s.size(2), 3);
      assert.equal(s.pop(2), 'awesome!');
      assert.equal(s.size(2), 2);
    });

    it('returns undefined if trying to pop from an empty stack', () => {
      const s = new TripleStack()
        .push(0, 'This')
        .push(0, 'is')
        .push(0, 'a')
        .push(0, 'test!');

      assert.equal(s.size(1), 0);
      assert.equal(s.pop(1), undefined);
      assert.equal(s.size(1), 0);
      assert.equal(s.pop(1), undefined);
      assert.equal(s.size(1), 0);
    });

    it('pushes correctly after multiple invalid pops', () => {
      const s = new TripleStack();

      assert.equal(s.pop(2), undefined);
      assert.equal(s.pop(2), undefined);
      assert.equal(s.pop(2), undefined);
      assert.equal(s.pop(2), undefined);

      s.push(2, 'Test!');

      assert.equal(s.pop(2), 'Test!');
    });

    it('peeks without affecting the data', () => {
      const s = new TripleStack()
        .push(0, 'a')
        .push(0, 'b')
        .push(1, '1')
        .push(1, '2')
        .push(2, ':(')
        .push(2, ':)');

      assert.equal(s.peek(0), 'b');
      assert.equal(s.size(0), 2);

      assert.equal(s.peek(1), '2');
      assert.equal(s.size(1), 2);

      assert.equal(s.peek(2), ':)');
      assert.equal(s.size(2), 2);

    });
  });
});
