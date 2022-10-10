/** @format */

// const arr = [2, 7, 11, 15];
const target = 9;

function towSum(arr) {
  const n = arr.length;
  const sum = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) if (arr[i] + arr[j] === target) {
      sum.push(i, j);
    }
  }
  return sum;
}

// console.log(towSum(arr));

const arr = [1, 2, 3, 4, 3, 2, 1, 3, 5, 3];
const n = arr.length;
function max(arr) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        sum = arr[i];
      }
    }
  }
  return sum;
}

console.log(max(arr));
