class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addF(item) {
    let newNode = new Node(item);
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  addL(item) {
    let newNode = new Node(item);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  addAt(index, item) {
    let count = 1;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    let temp = current.next;
    current.next = {
      item: item,
      next: temp,
    };
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
  deleteF() {
    let current = this.head.next;
    this.head = current;
  }
  delete(index) {
    if (!this.head) {
      return null;
    }
    if (this.head.next == null) {
      this.head = null;
      return null;
    }
    let count = 1;
    let current = this.head;
    while (current) {
      if (count == index - 1) {
        let temp = current.next;
        current.next = temp.next;
      }
      current = current.next;
      count++;
    }
  }
  getSize() {
    let count = 0;
    let curr = this.head;
    while (curr !== null) {
      curr = curr.next;
      count++;
    }
    return count;
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

  search(item) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.item == item) {
        return count;
      }
      current = current.next;
      count++;
    }
  }
}

let ll = new LL();

ll.addF(10);
ll.addF(0);
ll.addL(20);
ll.addL(40);
ll.addL(50);
ll.addL(60);
ll.addL(70);
ll.addL(80);
ll.addAt(3, 30);
ll.deleteF();
console.log(ll.search(60));
ll.delete(8);
ll.reverse(LL);
ll.print();

// let i =1
// let curr = llist
// while(i<position){
//     curr = curr.next
//     i++
// }
// curr.next = curr.next.next
// return llist
