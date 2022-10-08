// // function reachHome(src, dest) {
// //   // base case
// //   if (src == dest) {
// //     console.log("pahuch ");
// //     return;
// //   }
// //   // processing - ek step aage bhdhajjao
// //   src++;

// //   // recurse call
// //   return reachHome(src, dest);
// // }

// // let dest = 10;
// // let = src = 1;

// // reachHome(src, dest);

// function fib() {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }

//   let ans = fib(n - 1) + fib(n - 2);
//   return ans;
// }

// function fit(n) {
//   if (n < 0) {
//     // base case
//     return 0;
//   }
//   if (n < 1) {
//     // base case
//     return 1;
//   }

//   return fit(n - 1) + fit(n + 2);
// }

// let d = [54, 34, 65, 24, -4, 5];
// let n = d.length;

// function sum(d, n) {
//   if (n == 0) {
//     return 0;
//   }

//   if (n == 1) {
//     return d[0];
//   }

//   return sum(d, n - 1) + d[n - 1];
// }
// console.log(sum(d, n));

const a = [1, 2, 3, 4, 5];
const n = a.length;
let k = 4;

function getSum(a, n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return a[0];
  }

  // return getSum(a, n - 1) + a[n - 1];
}
// console.log(getSum(a, n));

function findK(a, n, k) {
  // not solve
  if (n == 0) {
    return false;
  }

  if (a[0] == k) {
    return true;
  } else {
    return findK(a + 1, n - 1, k);
  }
}

console.log(findK(a, n, k));
