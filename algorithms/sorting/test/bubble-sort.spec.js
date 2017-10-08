const { assert } = require('chai');
const bubblesort = require('../bubble-sort');
const {
  generateTestData,
  sortWithoutMutation
} = require('./utils');

describe('bubblesort', () => {
  const tests = generateTestData();

  return tests.map((arr, idx) => {
    it(`should sort randomized array #${idx + 1}`, () => {
      const expected = sortWithoutMutation(arr);
      const actual = bubblesort(arr);

      assert.deepEqual(actual, expected, 'array is sorted');
    });
  });
});
