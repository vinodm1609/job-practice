let v = "aaabccddd";

// function superReducedString(s) {
//   if (s.length === 1) {
//     return s;
//   }
//   let ans = s.split("");
//   for (let i = 0; i < ans.length; i++) {
//     if (ans[i] === ans[i + 1]) {
//       ans.splice(i, 2);
//       i = -1;
//     }
//   }
//   if (ans.length === 0) {
//     console.log("empty string");
//   }
//   ans.join("");
//   return ans;
//

// console.log(superReducedString(s));

class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0 ? false : true;
  }
  push(data) {
    this.length++;
    return this.data.push(data);
  }
  pop() {
    if (this.length === 0) {
      return "Empty Stack";
    }
    this.length--;
    return this.data.pop();
  }

  peek() {
    if (this.length === 0) {
      return false;
    }

    return this.data[this.data.length - 1];
  }
}

function superReducedString(s) {
  if (s.length === 0) {
    return "Empty String";
  }
  if (s.length === 1) {
    return s;
  }

  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    const isEmpty = stack.isEmpty();
    if (isEmpty === false) {
      stack.push(s[i]);
    } else {
      const top = stack.peek();
      if (top === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  let ans = "";
  for (let j = 0; j < stack.data.length; j++) {
    ans += stack.data[j];
  }
  ans = ans ? ans : "Empty String";

  return ans;
}

let tt = superReducedString("baab");

console.log(tt);
