const ar = [769082435, 210437958, 673982045, 375809214, 380564127]
function miniMaxSum(ar) {
  const n = ar.length
  let min = ar[0]
  let max = ar[0]
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (ar[i] < min) min = ar[i]
    if (ar[i] > max) max = ar[i]
    sum += ar[i]
  }
  let l = sum - min
  let r = sum - max
  console.log(l, r);
}
miniMaxSum(ar);








// function plusMinus(ar) {
//   let po = 0;
//   let n0 = 0;
//   let zero = 0;

//   for (let i = 0; i < ar.length; i++) {
//     if (i > 0) {
//       po++;
//     }
//     if (i < 0) {
//       n0++;
//     }
//     if (zero == 0) {
//       zero++;
//     }
//   }
//   let s = (po / length).toFixed(5);
//   let r = (n0 / length).toFixed(4);
//   let o = (zero / length).toFixed(7);
//   console.log(s);
//   console.log(r);
//   console.log(o);

//   return s, r, o;
// }

const arr = [4, 3, 5, 6, 1, 6, 8, 2]
// function minMax(arr) {
//   let n = arr.length
//   let min = arr[0]
//   let max = arr[0]

//   for (let i = 0; i < n; i++) {
//     if (arr[i] < min) min = arr[i]
//   }
//   for (let j = 0; j < n; j++) {
//     if (arr[j] > max) max = arr[j]
//   }
//   console.log(min, max);

// }


// function min(arr) {
//   let min = arr[0]
//   let max = [0]
//   let sum = 0
//   let n = arr.length
//   for (let i = 0; i < n; i++) {
//     if (arr[i] < min) min = arr[i]
//     if (arr[j] > max) max = arr[i]
//     sum += arr[i]
//   }
//   console.log(sum - min, sum - max);
// }
