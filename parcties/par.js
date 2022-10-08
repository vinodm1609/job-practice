// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LL {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   addF(data) {
//     let newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//     return this.head;
//   }

//   addL(data) {
//     let newNode = new Node(data);
//     if (this.head == null) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//     this.size++;
//   }

//   addAt(index, data) {
//     let count = 1;
//     let current = this.head;
//     while (count < index) {
//       current = current.next;
//       count++;
//     }
//     let newNode = current.next;
//     current.next = {
//       data: data,
//       next: newNode,
//     };
//   }

//   revers(node) {
//     let prev = null;
//     let next = null;
//     let current = this.head;
//     while (current != null) {
//       next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     this.head = prev;
//     return node;
//   }

//   searching(data) {
//     let count = 1;
//     let current = this.head;
//     while (current) {
//       if (current.data < data) {
//         return count;
//       }
//       current = current.next;
//       count++;
//     }
//   }

//   deleteF() {
//     current = this.head.next;
//     this.head = current;
//   }

//   deleteAt(index) {
//     if (!this.head) {
//       return null;
//     }
//     if (this.head.next == null) {
//       this.head = null;
//       return nulll;
//     }
//     let count = 1;
//     let current = this.head;
//     while (current) {
//       if (count == index - 1) {
//         let temp = current.next;
//         current.next = temp.next;
//       }
//       current = current.next;
//       count++;
//     }
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// let ll = new LL();

// ll.addL(2);
// ll.addL(3);
// ll.addF(1);
// ll.addL(4);
// ll.addAt(4, 5);
// ll.addL(6);
// ll.addL(7);
// ll.addL(8);

// console.log(ll.searching(4));
// ll.revers(LL);
// ll.print();

// class Stack {
//   constructor() {
//     this.item = [];
//   }

//   push(element) {
//     this.item.push(element);
//   }

//   pop() {
//     if (this.item.length == 0) {
//       return "Undefined";
//     }
//     return this.item.pop();
//   }

//   peek() {
//     this.item[this.item.length - 1];
//   }

//   isFull() {
//     if (this.item.length == maxSize) {
//       return "this is full stack";
//     }
//   }

//   isEmpty() {
//     this.item.length == 0;
//     return " this is stack empty";
//   }
//   size() {
//     return this.item.length;
//   }

//   print() {
//     let str = " ";
//     for (let i = 0; i < this.item.length; i++) {
//       str += this.item[i];
//     }
//     return str;
//   }
// }

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  isEmpty() {
    if (this.items.length == 0) {
      return "this is empty";
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return " queue is Empty";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return " queue is Empty";
    }
    return this.items[0];
  }
}
