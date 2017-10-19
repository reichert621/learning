const { hasUniqCharsObj, hasUniqCharsSet } = require('../q1');
const { assert } = require('chai');

describe('q1', () => {
  describe('hasUniqCharsObj', () => {
    it('determines if all the characters of a string are unique', () => {
      assert.equal(hasUniqCharsObj('abc'), true);
      assert.equal(hasUniqCharsObj('aabbcc'), false);
      assert.equal(hasUniqCharsObj('test'), false);
      assert.equal(hasUniqCharsObj('alex'), true);
      assert.equal(hasUniqCharsObj('alexander'), false);
    });

    it('returns false for an empty string', () => {
      assert.equal(hasUniqCharsObj(''), false);
    });

    it('returns false for null input', () => {
      assert.equal(hasUniqCharsObj(null), false);
    });
  });

  describe('hasUniqCharsSet', () => {
    it('determines if all the characters of a string are unique', () => {
      assert.equal(hasUniqCharsSet('abc'), true);
      assert.equal(hasUniqCharsSet('aabbcc'), false);
      assert.equal(hasUniqCharsSet('test'), false);
      assert.equal(hasUniqCharsSet('alex'), true);
      assert.equal(hasUniqCharsSet('alexander'), false);
    });

    it('returns false for an empty string', () => {
      assert.equal(hasUniqCharsSet(''), false);
    });

    it('returns false for null input', () => {
      assert.equal(hasUniqCharsSet(null), false);
    });
  });
});
