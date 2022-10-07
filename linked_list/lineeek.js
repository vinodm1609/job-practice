class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addF(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  addL(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  addAt(index, data) {
    let counter = 1;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    let newNode = current.next;
    current.next = {
      data: data,
      next: newNode,
    };
  }

  reverse(node) {
    let prev = null;
    let next = null;
    let current = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return node;
  }

  deleteF() {
    let current = this.head.next;
    this.head = current;
  }

  deleteAt(index) {
    if (!this.head) {
      return null;
    }
    if (this.head.next == null) {
      this.head = null;
      return null;
    }
    let counter = 1;
    let current = this.head;
    while (current) {
      if (counter == index - 1) {
        let temp = current.next;
        current.next = temp.next;
      }
      current = current.next;
      counter++;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new LL();

ll.addF(9);
ll.addL(8);
ll.addL(7);
ll.addL(6);
ll.addL(5);
ll.addL(3);
ll.addL(2);
ll.addAt(5, 4);
ll.reverse(LL);
ll.deleteF();

ll.print();
