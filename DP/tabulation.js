let n = 9;

function fib(n) {
  let c = new Array(n + 1);

  c[0] = 0;
  c[1] = 1;
  for (let i = 2; i <= n; i++) {
    c[i] = c[i - 1] + c[i - 2];
  }
  return c[n];
}

// console.log(fib(n));

function fid(n) {
  let e = new Array(n + 1);

  e[0] = 0;
  e[1] = 1;
  for (let i = 2; i <= n; i++) {
    e[i] = e[i - 1] + e[i - 2];
  }
  return e[n];
}

console.log(fid(n));
