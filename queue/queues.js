// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = 0;
//     this.last = 0;
//     this.size = 0;
//   }

//   isEmpty() {
//     if (!this.size) {
//       return null;
//     }
//   }

//   enqueue(data) {
//     let newNode = new Node(data);
//     if (this.isEmpty()) {
//       this.front = newNode;
//       this.last = newNode;
//     }
//     this.size++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const t = this.front;
//     if (this.front == this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return t;
//   }
// }

// class Node {
//   constructor(element) {
//     this.element = this.element;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = 0;
//     this.last = 0;
//     this.size = 0;
//   }

//   isEmpty() {
//     if (!this.front) {
//       return null;
//     }
//   }

//   enqueue(element) {
//     let newNode = new Node(element);

//     if (this.isEmpty()) {
//       this.front = newNode;
//       this.last = newNode;
//     }
//     this.size++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     let l = this.front;
//     if (this.front == this.last) {
//       this.last = null;
//     }
//     this.front = this.front.next;
//     this.size++;
//     return l;
//   }
// }
class Queue {
  constructor() {
    this.item = [];
    this.front = 0;
    this.last = 0;
  }

  isEmpty() {
    if (this.item.length == null) {
      return null;
    }
  }
  enqueue(item) {
    return this.item.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.item.shift();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  print() {
    for (let i = 0; i < this.item.length; i++) {
      console.log(this.item[i]);
    }
  }
}

// class QueueO {
//   constructor() {
//     this.item = {};
//     this.front = 0;
//     this.last = 0;
//   }

//   isEmpty() {
//     if (!this.last) {
//       return null;
//     }
//   }

//   enqueue(item) {
//     this.item[this.last] = item;
//     return this.last++;
//   }
//   dequeue() {
//     let o = this.item[this.front];
//     delete this.item[this.front];
//     this.front++;
//     return o;
//   }
//   peek() {
//     return this.item[this.front];
//   }
//   print() {
//     for (let i = 0; i < this.last; i++) {
//       console.log(this.item[i]);
//     }
//   }
// }

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.print();

class NodeQ {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class QueueL {
  constructor() {
    this.front = 0;
    this.last = 0;
    this.size = 0;
  }

  isEmpty() {
    if (this.item.length == null) {
      return null;
    }
  }
  enqueue(item) {
    let newNode = new NodeQ(item);
    if (this.isEmpty()) {
      this.front = newNode;
      this.last = newNode;
    }
  }
  dequeue() {
    if (!this.item) {
      return null;
    }
    if (this.front == this.last) {
      this.last = null;
    }
    let B = this.front;
    this.front = this.front.next;
    this.front--;
    return B;
  }
}
