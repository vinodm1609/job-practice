class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  
  }


  

  isEmpty() {
    if (this.head == null) {
      return null;
    }
    return 0;
  }

  getSize() {
    return this.size;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty";
    } 
    let result = this.head;
    this.head = this.head.next;
    this.size--;
    return result.data;
  }

  peek() {
    return this.head.data;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

let ss = new Stack();

ss.push(4);
ss.push(6);
ss.push(8);
ss.push(9);
ss.push(2);
ss.print();
// ss.pop();
// console.log(ss.peek());
ss.pop();
