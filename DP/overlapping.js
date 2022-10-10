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
  let g = new Array(n + 1); // base case
  g[0] = 0;
  g[1] = 1;

  for (let i = 0; i < n; i++) {
    g[i] = g[i - 1] + g[i - 2];
  }
  return [n];
}


function fit(n) {
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }
  const DP = fit(n - 1) + fit(n - 2)
  return DP
}