function fac(n) {
  // base case
  if (n == 0) {
    return 1;
  }

  let choti = fac(n - 1);

  return n * choti;
}

// console.log(fac(5));

function face(n) {
  if (n === 0) {
    return 1;
  }

  let choti = face(n - 1);
  let badi = n * choti;
  return badi;
}

function fact(n) {
  if (n == 0) {
    return 1;
  }
  fact(n - 1);
  return n * fact(n - 1);
}

function power(m) {
  // base case
  if (m == 0) {
    return 1;
  }

  return 2 * power(m - 1);
}
// console.log(power(5));

function anuj(m) {
  if (m == 0) {
    return 1;
  }
  return m * anuj(m - 1);
}

function vinod(n) {
  if (n == 0) {
    return 1;
  }
  return 2 * vinod(n - 1);
}

function print(v) {
  if (v == 0) {
    return;
  }
  console.log(v);
  print(v - 1);
}

console.log(v);
