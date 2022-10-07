let arr = [10, 7, 8, 9, 1, 5];

// function marge(arr, si, ei) {

//   let mid = Math.floor(ei + (si - ei) / 2);
//   let n1 = mid - si + 1;
//   let n2 = ei - mid;

//   let m1 = new Array(n1);
//   let m2 = new Array(n2);

//   for (let i = 0; i < n1; i++) {
//     arr[m1] = arr[si + 1];
//   }
//   for (let j = 0; j < n2; j++) {
//     arr[m2] = arr[mid + ei + 1];
//   }

//   let i1 = 0;
//   let i2 = 0;
//   let maiI = si;

//   while (i1 <= n1 && i2 <= n2) {
//     if (arr[m1] <= arr[m2]) {
//       arr[maiI++] = arr[m1++];
//     } else {
//       arr[maiI++] = arr[m2++];
//     }
//   }
//   while (i1 <= n1) {
//     arr[maiI++] = arr[m1++];
//   }
//   while (i2 <= n2) {
//     arr[maiI++] = arr[m2++];
//   }
// }

// function margeSort(arr, si, ei) {
//   // base case
//   if (si >= ei) {
//     return;
//   }

//   let mid = Math.floor(ei + (si - ei) / 2);
//   margeSort(arr, si, mid);
//   margeSort(arr, mid + 1, ei);
//   marge(arr, si, mid, ei);
// }

// quick sort
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// function margeSort(arr, low, high) {
//   let pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j < high - 1; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     let pi = partition(arr, low, high);
//     margeSort(arr, low, pi - 1);
//     margeSort(arr, pi + 1, high);
//   }
// }

// function print(arr, size) {
//   for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
//   }
// }

// margeSort(arr, 0, n - 1);

// print(arr, n);

//

// selection sort

// function selection(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[min] < arr[j]) {
//         min = j;
//       }
//       if (min !== i) {
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//       }
//     }
//   }
//   return arr;
// }

//  bubble sort
// function bubble(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
