class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linked {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
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

  reverse(node) {
    let pev = null;
    let next = null;
    let current = this.head;
    while (current !== null) {
      next = current.next;
      current.next = pev;
      pev = current;
      current = next;
    }
    this.head = pev;
    return node;
  }

  deleteFirst() {
    let current = this.head.next;
    this.head = current;
  }

  deleteAt(index) {
    if (!this.head) {
      return null;
    }
    if (this.head.next == null) {
      this.next = null;
      return null;
    }

    let counter = 1;
    let current = this.head;
    while (current) {
      if (counter == index - 1) {
        let what = current.next;
        current.next = what.next;
      }
      current = current.next;
      counter++;
    }
  }

  // middleNode(start, last) {
  //   // find middle element
  //   // using fast and low pointer
  //   if (start == null) {
  //     return null;
  //   }
  //   let slow = start;
  //   let fast = start.next;
  //   while (fast != last) {
  //     fast = fast.next;
  //     if (fast != last) {
  //       slow = slow.next;
  //       fast = fast.next;
  //     }
  //   }
  //   return slow;
  // }

  // binarySearch(data) {
  //   // insert a node at the beginning
  //   // of the singly linked list
  //   let start = this.head;
  //   let last = null;
  //   do {
  //     // find middle
  //     let mid = middleNode(start, last);
  //     // if middle is empty
  //     if (mid == null) {
  //       return null;
  //     }
  //     // If value is present at middle
  //     if (mid.data == data) return mid;
  //     // If value is less than mid
  //     else if (mid.data > data) {
  //       start = mid.next;
  //     }
  //     // If the value is more than mid.
  //     else last = mid;
  //   } while (last == null || last != start);
  //   // value not present
  //   return null;
  // }

  search(data) {
    let counter = 1;
    let current = this.head;
    while (current) {
      if (current.data == data) {
        return counter;
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

let ll = new Linked();

ll.addFirst(40);

ll.addLast(23);
ll.addLast(32);
ll.addLast(65);
ll.addLast(98);
ll.addLast(78);
ll.addLast(118);

ll.insertAt(3, 35);

ll.reverse(LinkedList);
ll.deleteFirst();
ll.deleteAt(1);
ll.search();

ll.print();

// let data = 65;
// if (binarySearch(data) == null) {
//   console.log("value is not there");
// } else {
//   console.log("is there");
// }
