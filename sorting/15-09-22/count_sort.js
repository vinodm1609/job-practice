const arr = [5, 10, 0, 3, 8, 5, 1, 10];

// function countSort(arr, min, max) {
//   let n = arr.length;
//   let z = 0;
//   let count = [];

//   for (let i = min; i <= max; i++) {
//     count[i] = 0;
//   }
//   for (let j = 0; j < n; j++) {
//     count[arr[j]]++;
//   }
//   for (let k = min; k <= max; k++) {
//     while (count[k]-- > 0) {
//       arr[z++] = k;
//     }
//   }
//   return arr;
// }
// console.log(countSort(arr, 0, 7));

function countSort(arr, min, max) {
  let n = arr.length;
  let z = 0;
  let count = [];

  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let j = 0; j < n; j++) {
    count[arr[j]]++;
  }
  for (let k = min; k <= max; k++) {
    while (count[k] > 0) {
      arr[z++] = k;
      count[k] -= 1;
    }
  }
  return arr;
}

console.log(countSort(arr, 0, 8));
