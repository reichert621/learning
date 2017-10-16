/**
 * Stack data structure
 * @class
 */
module.exports = class Stack {
  /**
   * Create a stack
   * @constructor
   */
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  /**
   * Get the size of the stack
   * @return {Number} size
   */
  size() {
    return this._size;
  }

  /**
   * Push data onto the stack
   * @param  {Any} data
   * @return {Stack} this
   */
  push(data) {
    this._size += 1;
    this._storage[this._size] = data;

    return this;
  }

  /**
   * Pop data off of the stack
   * @return {Any} the popped data
   */
  pop() {
    if (!this._size) return undefined;

    const popped = this._storage[this._size];
    delete this._storage[this._size];
    this._size -= 1;

    return popped;
  }
}
