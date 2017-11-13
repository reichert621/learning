const StackMin = require('../q2');
const { assert } = require('chai');

describe('q2', () => {
  describe('StackMin', () => {
    it('pushes and pops data correctly', () => {
      const s = new StackMin()
        .push(100)
        .push(200);

      assert.equal(s.size(), 2);
      assert.equal(s.pop(), 200);
      assert.equal(s.size(), 1);
      assert.equal(s.pop(), 100);
      assert.equal(s.size(), 0);
    });

    it('pushes, pops, and pushes data again correctly', () => {
      const s = new StackMin()
        .push(10)
        .push(20)
        .push(30)
        .push(40);

      assert.equal(s.size(), 4);
      assert.equal(s.pop(), 40);
      assert.equal(s.size(), 3);
      assert.equal(s.pop(), 30);
      assert.equal(s.size(), 2);

      s.push(100);

      assert.equal(s.size(), 3);
      assert.equal(s.pop(), 100);
      assert.equal(s.size(), 2);
    });

    it('throws an error if the data pushed is not a number', () => {
      const s = new StackMin();

      try {
        s.push('Invalid!');
      } catch (err) {
        assert.equal(err.message, 'n must be a number');
      }
    });

    it('gets the correct minimum value while pushing', () => {
      const s = new StackMin();

      s.push(9);
      assert.equal(s.min(), 9);
      s.push(2);
      assert.equal(s.min(), 2);
      s.push(5);
      assert.equal(s.min(), 2);
      s.push(1);
      assert.equal(s.min(), 1);
      s.push(7);
      assert.equal(s.min(), 1);
      s.push(-3);
      assert.equal(s.min(), -3);
    });

    it('gets the correct minimum value while popping', () => {
      const s = new StackMin()
        .push(9)
        .push(2)
        .push(5)
        .push(1)
        .push(7)
        .push(-3)
        .push(4);

      assert.equal(s.min(), -3);
      s.pop();
      s.pop();
      assert.equal(s.min(), 1);
      s.pop();
      s.pop();
      assert.equal(s.min(), 2);
    });

    it('returns undefined if trying to get the min of an empty stack', () => {
      const s = new StackMin();

      assert.equal(s.min(), undefined);
    });

    it('returns undefined if trying to pop from an empty stack', () => {
      const s = new StackMin();

      assert.equal(s.size(), 0);
      assert.equal(s.pop(), undefined);
      assert.equal(s.size(), 0);
      assert.equal(s.pop(), undefined);
      assert.equal(s.size(), 0);
    });

    it('pushes correctly after multiple invalid pops', () => {
      const s = new StackMin();

      assert.equal(s.pop(), undefined);
      assert.equal(s.pop(), undefined);
      assert.equal(s.pop(), undefined);
      assert.equal(s.pop(), undefined);

      s.push(123);

      assert.equal(s.pop(), 123);
    });
  });
});
