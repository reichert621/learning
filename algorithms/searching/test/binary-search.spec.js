const { assert } = require('chai');
const binarysearch = require('../binary-search');

describe('binarysearch', () => {
  it('finds the correct index in an array of even length', () => {
    const arr = [1, 2, 3, 4];

    assert.equal(binarysearch(arr, 1), 0);
    assert.equal(binarysearch(arr, 2), 1);
    assert.equal(binarysearch(arr, 3), 2);
    assert.equal(binarysearch(arr, 4), 3);
  });

  it('finds the correct index in an array of odd length', () => {
    const arr = [1, 2, 3, 4, 5];

    assert.equal(binarysearch(arr, 1), 0);
    assert.equal(binarysearch(arr, 2), 1);
    assert.equal(binarysearch(arr, 3), 2);
    assert.equal(binarysearch(arr, 4), 3);
    assert.equal(binarysearch(arr, 5), 4);
  });

  it('finds the correct index in an array of characters', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];

    assert.equal(binarysearch(arr, 'a'), 0);
    assert.equal(binarysearch(arr, 'b'), 1);
    assert.equal(binarysearch(arr, 'c'), 2);
    assert.equal(binarysearch(arr, 'd'), 3);
    assert.equal(binarysearch(arr, 'e'), 4);
  });

  it('finds the correct index in an array of one element', () => {
    const arr = [1];

    assert.equal(binarysearch(arr, 1), 0);
  });

  it('returns -1 if the array is empty', () => {
    const arr = [];

    assert.equal(binarysearch(arr, 1), -1);
  });
});
