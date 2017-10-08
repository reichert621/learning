/**
 * Linked List Node
 * @class
 */
class Node {
  /**
   * Create a node
   * @constructor
   * @param {Any} data
   */
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Linked List
 * @class
 */
module.exports = class LinkedList {
  /**
   * Create a linked list
   * @constructor
   */
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Append a node to the linked list
   * @param  {Any} data
   * @return {LinkedList} this
   */
  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.length += 1;

      return this;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
    node.prev = tail;
    this.length += 1;

    return this;
  }

  /**
   * Remove a node from the linked list
   * @param  {Any} data
   * @return {Boolean} whether or not the node was removed
   */
  remove(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        const { prev, next } = current;

        if (prev) prev.next = next;
        if (next) next.prev = prev;
        if (current === this.head) {
          this.head = next;
        }

        this.length -= 1;

        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * Get the head node of the linked list
   * @return {Node} head
   */
  getHead() {
    return this.head;
  }

  /**
   * Get the length of the linked list
   * @return {Number} length
   */
  getLength() {
    return this.length;
  }

  /**
   * Inspect the structure of the linked list.
   * For example: 'a->b->c->d'
   * @return {String} structure
   */
  inspect() {
    if (!this.head) return '';

    let result = [];
    let current = this.head;

    while (current && current.data) {
      result.push(current.data);
      current = current.next;
    }

    return result.join('->');
  }
}
