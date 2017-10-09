/**
 * Hash Table Node
 * @class
 */
class Node {
  /**
   * Create a node
   * @constructor
   * @param {String} key
   * @param {Any} data
   */
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Hash Table
 * @class
 */
module.exports = class HashTable {
  /**
   * Create a hash table
   * @constructor
   */
  constructor(max) {
    this.buckets = [];
    this.max = max || 1000;
  }

  /**
   * Simple non-crypto hashing algorithm used to hash keys,
   * which determines which bucket the value will be placed in.
   * (A javascript implementation of Java's 32bitint hash.)
   * @param  {String|Integer} key
   * @return {Integer} hash
   */
  hash(key) {
    if (Number.isInteger(key)) {
      return key;
    }

    let hashCode = 0;

    for (let i = 0; i < key.length; i += 1) {
      let char = key.charCodeAt(i);

      hashCode = ((hashCode << 5) - hashCode) + char;
      hashCode = hashCode & hashCode;
    }

    return Math.abs(hashCode);
  }

  /**
   * Set a value at the given key
   * @param  {String|Integer} key
   * @param  {Any} val
   * @return {HashTable} this
   */
  set(key, val) {
    const node = new Node(key, val);
    const hash = this.hash(key) % this.max;

    if (!this.buckets[hash]) {
      this.buckets[hash] = node;

      return this;
    }

    let tail = this.buckets[hash];
    let match = null;

    while (!match && tail.next) {
      if (tail.key === key) {
        match = tail;
      } else {
        tail = tail.next;
      }
    }

    if (match) {
      match.data = val;
    } else {
      tail.next = node;
      node.prev = tail;
    }

    return this;
  }

  /**
   * Get the value at the given key
   * @param  {String|Integer} key
   * @return {Any} value
   */
  get(key) {
    const hash = this.hash(key) % this.max;

    let current = this.buckets[hash];

    if (!current) return undefined;
    if (current.key === key) return current.data;

    while (current.next) {
      current = current.next;

      if (current.key === key) {
        return current.data;
      }
    }

    return undefined;
  }
}
