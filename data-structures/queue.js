/**
 * Queue data structure
 * @class
 */
module.exports = class Queue {
  /**
   * Create a queue
   * @constructor
   */
  constructor() {
    this._oldest = 1;
    this._latest = 1;
    this._storage = {};
  }

  /**
   * Get the size of the queue
   * @return {Number} size
   */
  size() {
    return this._latest - this._oldest;
  }

  /**
   * Enqueue data
   * @param  {Any} data
   * @return {Queue} this
   */
  enqueue(data) {
    this._storage[this._latest] = data;
    this._latest += 1;

    return this;
  }

  /**
   * Dequeue data
   * @return {Any} the dequeued data
   */
  dequeue() {
    if (this._oldest === this._latest) return undefined;

    const data = this._storage[this._oldest];
    delete this._storage[this._oldest];
    this._oldest += 1;

    return data;
  }
}
