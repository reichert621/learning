const { assert } = require('chai');
const mergesort = require('../merge-sort');
const {
  generateTestData,
  sortWithoutMutation
} = require('./utils');

describe('mergesort', () => {
  const tests = generateTestData();

  return tests.map((arr, idx) => {
    it(`should sort randomized array #${idx + 1}`, () => {
      const expected = sortWithoutMutation(arr);
      const actual = mergesort(arr);

      assert.deepEqual(actual, expected, 'array is sorted');
    });
  });
});
