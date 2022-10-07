let str = "vinodmishra";
// reverse stack
function reverse(str) {
  // Create a stack of capacity
  // equal to length of string
  let n = str.length;
  let obj = new Stack(n);

  // Push all characters of string
  // to stack

  for (let i = 0; i < n; i++) {
    obj.push(str[i]);
  }

  // Pop all characters of string
  // and put them back to str
  for (i = 0; i < n; i++) {
    let ch = obj.pop();
    str[i] = ch;
  }
}
