const Graph = require('../graph');
const { assert } = require('chai');

describe('Graph', () => {
  describe('vertices', () => {
    it('gets the vertices of the graph', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const graph = new Graph().addVertices(nodes);

      assert.deepEqual(graph.vertices(), nodes);
    });

    it('returns an empty array if no vertices exist', () => {
      const graph = new Graph();

      assert.deepEqual(graph.vertices(), []);
    });
  });

  describe('edges', () => {
    it('gets the edges of the graph', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const edges = [['a', 'b'], ['b', 'c'], ['c', 'd']];
      const graph = new Graph()
        .addVertices(nodes)
        .addEdges(edges);

      assert.deepEqual(graph.edges(), edges);
    });

    it('gets the edges of the graph when added one at a time', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const graph = new Graph()
        .addVertices(nodes)
        .addEdge('a', 'b')
        .addEdge('b', 'c')
        .addEdge('c', 'd');

      const expected = [['a', 'b'], ['b', 'c'], ['c', 'd']];

      assert.deepEqual(graph.edges(), expected);
    });

    it('returns an empty array if no edges exist', () => {
      const graph = new Graph();

      assert.deepEqual(graph.edges(), []);
    });
  });

  describe('bfs', () => {
    it('searches a graph where all nodes are connected', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const graph = new Graph()
        .addVertices(nodes)
        .addEdges([['a', 'b'], ['b', 'c'], ['c', 'd']]);

      for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          assert.equal(graph.bfs(n1, n2), true,
            `${n1} and ${n2} should be connected`);
        }
      }
    });

    it('searches a graph where none of the nodes are connected', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const graph = new Graph()
        .addVertices(nodes);

      for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          assert.equal(graph.bfs(n1, n2), false,
            `${n1} and ${n2} should not be connected`);
        }
      }
    });

    it('returns true if the starting node and the target are the same', () => {
      const nodes = ['a', 'b', 'c'];
      const graph = new Graph().addVertices(nodes);

      assert.equal(graph.bfs('a', 'a'), true);
      assert.equal(graph.bfs('b', 'b'), true);
      assert.equal(graph.bfs('c', 'c'), true);
    });

    it('returns true if the starting node and the target are connected', () => {
      const nodes = ['a', 'b', 'c', 'd', 'e'];
      const graph = new Graph()
        .addVertices(nodes)
        .addEdges([['a', 'b'], ['c', 'd'], ['b', 'e']]);

      assert.equal(graph.bfs('a', 'b'), true);
      assert.equal(graph.bfs('c', 'd'), true);
      assert.equal(graph.bfs('a', 'e'), true);
      assert.equal(graph.bfs('a', 'c'), false);
      assert.equal(graph.bfs('b', 'd'), false);
      assert.equal(graph.bfs('c', 'e'), false);
    });
  });

  describe('dfs', () => {
    it('searches a graph where all nodes are connected', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const graph = new Graph()
        .addVertices(nodes)
        .addEdges([['a', 'b'], ['b', 'c'], ['c', 'd']]);

      for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          assert.equal(graph.dfs(n1, n2), true,
            `${n1} and ${n2} should be connected`);
        }
      }
    });

    it('searches a graph where none of the nodes are connected', () => {
      const nodes = ['a', 'b', 'c', 'd'];
      const graph = new Graph().addVertices(nodes);

      for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          assert.equal(graph.dfs(n1, n2), false,
            `${n1} and ${n2} should not be connected`);
        }
      }
    });

    it('returns true if the starting node and the target are the same', () => {
      const nodes = ['a', 'b', 'c'];
      const graph = new Graph().addVertices(nodes);

      assert.equal(graph.dfs('a', 'a'), true);
      assert.equal(graph.dfs('b', 'b'), true);
      assert.equal(graph.dfs('c', 'c'), true);
    });

    it('returns true if the starting node and the target are connected', () => {
      const nodes = ['a', 'b', 'c', 'd', 'e'];
      const graph = new Graph()
        .addVertices(nodes)
        .addEdges([['a', 'b'], ['c', 'd'], ['b', 'e']]);

      assert.equal(graph.dfs('a', 'b'), true);
      assert.equal(graph.dfs('c', 'd'), true);
      assert.equal(graph.dfs('a', 'e'), true);
      assert.equal(graph.dfs('a', 'c'), false);
      assert.equal(graph.dfs('b', 'd'), false);
      assert.equal(graph.dfs('c', 'e'), false);
    });
  });
});
