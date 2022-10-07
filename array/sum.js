const arr = [2, 7, 11, 15];
const target = 9;

function towSum(arr) {
  let n = arr.length;
  let sum = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        sum.push(i, j);
      }
    }
  }
  return sum;
}

console.log(towSum(arr));
