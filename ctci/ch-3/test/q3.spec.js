const SetOfStacks = require('../q3');
const { assert } = require('chai');

describe('q3', () => {
  describe('SetOfStacks', () => {
    it('pushes and pops correctly', () => {
      const s = new SetOfStacks(4)
        .push('a')
        .push('b')
        .push('c')
        .push('d')
        .push('e')
        .push('f')
        .push('g');

      assert.equal(s.size(), 7);
      assert.equal(s.count(), 2);
      assert.equal(s.pop(), 'g');
      assert.equal(s.pop(), 'f');
      assert.equal(s.pop(), 'e');
      assert.equal(s.size(), 4);
      assert.equal(s.count(), 1);
    });

    it('handles a set of stacks with a max capacity of 1', () => {
      const max = 1;
      const s = new SetOfStacks(max)
        .push('This')
        .push('is')
        .push('a')
        .push('test!');

      assert.equal(s.size(), 4);
      assert.equal(s.count(), 4);
      assert.equal(s.pop(), 'test!');
      assert.equal(s.size(), 3);
      assert.equal(s.count(), 3);
      assert.equal(s.pop(), 'a');
      assert.equal(s.size(), 2);
      assert.equal(s.count(), 2);

      s.push('awesome!');

      assert.equal(s.size(), 3);
      assert.equal(s.count(), 3);
      assert.equal(s.pop(), 'awesome!');
      assert.equal(s.size(), 2);
      assert.equal(s.count(), 2);
    });

    it('returns undefined if trying to pop from an empty stack', () => {
      const s = new SetOfStacks();

      assert.equal(s.size(), 0);
      assert.equal(s.pop(), undefined);
      assert.equal(s.size(), 0);
      assert.equal(s.pop(), undefined);
      assert.equal(s.size(), 0);
    });

    it('pushes correctly after multiple invalid pops', () => {
      const s = new SetOfStacks();

      assert.equal(s.pop(), undefined);
      assert.equal(s.pop(), undefined);
      assert.equal(s.pop(), undefined);
      assert.equal(s.pop(), undefined);

      s.push('Test!');

      assert.equal(s.pop(), 'Test!');
    });

    it('throws an error for invalid max capacities', () => {
      return [0, -1, null, false].map(invalid => {
        try {
          const a = new SetOfStacks(invalid);
        } catch (err) {
          const expected = 'Max capacity must be at least one';

          assert.equal(err.message, expected);
        }
      });
    });
  });
});
