class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addLast(data) {
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

  insertAt(index, data) {
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
  //
  // deleteF() {
  //   let current = this.head.next;
  //   this.head = current;
  // }

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
      if (counter === index - 1) {
        let temp = current.next;
        current.next = temp.next;
      }
      current = current.next;
      counter++;
    }
  }

  // search(index) {
  //   let counter = 1;
  //   let current = this.head;
  //   while (current) {
  //     if (counter == index) {
  //       return index;
  //     }
  //     console.log(index);
  //     current = current.next;
  //     counter++;
  //   }
  // }

  // reverse(node) {
  //   let prv = null;
  //   let current = this.head;
  //   let next = null;

  //   while (current !== null) {
  //     next = current.next;
  //     current.next = prv;
  //     prv = current;
  //     current = next;
  //   }
  //   this.head = prv;
  //   return node;
  // }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new LinkedList();

ll.addLast(1);
ll.addLast(5);
ll.addLast(3);
ll.addLast(9);
ll.addLast(56);
ll.addLast(76);
ll.addLast(34);
ll.addLast(44);

ll.insertAt(4, 300);
// ll.deleteF();

ll.deleteAt(6);
// ll.search(4);
// ll.reverse(LinkedList);

ll.print();

// 3 -> 4-> 10 -> 12 - null
// 12 -> 10 -> 4 -> 3 -> null
