const assert = require('chai').assert
const _ = require('lodash');

const bubblesort = require('../bubble-sort');
const insertionsort = require('../insertion-sort');
const mergesort = require('../merge-sort');

const {
  generateTestData,
  sortWithoutMutation
} = require('./utils');

describe('Test sorting algorithms', () => {
  describe('bubble sort', () => {
    generateTestData().forEach((arr, idx) => {
      it(`should sort randomized array #${idx + 1}`, (done) => {
        const expected = sortWithoutMutation(arr);
        const input = bubblesort(arr);

        assert.deepEqual(input, expected, 'array is sorted');

        done();
      });
    });
  });

  describe('insertion sort', () => {
    generateTestData().forEach((arr, idx) => {
      it(`should sort randomized array #${idx + 1}`, (done) => {
        const expected = sortWithoutMutation(arr);
        const input = insertionsort(arr);

        assert.deepEqual(input, expected, 'array is sorted');

        done();
      });
    });
  });

  describe('merge sort', () => {
    generateTestData().forEach((arr, idx) => {
      it(`should sort randomized array #${idx + 1}`, (done) => {
        const expected = sortWithoutMutation(arr);
        const input = mergesort(arr);

        assert.deepEqual(input, expected, 'array is sorted');

        done();
      });
    });
  });
});
