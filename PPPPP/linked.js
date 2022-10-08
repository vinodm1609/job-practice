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

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  insertLat(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next == null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }
  insertAt(data, index) {
    let count = 0;
    let curr = this.head;
    while (curr) {
      curr = curr.next;
      count++;
    }
    let temp = curr.next;
    curr.next = {
      data: data,
      next: temp,
    };
    return this.head;
  }

  deleteF() {
    let curr = this.head.next;
    this.head = curr;
  }
}
