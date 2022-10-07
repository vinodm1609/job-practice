class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
    this.max = [];
  }

  push(data) {
    this.data.push(data);
    if (this.max === null || this.max <= data) {
      this.max.push(data);
    }
  }

  pop() {
    if (this.data.length == 0) {
      return "empty";
    }
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  findMax() {
    return this.max[this.size - 1];
  }
}

function getMax(operations) {
  let str = new Stack();
  let temp = [];

  for (let i = 0; i < operations.length; i++) {
    let [op, data] = operations[i].split(" ");

    if (op == 1) {
      str.push(data);
    }
    if (op == 2 && !data) {
      str.pop();
    }
    if (op == 3) {
      temp.push(str.peek());
    }
  }
  console.log(temp);
  return temp;
}
