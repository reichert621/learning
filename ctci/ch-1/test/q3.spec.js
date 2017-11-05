const { assert } = require('chai');
const { encodeSpaces, encodeWithReplace } = require('../q3');

describe('q3', () => {
  const tests = [
    'nospaces',
    ' ',
    '   ',
    ' first space',
    'last space ',
    '  surrounded by spaces  ',
    'middle   space',
    ' l o t s   o f   s p a c e ',
    'http://www.google.com/',
    'http://www.google.com/search?q=this should be encoded'
  ];

  describe('encodeSpaces', () => {
    it('should handle null/undefined inputs', () => {
      assert.equal(encodeSpaces(null), '');
      assert.equal(encodeSpaces(undefined), '');
      assert.equal(encodeSpaces(), '');
    });

    return tests.map(test => {
      it(`tests the string '${test}'`, () => {
        const actual = encodeSpaces(test);
        const expected = encodeWithReplace(test);

        assert.equal(actual, expected);
      });
    });
  });
});
