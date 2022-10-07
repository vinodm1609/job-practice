// // What is the diff between linked list & array
// // What is the use of constructor
// // Delete last element

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// [2,4,5,-1,0.10,100,130]

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }

  insert(index, data) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    let newNode = currentNode.next;
    currentNode.next = {
      data: data,
      next: newNode,
    };
  }

  delete(index) {
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
      if (counter == index) {
        let temp = current.next;
        current.next = temp.next;
      }
      current = current.next;
      counter++;
    }
  }

  // firstDelete() {
  //   let current = this.head.next;
  //   this.head = current;
  // }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

let lt = new LinkedList();

lt.add(2);
lt.add(4);
lt.add(5);
// lt.add(-1);
// lt.add(0.1);
// lt.add(100);
// lt.add(130);

// lt.insert(4, 100);

lt.delete(1);

// lt.firstDelete();

lt.print();

// // second test

// let arr = [-1, 0, 5, 9, 10, 14, 19, 36];

// let target = 19;

// function find(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let midIndex = Math.floor((left + right) / 2);
//     if (arr[midIndex] > target) {
//       right = midIndex - 1;
//     } else if (arr[midIndex] < target) {
//       left = midIndex + 1;
//     } else {
//       return arr[midIndex];
//     }
//   }
//   return -1;
// }

// console.log(find(arr, target));
