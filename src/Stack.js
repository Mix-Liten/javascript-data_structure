class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  // Add element to top of stack
  push(element) {
    this.data[this.size] = element;
    this.size++;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
    if (this.size === 0) return undefined;
    this.size--;
    let deleteData = this.data[this.size];
    this.data = this.data.slice(0, this.size);
    return deleteData;
  }

  // Check top element in stack
  peek() {
    return this.data[this.size - 1];
  }

  // Check if stack is empty
  isEmpty() {
    // console.log(this.size === 0 ? "Stack is empty" : "Stack is NOT empty");
    return this.size === 0;
  }

  // Print elements in stack
  print() {
    let str = "";
    for (let i = 0; i < this.data.length; i++) {
      str += this.data[i];
    }
    return str;
  }

  // Clear stack
  clear() {
    this.data = [];
    this.size = 0;
    return this.data;
  }
}

// const stack = new Stack();

module.exports = Stack;
