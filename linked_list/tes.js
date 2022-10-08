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

  addLast(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let currantValue = this.head;

      while (currantValue.next !== null) {
        currantValue = currantValue.next;
      }
      currantValue.next = node;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);

      current = current.next;
    }
  }
}

const ll = new LL();

ll.addLast(23);
ll.addLast(24);

ll.print();
