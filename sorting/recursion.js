// const n = 5;

// // recursion solution

// function recursion(n) {
//   // base case srif recursion ma use ho ta gai iteration ma hai

//   // base case and stop condition
//   if (n == 0) {
//     return 0;
//   }

//   // stop condition for requirement is match
//   if (n == 1 || n == 2) {
//     return 1;
//   } else {
//     // recursion function
//     return recursion(n - 1) + recursion(n - 2);
//   }
// }

// //  loop to print
// for (let i = 0; i < n; i++) {
//   console.log(recursion(i));
// }

const arr = [5, 1, 1, 2, 0, 0];

function two(arr) {
  let n = arr.length;
  let swap = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (swap == false) {
      break;
    }
  }
  return arr;
}

console.log(two(arr));
