/**
 * Chapter 3 - Question 1
 *
 * Three in One: Describe how you could use a single array to implement three stacks.
 */

/**
 * TripleStack holds three stacks in one array by storing the first three
 * values at indexes 0, 1, and 2, and then storing subsequent data at those
 * indexes offset by three multiplied by the current size of each stack.
 * @class
 */
class TripleStack {
  /**
   * Create a triple stack
   * @constructor
   */
  constructor() {
    this._storage = [];
    this._sizes = [0, 0, 0];
  }

  /**
   * Push data onto the given stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @param  {Number} stack - the stack index
   * @param  {Any} data - the data to store
   * @return {TripleStack} this instance
   */
  push(stack, data) {
    const size = this._sizes[stack];
    const index = (size * 3) + stack;

    this._storage[index] = data;
    this._sizes[stack] = size + 1;

    return this;
  }

  /**
   * Pop data off of the given stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @param  {Number} stack - the stack index
   * @return {Any} the popped data
   */
  pop(stack) {
    if (this._sizes[stack] < 1) return;

    const size = this._sizes[stack] - 1;
    const index = (size * 3) + stack;
    const data = this._storage[index];

    delete this._storage[index];
    this._sizes[stack] = size;

    return data;
  }

  /**
   * Peek at the top of the given stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @param  {Number} stack - the stack index
   * @return {Any} the data at the top of the stack
   */
  peek(stack) {
    if (this._sizes[stack] < 1) return;

    const size = this._sizes[stack] - 1;
    const index = (size * 3) + stack;
    const data = this._storage[index];

    return data;
  }

  /**
   * Get the size of the given stack
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @param  {Number} stack - the stack index
   * @return {Number} the size of the stack
   */
  size(stack) {
    return this._sizes[stack];
  }
}

module.exports = TripleStack;
