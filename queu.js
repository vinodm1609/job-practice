// class Queue {
//   constructor() {
//     this.item = [];
//   }

//   // add element
//   enqueue(element) {
//     return this.item.push(element);
//   }

//   dequeue() {
//     if (this.item.length > 0) {
//       return this.item.shift();
//     }
//   }

//   // view last element
//   peek() {
//     return this.item[this.item.length - 1];
//   }

//   isEmpty() {
//     return this.item.length == 0;
//   }
//   size() {
//     return this.item.length;
//   }

//   print() {
//     let que = " ";
//     for (let i = 0; i < this.item.length; i++) {
//       que += this.item[i] + "  ";
//     }
//     console.log(que);
//   }
// }

// let queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(8);
// console.log(queue.items);

// queue.dequeue();
// console.log(queue.items);

// console.log(queue.peek());

// console.log(queue.isEmpty());

// console.log(queue.size());

// Let us implement javascript queue using Object:
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  get size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear == 0;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Current queue is: ", queue);

var removed_element = queue.dequeue();
console.log("Removed element is: ", removed_element);

console.log("The current queue is: ", queue);

var top_element = queue.peek();
console.log("The top element of the queue is: ", top_element);

var queue_length = queue.size;
console.log("The size or length of the queue is: ", queue_length);

class QNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

let front = null,
  rear = null;

function enqueue(key) {
  // Create a new LL node
  let temp = new QNode(key);

  // If queue is empty, then new node is front and rear both
  if (rear == null) {
    front = rear = temp;
    return;
  }

  // Add the new node at the end of queue and change rear
  rear.next = temp;
  rear = temp;
}

function dequeue() {
  // If queue is empty, return NULL.
  if (front == null) return;

  // Store previous front and move front one node ahead
  let temp = front;
  front = front.next;

  // If front becomes NULL, then change rear also as NULL
  if (front == null) rear = null;
}
