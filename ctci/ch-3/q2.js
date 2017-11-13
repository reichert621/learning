/**
 * Chapter 3 - Question 2
 *
 * Stack Min: How would you design a stack which, in addition to
 * push and pop, has a function min which returns the minimum element?
 * Push, pop and min should all operate in O(1) time.
 */

/**
 * Utility function to check if the given input is a Number type
 * @param  {Any} n
 * @return {Boolean} if n is a number
 */
const isNumber = (n) => typeof n === 'number';

/**
 * StackMin keeps track of the minimum value at each point in
 * the stack so that we can access it in constant O(1) time
 * @class
 */
class StackMin {
  /**
   * Create a stack
   * @constructor
   */
  constructor() {
    this._storage = {};
    this._size = 0;
    this._min = {};
  }

  /**
   * Push a number onto the stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @param  {Number} n
   * @return {StackMin} this
   */
  push(n) {
    if (!isNumber(n)) {
      throw new Error('n must be a number');
    }

    const index = this._size;
    const min = this._min[index - 1] || Infinity;

    this._storage[index] = n;
    this._min[index] = n < min ? n : min;
    this._size = index + 1;

    return this;
  }

  /**
   * Pop a number off of the stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @return {Number} the popped number
   */
  pop() {
    if (!this._size) return;

    const index = this._size - 1;
    const n = this._storage[index];

    delete this._storage[index];
    delete this._min[index];
    this._size = index;

    return n;
  }

  /**
   * Get the minimum value of the stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @return {Number} minimum
   */
  min() {
    return this._min[this._size - 1];
  }

  /**
   * Get the size of the stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @return {Number} size
   */
  size() {
    return this._size;
  }
}

module.exports = StackMin;
