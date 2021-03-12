class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  enqueue(element) {
    this.data[this.size] = element;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    this.size--;
    let deleteData = this.data[0];
    this.data = this.data.slice(1);
    return deleteData;
  }

  peek() {
    return this.data[0];
  }

  clear() {
    this.data = [];
    this.size = 0;
    return this.data;
  }
}

// const queue = new Queue();

module.exports = Queue;
