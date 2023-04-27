class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // 新增頂點
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      return "頂點已存在";
    }
  }

  // 新增邊
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      if (this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
      } else {
        return "第二項頂點不存在";
      }
    } else {
      return "第一項頂點不存在";
    }
  }

  // 刪除頂點
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(function (item) {
        this.removeEdge(vertex, item);
        delete this.adjacencyList[vertex];
      });
    } else {
      return "此頂點已不存在";
    }
  }

  // 刪除邊
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      if (this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          (vertex) => vertex !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          (vertex) => vertex !== vertex1
        );
      } else {
        return "第二項頂點已不存在";
      }
    } else {
      return "第一項頂點已不存在";
    }
  }

  // printGraph() {
  //   console.log(this.adjacencyList);
  // }

  // 廣度優先
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // 深度優先(
  dfs(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = Graph;
