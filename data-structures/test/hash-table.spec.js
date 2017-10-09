const HashTable = require('../hash-table');
const { assert } = require('chai');

describe('HashTable', () => {
  describe('get', () => {
    it('gets one value correctly', () => {
      const h = new HashTable().set('name', 'Alex');
      const name = h.get('name');

      assert.equal(name, 'Alex');
    });

    it('gets multiple values correctly', () => {
      const h = new HashTable()
        .set('name', 'Alex')
        .set('location', 'San Francisco')
        .set('zipCode', 94103);

      const name = h.get('name');
      const location = h.get('location');
      const zipCode = h.get('zipCode');

      assert.equal(name, 'Alex');
      assert.equal(location, 'San Francisco');
      assert.equal(zipCode, 94103);
    });
  });

  describe('set', () => {
    it('overrides keys correctly', () => {
      const h = new HashTable()
        .set('location', 'San Jose')
        .set('location', 'Los Angeles')
        .set('location', 'San Francisco');

      const location = h.get('location');

      assert.equal(location, 'San Francisco');
    });

    it('handles collisions', () => {
      const maxBucketCount = 3;
      const h = new HashTable(maxBucketCount)
        .set('name', 'Alex')
        .set('location', 'San Francisco')
        .set('zipCode', 94103)
        .set('job', 'Software Engineer');

      const name = h.get('name');
      const location = h.get('location');
      const zipCode = h.get('zipCode');
      const job = h.get('job');

      assert.equal(name, 'Alex');
      assert.equal(location, 'San Francisco');
      assert.equal(zipCode, 94103);
      assert.equal(job, 'Software Engineer');
    });

    it('allows falsey values', () => {
      const h = new HashTable()
        .set('name', false)
        .set('location', null)
        .set('zipCode', 0)
        .set('job', '');

      const name = h.get('name');
      const location = h.get('location');
      const zipCode = h.get('zipCode');
      const job = h.get('job');

      assert.equal(name, false);
      assert.equal(location, null);
      assert.equal(zipCode, 0);
      assert.equal(job, '');
    });

    it('allows numeric keys', () => {
      const h = new HashTable()
        .set(0, 'foo')
        .set(1, 'bar')
        .set(2, 'baz');

      const foo = h.get(0);
      const bar = h.get(1);
      const baz = h.get(2);

      assert.equal(foo, 'foo');
      assert.equal(bar, 'bar');
      assert.equal(baz, 'baz');
    });
  });
});
