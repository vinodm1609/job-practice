var matches = {
  "[": "]",
  "(": ")",
  "{": "}",
};

function isBalanced(s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    if (matches[s[i]]) stack.push(s[i]);
    else if (matches[stack.pop()] !== s[i]) return false;
  }
  return stack.length === 0;
}

function Balanced(s) {
  let str = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      str.push(s[i]);
      continue;
    }
    if (str.isEmpty()) {
      return "NO";
    }
    let pop = str.pop();
    if (s[i] == "]" && pop !== "[") return "NO";
    if (s[i] == "}" && pop !== "{") return "NO";
    if (s[i] == ")" && pop !== "(") return "NO";
  }
  return str.isEmpty() ? "YES" : "NO";
}

function Balanced(s) {
  const openers = ["(", "{", "["];
  const closers = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const str = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (openers.includes(c)) {
      str.push(c);
    } else if (closers[c]) {
      if (str.length == 0) {
        return "NO";
      }

      if (str.pop() !== closers[c]) {
        return "NO";
      }
    }
  }

  if (str.length > 0) {
    return "NO";
  }

  return "YES";
}

let s = "()";
// Output: true
// var s = "()[]{}"
// Output: true
//  s = "(]"
// Output: false

function isValid(s) {
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      temp.push[s[i]];
    } else {
      if (s[i] === ")" && temp[temp.length - 1] == "(") temp.pop();
      else if (s[i] == "]" && temp[temp.length - 1] == "[") temp.pop();
      else if (s[i] == "{" && temp[temp.length - 1] == "}") temp.pop();
      else {
        return false;
      }
    }
  }
  return temp.length === 0;
}

function removeOuterParentheses(s) {
  let temp = "";
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === "(") {
      res++;
    }
    if (res !== 1) {
      temp += i;
    }
    if (i === ")") {
      res--;
    }
  }
  return temp;
}
