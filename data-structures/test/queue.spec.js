const Queue = require('../queue');
const { assert } = require('chai');

describe('Queue', () => {
  it('enqueues and dequeues data correctly', () => {
    const q = new Queue()
      .enqueue('Hello')
      .enqueue('World!');

    assert.equal(q.dequeue(), 'Hello');
    assert.equal(q.dequeue(), 'World!');
  });

  it('enqueues, dequeues, and enqueues data again correctly', () => {
    const q = new Queue()
      .enqueue('This')
      .enqueue('is')
      .enqueue('a')
      .enqueue('test!');

    assert.equal(q.dequeue(), 'This');
    assert.equal(q.dequeue(), 'is');

    q.enqueue('awesome!');

    assert.equal(q.dequeue(), 'a');
    assert.equal(q.dequeue(), 'test!');
    assert.equal(q.dequeue(), 'awesome!');
  });

  it('calculates the size correctly', () => {
    const q = new Queue()
      .enqueue('This')
      .enqueue('is')
      .enqueue('a')
      .enqueue('test!');

    assert.equal(q.size(), 4);
    assert.equal(q.dequeue(), 'This');
    assert.equal(q.size(), 3);
  });

  it('returns undefined if trying to dequeue from an empty queue', () => {
    const q = new Queue();

    assert.equal(q.dequeue(), undefined);
  });

  it('enqueues correctly after multiple invalid dequeues', () => {
    const q = new Queue();

    assert.equal(q.dequeue(), undefined);
    assert.equal(q.dequeue(), undefined);
    assert.equal(q.dequeue(), undefined);
    assert.equal(q.dequeue(), undefined);

    q.enqueue('Test!');

    assert.equal(q.dequeue(), 'Test!');
  });
});
