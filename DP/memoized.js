const max = 100;
const NIL = -1;

const h = new Array(max);

function init() {
  for (let i = 0; i < max; i++) {
    h[i] = NIL;
  }
}

function fib(n) {
  if (h[n] == NIL) {
    if (n <= 1) h[n] = n;
    else {
      h[n] = fib(n - 1) + fib(n - 2);
    }
  }
  return h[n];
}

const n = 20;
init();
console.log(fib(n));

// let mai = 200;
// let NI = -1;

// const l = new Array(mai);
// function feb(n) {
//   if (n == 0 || n == 1) {
//     return n;
//   } else if (l[n] != NI) {
//     return l[n];
//   } else {
//     l[n] = h[n - 1] + h[n - 2];
//   }

//   return l[n];
// }

// const n = 10;
// console.log(feb(n));
