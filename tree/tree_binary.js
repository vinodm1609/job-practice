class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    }
    let current = this.root;
    while (current) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (this.left == null) {
          this.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (this.right === null) {
          this.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  getRootNode() {
    return this.root;
  }
}

const bt = new BinaryTree();

bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);
bt.insert(6);
bt.insert(7);
bt.insert(8);
