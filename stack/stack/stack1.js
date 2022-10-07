class Stack {
  constructor() {
    this.item = [];
    this.size = 0;
  }

  isEmpty() {
    if (this.item.length == 0) {
      console.log("this is empty stack");
    }
  }

  push(data) {
    return this.item.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return "underflow";
    } else {
      return this.item.pop();
    }
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  getSize() {
    return this.item.length;
  }

  print() {
    // let str = " ";
    for (let i = 0; i < this.item.length; i++) {
      //   str += this.item[i] + " ";
      console.log(this.item[i]);
    }
    // console.log(str);
    // str =""
  }
}

let ss = new Stack();

ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);
ss.push(5);
ss.push(6);
ss.push(7);
ss.push(8);
ss.pop();

ss.print();
