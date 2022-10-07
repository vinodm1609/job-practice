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
  traversing() {
    let counter = 0;
    let current = this.head;
    while (counter < this.size) {
      //   console.log(counter);
      current = current.next;
      counter++;
    }
  }

  deleteNode(index) {
    // base code
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
        let temp = current.next;
        current.next = temp.next;
      }
      current = current.next;
      counter++;
    }
  }

  print() {
    let current = this.head;

    while (current) {
      //   console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new LinkedList();

ll.addLast(34);
ll.addLast(24);
ll.addLast(44);
ll.addLast(54);
ll.addLast(74);
ll.addLast(74);

ll.traversing();

ll.deleteNode(1);

ll.print();

/*leetcode solution nextNode = node.next;
    node.val =nextNode.val;
    node.next =nextNode.next
    if(nextNode.next == null){
        delete(nextNode)
    }*/
