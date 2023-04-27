const Graph = require("../src/Graph");

let graph;

describe("Graph", () => {
  beforeEach(() => {
    graph = new Graph();

    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "D");
    graph.addEdge("A", "E");
    graph.addEdge("B", "C");
    graph.addEdge("D", "E");
    graph.addEdge("E", "F");
    graph.addEdge("E", "C");
  });
  test("init", () => {
    expect(graph).toBeTruthy();
  });
  test("addVertex & addEdge", () => {
    const expectResult = {
      A: ["B", "D", "E"],
      B: ["A", "C"],
      C: ["B", "E"],
      D: ["A", "E"],
      E: ["A", "D", "F", "C"],
      F: ["E"],
    };
    expect(JSON.stringify(graph.adjacencyList)).toEqual(JSON.stringify(expectResult));
  });
  test("bfs", () => {
    const expectResult = ["A", "B", "D", "E", "C", "F"];
    expect(JSON.stringify(graph.bfs("A"))).toEqual(JSON.stringify(expectResult));
  });
  test("dfs", () => {
    const expectResult = ["A", "E", "C", "F", "D", "B"];
    expect(JSON.stringify(graph.dfs("A"))).toEqual(JSON.stringify(expectResult));
  });
});
