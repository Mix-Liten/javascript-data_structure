class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index < 0) return;
    if (index > 0 && index > this.size) return;
    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    const node = new Node(data);
    let current, previous;
    // Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before index
      current = current.next; // Node after index
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index
  getAt(index) {
    if (index < 0 || (index > 0 && index > this.size)) return;
    let current = this.head;
    let count = 0;
    while (current) {
      console.log("a", current.data);
      if (count === index) {
        console.log(current.data);
        break;
      }
      current = current.next;
      count++;
    }
    return;
  }

  // Remove at index
  removeAt(index) {
    if (index < 0 || (index > 0 && index > this.size)) return;
    let current = this.head;
    let count = 0;
    let previous;
    // Remove first
    if (index === 0) this.head = current.next;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// const ll = new LinkedList()

// ll.insertFirst(1)
// ll.clearList()
// ll.insertFirst(2)
// ll.insertFirst(4)
// ll.insertLast(3)
// ll.insertAt(9, 1)
// ll.removeAt(1)

// ll.printListData()
// ll.getAt(1)

module.exports = {
  LinkedList,
  Node,
};
