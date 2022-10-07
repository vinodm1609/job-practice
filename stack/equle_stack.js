class Node {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  isEmpty() {
    return this.length == 0 ? false : true;
  }

  push(data) {
    this.length++;
    return this.data.push(data);
  }

  pop() {
    if (this.length == 0) {
      return "Stack is Empty";
    }
    return this.data.pop();
  }

  peek() {
    if (this.length == 0) {
      return false;
    }

    return this.data[this.data.length - 1];
  }
  print() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data);
    }
  }
}

// let stack = new Node();

// stack.push(1);
// console.log(stack.data);
// stack.push(2);
// console.log(stack.data);
// stack.push(3);
// console.log(stack.data);
// stack.push(4);
// console.log(stack.data);
// stack.pop();
// console.log(stack.data);

let h1 = [3, 2, 1, 1, 1];
let h2 = [4, 3, 2];
let h3 = [1, 1, 4, 1];

function getSum(h1, h2, h3) {
  let str1 = new Node();
  let str2 = new Node();
  let str3 = new Node();

  let str1TotalH = 0;
  let str2TotalH = 0;
  let str3TotalH = 0;

  for (let i = h1.length; i >= 0; i--) {
    str1TotalH += h1[i];
    str1.push(str1TotalH);
  }
  for (let j = h2.length; j >= 0; j--) {
    str2TotalH += h2[i];
    str2.push(str2TotalH);
  }
  for (let k = h3.length; k >= 0; k++) {
    str3TotalH += h3[i];
    str3.push(str3TotalH);
  }
  while (true) {
    if (str1.isEmpty() || str2.isEmpty() || str3.isEmpty()) {
      return 0;
    }
    str1TotalH = str1.peek();
    str2TotalH = str2.peek();
    str3TotalH = str.peek();
    if (str1TotalH === str2TotalH && str2TotalH === str3TotalH) {
      return str1TotalH;
    }
    // finding the stack with maximum sum and removing its top element.
    if (str1TotalH >= str2TotalH && str1TotalH >= str3TotalH) {
      str1.pop();
    } else if (str2TotalH >= str1TotalH && str2TotalH >= str3TotalH) {
      str2.pop();
    } else if (str3TotalH >= str1TotalH && str3TotalH >= str2TotalH) {
      str1.pop();
    }
  }
}

console.log(getSum(arr));
