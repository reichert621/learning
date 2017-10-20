const { assert } = require('chai');
const {
  compareSorted,
  compareSortedAsCharArray,
  arePermutationsObj,
  arePermutationsMap
} = require('../q2');

describe('q2', () => {
  describe('compareSorted', () => {
    it('returns true if two strings are permutations of one another', () => {
      assert.equal(compareSorted('test', 'etts'), true);
      assert.equal(compareSorted('alex', 'exal'), true);
      assert.equal(compareSorted('abcdef', 'acebdf'), true);
    });

    it('returns false if two strings are not permutations of one another', () => {
      assert.equal(compareSorted('test', 'tast'), false);
      assert.equal(compareSorted('alex', 'ecal'), false);
      assert.equal(compareSorted('abcdef', 'bcdefg'), false);
    });

    it('returns false if one string is missing', () => {
      assert.equal(compareSorted('test', ''), false);
      assert.equal(compareSorted('', 'ecal'), false);
      assert.equal(compareSorted(null, undefined), false);
    });

    it('returns false if the two strings are different lengths', () => {
      assert.equal(compareSorted('test', 'testing'), false);
      assert.equal(compareSorted('alexander', 'alex'), false);
      assert.equal(compareSorted('abc', 'abcdefg'), false);
    });
  });

  describe('compareSortedAsCharArray', () => {
    it('returns true if two strings are permutations of one another', () => {
      assert.equal(compareSortedAsCharArray('test', 'etts'), true);
      assert.equal(compareSortedAsCharArray('alex', 'exal'), true);
      assert.equal(compareSortedAsCharArray('abcdef', 'acebdf'), true);
    });

    it('returns false if two strings are not permutations of one another', () => {
      assert.equal(compareSortedAsCharArray('test', 'tast'), false);
      assert.equal(compareSortedAsCharArray('alex', 'ecal'), false);
      assert.equal(compareSortedAsCharArray('abcdef', 'bcdefg'), false);
    });

    it('returns false if one string is missing', () => {
      assert.equal(compareSortedAsCharArray('test', ''), false);
      assert.equal(compareSortedAsCharArray('', 'ecal'), false);
      assert.equal(compareSortedAsCharArray(null, undefined), false);
    });

    it('returns false if the two strings are different lengths', () => {
      assert.equal(compareSortedAsCharArray('test', 'testing'), false);
      assert.equal(compareSortedAsCharArray('alexander', 'alex'), false);
      assert.equal(compareSortedAsCharArray('abc', 'abcdefg'), false);
    });
  });

  describe('arePermutationsObj', () => {
    it('returns true if two strings are permutations of one another', () => {
      assert.equal(arePermutationsObj('test', 'etts'), true);
      assert.equal(arePermutationsObj('alex', 'exal'), true);
      assert.equal(arePermutationsObj('abcdef', 'acebdf'), true);
    });

    it('returns false if two strings are not permutations of one another', () => {
      assert.equal(arePermutationsObj('test', 'tast'), false);
      assert.equal(arePermutationsObj('alex', 'ecal'), false);
      assert.equal(arePermutationsObj('abcdef', 'bcdefg'), false);
    });

    it('returns false if one string is missing', () => {
      assert.equal(arePermutationsObj('test', ''), false);
      assert.equal(arePermutationsObj('', 'ecal'), false);
      assert.equal(arePermutationsObj(null, undefined), false);
    });

    it('returns false if the two strings are different lengths', () => {
      assert.equal(arePermutationsObj('test', 'testing'), false);
      assert.equal(arePermutationsObj('alexander', 'alex'), false);
      assert.equal(arePermutationsObj('abc', 'abcdefg'), false);
    });
  });

  describe('arePermutationsMap', () => {
    it('returns true if two strings are permutations of one another', () => {
      assert.equal(arePermutationsMap('test', 'etts'), true);
      assert.equal(arePermutationsMap('alex', 'exal'), true);
      assert.equal(arePermutationsMap('abcdef', 'acebdf'), true);
    });

    it('returns false if two strings are not permutations of one another', () => {
      assert.equal(arePermutationsMap('test', 'tast'), false);
      assert.equal(arePermutationsMap('alex', 'ecal'), false);
      assert.equal(arePermutationsMap('abcdef', 'bcdefg'), false);
    });

    it('returns false if one string is missing', () => {
      assert.equal(arePermutationsMap('test', ''), false);
      assert.equal(arePermutationsMap('', 'ecal'), false);
      assert.equal(arePermutationsMap(null, undefined), false);
    });

    it('returns false if the two strings are different lengths', () => {
      assert.equal(arePermutationsMap('test', 'testing'), false);
      assert.equal(arePermutationsMap('alexander', 'alex'), false);
      assert.equal(arePermutationsMap('abc', 'abcdefg'), false);
    });
  });
});
