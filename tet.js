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

  deleteF() {
    let current = this.head.next;
    this.head = current;
  }

  deleteAt(index) {
    // if (!this.head) {
    //   return null;
    // }
    // if (this.head.next == null) {
    //   this.head = null;
    //   return null;
    // }
    if (index == 0) {
      return this.head;
    }

    let counter = 1;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    current.next = current.next.next;
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

  searching(data) {
    // ager index chiya
    let counter = 0;
    let current = this.head;
    while (current) {
      if (current.data == data) {
        return counter;
      }
      current = current.next;
      counter++;
    }
  }

  getSize() {
    let n = 0;
    current = this.head;
    while (current !== null) {
      n++;
      this.head = this.head.next;
    }
    return n;
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

ll.addF(40);

ll.addL(23);
ll.addL(32);
ll.addL(65);
// ll.addAt(3, 35);
ll.addL(98);
ll.addL(78);
ll.addL(118);

// ll.reverse(LL);
// ll.deleteF();
// ll.deleteAt(2);

ll.print();

// compar kaliya
function CompareLists(llist1, llist2) {
  let h1 = llist1;
  let h2 = llist2;

  while (h1 != null || h2 != null) {
    if (h1.next == null && h2.next != null) return 0;

    if (h2.next == null && h1.next != null) return 0;

    if (h1.data == h2.data) {
      h1 = h1.next;
      h2 = h2.next;
    } else {
      return 0;
    }
  }

  return 1;
}
