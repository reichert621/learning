const { assert } = require('chai');
const insertionsort = require('../insertion-sort');
const {
  generateTestData,
  sortWithoutMutation
} = require('./utils');

describe('insertionsort', () => {
  const tests = generateTestData();

  return tests.map((arr, idx) => {
    it(`should sort randomized array #${idx + 1}`, () => {
      const expected = sortWithoutMutation(arr);
      const actual = insertionsort(arr);

      assert.deepEqual(actual, expected, 'array is sorted');
    });
  });
});
