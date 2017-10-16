const Stack = require('../stack');
const { assert } = require('chai');

describe('Stack', () => {
  it('pushes and pops data correctly', () => {
    const s = new Stack()
      .push('Hello')
      .push('World!');

    assert.equal(s.size(), 2);
    assert.equal(s.pop(), 'World!');
    assert.equal(s.size(), 1);
    assert.equal(s.pop(), 'Hello');
    assert.equal(s.size(), 0);
  });

  it('pushes, pops, and pushes data again correctly', () => {
    const s = new Stack()
      .push('This')
      .push('is')
      .push('a')
      .push('test!');

    assert.equal(s.size(), 4);
    assert.equal(s.pop(), 'test!');
    assert.equal(s.size(), 3);
    assert.equal(s.pop(), 'a');
    assert.equal(s.size(), 2);

    s.push('awesome!');

    assert.equal(s.size(), 3);
    assert.equal(s.pop(), 'awesome!');
    assert.equal(s.size(), 2);
  });

  it('returns undefined if trying to pop from an empty stack', () => {
    const s = new Stack();

    assert.equal(s.size(), 0);
    assert.equal(s.pop(), undefined);
    assert.equal(s.size(), 0);
    assert.equal(s.pop(), undefined);
    assert.equal(s.size(), 0);
  });

  it('pushes correctly after multiple invalid pops', () => {
    const s = new Stack();

    assert.equal(s.pop(), undefined);
    assert.equal(s.pop(), undefined);
    assert.equal(s.pop(), undefined);
    assert.equal(s.pop(), undefined);

    s.push('Test!');

    assert.equal(s.pop(), 'Test!');
  });
});
