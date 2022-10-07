function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

let n = 9;
console.log(fib(n));

// tabulation
function fid(n) {
  let g = new Array(n + 1);
  g[0] = 0;
  g[1] = 1;

  for (let i = 0; i < n; i++) {
    g[i] = g[i - 1] + g[i - 2];
  }
  return [n];
}
