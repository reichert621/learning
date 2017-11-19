const Queue = require('./queue');

/**
 * Graph
 * @class
 */
module.exports = class Graph {
  /**
   * Create a graph
   * @param {Object} graph
   * @constructor
   */
  constructor(graph = {}) {
    this.graph = graph;
  }

  /**
   * Get the vertices of the graph
   * @return {Array<String>} the list of vertices
   */
  vertices() {
    return Object.keys(this.graph);
  }

  /**
   * Get the edges of the graph
   * @return {Array<Array<String>>} the list of edges
   */
  edges() {
    let seen = new Set();
    let edges = [];

    for (let vertex in this.graph) {
      for (let neighbor of this.graph[vertex]) {
        if (!seen.has(neighbor)) {
          edges.push([vertex, neighbor]);
        }
      }

      seen.add(vertex);
    }

    return edges;
  }

  /**
   * Add a vertex to the graph
   * @param {String} node
   * @return {Graph} this
   */
  addVertex(node) {
    this.graph[node] = this.graph[node] || new Set();

    return this;
  }

  /**
   * Add a list of vertices to the graph
   * @param {Array<String>} nodes
   * @return {Graph} this
   */
  addVertices(nodes) {
    return nodes.reduce((graph, node) => {
      return graph.addVertex(node);
    }, this);
  }

  /**
   * Add an edge to the graph connecting two vertices
   * @param {String} n1 - the first node
   * @param {String} n2 - the second node
   */
  addEdge(n1, n2) {
    this.graph[n1] = (this.graph[n1] || new Set()).add(n2);
    this.graph[n2] = (this.graph[n2] || new Set()).add(n1);

    return this;
  }

  /**
   * Add multiple edges to the graph
   * @param {Array<Array<String>>} edges
   * @return {Graph} this
   */
  addEdges(edges) {
    return edges.reduce((graph, edge) => {
      return graph.addEdge(...edge);
    }, this);
  }

  /**
   * Determine if two nodes are connecting using breadth-first search
   * @param {String} start - the starting node
   * @param {String} target - the target node
   */
  bfs(start, target) {
    if (start === target) return true;

    let visited = new Set();
    let queue = new Queue().enqueue(start);

    while (queue.size() > 0) {
      let vertex = queue.dequeue();

      for (let neighbor of this.graph[vertex]) {
        if (!visited.has(neighbor)) {
          if (neighbor === target) {
            return true;
          }

          queue.enqueue(neighbor);
          visited.add(vertex);
        }
      }
    }

    return false;
  }

  /**
   * Private recursive function that performs a depth-first search
   * @param {String} current - the current node
   * @param {String} target - the target node
   * @param {Set} visited - the set of previously visited nodes
   */
  _dfs(current, target, visited = new Set()) {
    if (current === target) return true;

    visited.add(current);

    for (let neighbor of this.graph[current]) {
      if (!visited.has(neighbor)) {
        if (this._dfs(neighbor, target, visited)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Determine if two nodes are connecting using depth-first search
   * @param {String} start - the starting node
   * @param {String} target - the target node
   */
  dfs(start, target) {
    return this._dfs(start, target);
  }

  inspect() {
    return this.graph;
  }
};
