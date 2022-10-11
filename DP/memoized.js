// const max = 100;
// const NIL = -1;

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

// const n = 20;
// init();
// console.log(fib(n));




const nil = -1
const maxi = 100

const tt = new Array(max)

function intie() {
  for (let i = 0; i < max; i++) {
    tt[i] = nil
  }
  return 0
}

function fid(n) {
  //base case 
  if (n <= 1) {
    return n
  }

  if (tt[n] == nil) {
    return tt[n]
  }

  tt[n] = fid(n - 1) + fid(n - 2)
}


const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fib(n - 1) + fib(n - 2)
  return memo[n]
}