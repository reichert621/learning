/**
 * Chapter 3 - Question 3
 *
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets
 * too high, it might topple. Therefore, in real life, we would likely start
 * a new stack when the previous stack exceeds some threshold. Implement a
 * data structure SetOfStacks that mimics this. SetOfStacks should be composed
 * of several stacks and should create a new stack once the previous one exceeds
 * capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically
 * to a single stack (that is, pop() should return the same values as it would
 * if there were just a single stack).
 */

/**
 * SetOfStacks creates a new stack once the previous one exceeds capacity
 * @class
 */
class SetOfStacks {
  /**
   * Create a set of stacks
   * @param {Number} max - the max capacity of each inner stack
   * @constructor
   */
  constructor(max = 3) {
    if (!max || max < 1) {
      throw new Error('Max capacity must be at least one');
    }

    this._max = max;
    this._size = 0;
    this._stacks = {};
  }

  /**
   * Push data onto the set of stacks, creating a new inner
   * stack if the latest stack in the set is at max capacity
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @param  {Any} data
   * @return {SetOfStacks} this
   */
  push(data) {
    const stack = Math.floor(this._size / this._max);
    const index = this._size % this._max;

    this._stacks[stack] = this._stacks[stack] || {};
    this._stacks[stack][index] = data;
    this._size += 1;

    return this;
  }

  /**
   * Pop data off of the set of stacks, removing the latest
   * stack if it is empty as a result of popping
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @return {Any} the popped data
   */
  pop() {
    if (!this._size) return;

    const size = this._size - 1;
    const stack = Math.floor(size / this._max);
    const index = (size % this._max);
    const data = this._stacks[stack][index];

    delete this._stacks[stack][index];

    // Remove stack if empty
    if (index === 0) {
      delete this._stacks[stack];
    }

    this._size = size;

    return data;
  }

  /**
   * Get the total size of the set of stacks
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @return {Number} the total size
   */
  size() {
    return this._size;
  }

  /**
   * Count the number of inner stacks in the set
   *
   * Time: O(1)
   * Additional space: O(1)
   *
   * @return {Number} the number of stacks
   */
  count() {
    const size = this._size - 1;
    const stack = Math.floor(size / this._max);

    return stack + 1;
  }
}

module.exports = SetOfStacks;
