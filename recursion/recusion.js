function print(n) {
  if (n < 0) {
    return;
  }

  console.log("" + n);
  print(n + 1);
}

function print(n) {
  if (n == 0) {
    return 1;
  }
  return n * print(n - 1);
}

console.log(print(4));

function print(n, a) {
  if (n <= 0) {
    return a;
  }
  return print(n - 1, n * a);
}

function fact(n) {
  return print(n - 1);
}
// console.log(fact(5));

function fib() {}

const n = 10;
function print(n) {
  if (n <= 0) {
    // base case
    return;
  }
  console.log("hello"); // business logic
  print(n - 1); // recursive call
}

const v = [1, 2, 3, 4];

function public(v, i) {
  if (i >= v.length) {
    return;
  }

  console.log(v[i]);
  public(v, i + 1);
}
