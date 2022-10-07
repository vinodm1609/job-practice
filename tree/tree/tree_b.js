class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Btt {
  constructor() {
    this.root = null;
  }

  
  insert(data) {
    const newNode = new Node(data);
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
      if (this.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  getNodeRoot() {
    return this.root;
  }
}

const bst = new Btt();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
