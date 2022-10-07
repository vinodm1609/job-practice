class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// Binary Search tree class

class BinaryTree {
  constructor() {
    // root of binary search tree
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  // Insert(data)

  insert(data) {
    // creating a node and initializing with data

    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        // ager right node value hai recursive search null node
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, data) {
    if (!root) {
      return false;
    }
  }
}

const bt = new BinaryTree();

bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);
bt.insert(6);
bt.insert(7);
bt.insert(8);
bt.insert(9);
