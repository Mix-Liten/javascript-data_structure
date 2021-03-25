class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    }
    const searchTree = (node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        } else if (node.left !== null) {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } else if (node.right !== null) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(node);
  }
  getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  getMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current && data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null;
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) return null;
        // node has no left child
        if (node.left === null) return node.right;
        // node has no right child
        if (node.right === null) return node.left;
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
      }
      return node;
    };
    this.root = removeNode(this.root, data);
  }
  findMinHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) return left + 1;
    return right + 1;
  }
  findMaxHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) return left + 1;
    return right + 1;
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  inOrder() {
    if (this.root === null) return null;
    let result = new Array();
    const traverseInOrder = (node) => {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    };
    traverseInOrder(this.root);
    return result;
  }
  preOrder() {
    if (this.root === null) return null;
    let result = new Array();
    const traversePreOrder = (node) => {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    };
    traversePreOrder(this.root);
    return result;
  }
  postOrder() {
    if (this.root === null) return null;
    let result = new Array();
    const traversePostOrder = (node) => {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    };
    traversePostOrder(this.root);
    return result;
  }
  levelOrder() {
    if (this.root === null) return null;
    let result = new Array();
    let queue = new Array();
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.data);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    return result;
  }
}

// const bst = new BST();

// bst.insert(9);
// bst.insert(4);
// bst.insert(17);
// bst.insert(3);
// bst.insert(6);
// bst.insert(22);
// bst.insert(5);
// bst.insert(7);
// bst.insert(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.insert(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log("inOrder: " + bst.inOrder());
// console.log("preOrder: " + bst.preOrder());
// console.log("postOrder: " + bst.postOrder());
// console.log("levelOrder: " + bst.levelOrder());
