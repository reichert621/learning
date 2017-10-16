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
    this.oldest = 1;
    this.latest = 1;
    this.storage = {};
  }

  /**
   * Get the size of the queue
   * @return {Number} size
   */
  size() {
    return this.latest - this.oldest;
  }

  /**
   * Enqueue data
   * @param  {Any} data
   * @return {Queue} this
   */
  enqueue(data) {
    this.storage[this.latest] = data;
    this.latest += 1;

    return this;
  }

  /**
   * Dequeue data
   * @return {Any} the dequeued data
   */
  dequeue() {
    if (this.oldest === this.latest) return undefined;

    const data = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest += 1;

    return data;
  }
}
