// class Stack {
//   // Class stack is declared to initialize an array that will be used to store items of the stack:
//   constructor() {
//     this.items = [];
        this.size =0 
//   }

//   // push function
//   push(element) {
//     // push element into the list items
//     this.items.push(element);
//   }

//   // pop
//   pop() {
//     if (this.items.length == 0) {
//       return "Underflow";
//     }
//     return this.items.pop();
//   }

//   // isEmpty
//   isEmpty() {
//     // return true if stack is empty
//     return this.items.length == 0;
//   }

//   // peek
//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   //print
//   print() {
//     let str = " ";
//     for (let i = 0; i < this.items.length; i++) {
//       str += this.items[i] + " ";
//     }
//     console.log(str);
//   }
// }

// let stack = new Stack();

// console.log(stack.isEmpty());

// class Stack {
//   constructor() {
//     this.item = [];
//   }

//   push(data) {
//     this.item.push(data);
//   }

//   pop() {
//     if (this.item.length == 0) {
//       return "Underflow";
//     }
//     return this.item.pop();
//   }

//   peek() {
//     this.item.length == 0;
//   }

//   isEmpty() {
//     return this.item.length == 0;
//   }

//   print() {
//     let str = " ";
//     for (let i = 0; i < this.item.length; i++) {
//       str += this.item.length;
//     }
//     console.log(str);
//   }
// }

class Stack {
  constructor() {
    this.items = [];
    this.max = 6;
  }

  push(element) {
    // normal ka liya
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return "Undefined";
    }
    return this.items.pop();
  }

  delete(n, curr) {
    if (this.items.length == 0 || curr == n) {
      return;
    }

    // remove current item
    let element = this.items[this.items.length - 1];
    this.items.pop();

    // remove other item
    this.delete(this.items, n, curr + 1);

    // put all item back except middle
    if (curr != parseInt(n / 2, 10)) {
      this.items.push(element);
    }
  }

  peek() {
    if (this.items.length == 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    this.items.length == 0;
  }

  // reverse

  // insert_at_bottom(element) {
  //   if (this.items.length == 0) {
  //     this.items.push(element);
  //   } else {
  //     let a = this.items.pop();
  //     this.insert_at_bottom(element);

  //     this.items.push(a);
  //   }
  // }

  // revers() {
  //   if (this.items.length > 0) {
  //     let element = this.items.pop();
  //     this.revers();

  //     this.insert_at_bottom(element);
  //   }
  // }
  // reverse()
  //   {
  //       var prev, cur, succ;
  //       cur = prev = this.top;
  //       cur = cur.next;
  //       prev.next = null;

  //       while (cur != null)
  //       {
  //           succ = cur.next;
  //           cur.next = prev;
  //           prev = cur;
  //           cur = succ;
  //       }
  //       this.top = prev;
  //   }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.peek();
stack.pop();

stack.delete(this.item, this.items.length, 0);

stack.revers();
stack.print();

// stack in linked list
