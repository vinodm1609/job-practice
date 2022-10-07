class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  isEmpty() {
    return this.length == 0 ? false : true;
  }
  push(data) {
    this.length++;
    this.items.push(data);
  }
  pop() {
    this.length--;
    return this.isEmpty() === false ? "Empty stack" : this.items.pop();
  }
  peek() {
    return this.items() === false
      ? "Empty stack"
      : this.items[this.items.length - 1];
  }
  size() {
    return this.isEmpty() === false ? "Empty" : this.items.length;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    if (this.head == null) {
      return null;
    }
    return 0;
  }

  getSize() {
    return this.size;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty";
    }
    let result = this.head;
    this.head = this.head.next;
    this.size--;
    return result.data;
  }

  peek() {
    return this.head.data;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
