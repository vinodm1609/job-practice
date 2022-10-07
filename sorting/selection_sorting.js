const arr = [12, 11, 13, 5, 6];

// function select(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//   }
//   return arr;
// }

// console.log(select(arr));

// function select(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//       if (min !== i) {
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(select(arr));

function select(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }
}

// function marge(arr, s, e) {
//   let mid = (s + e) / 2;
//   // dived the array
//   let len = mid - s + 1;
//   let len1 = e - mid;
//   // create new temp array
//   var M = new Array(len);
//   var N = new Array(len1);
//   // copy the array in temp
//   for (let i = 0; i < len; i++) {
//     M[i] = arr[s + i];
//   }
//   for (let j = 0; j < len1; j++) {
//     N[j] = arr[mid + e + j];
//   }

//   // marge the sort array
//   let index1 = 0;
//   let index2 = 0;
//   let manIndex = s;

//   while (index1 < len && index2 < len1) {
//     if (M[index1] <= N[index2]) {
//       arr[manIndex] = M[index1];
//       return index1++;
//     } else {
//       arr[manIndex] = N[index2];
//       index2++;
//     }
//   }

//   //  copy the remaining element

//   // M[] if there any
//   while (index1 < len) {
//     arr[manIndex] = M[index1];
//     index1++;
//     manIndex++;
//   }
//   // N[] if there any
//   while (index2 < len1) {
//     arr[manIndex] = N[index2];
//     index2++;
//     manIndex++;
//   }
//   return arr;
// }

// function mergeSort(arr, s, e) {
//   // base case
//   if (s >= e) {
//     return;
//   }
//   // find mid new arr
//   let mid = Math.floor((s + e) / 2);
//   mergeSort(arr, s, mid);
//   mergeSort(arr, mid + 1, e);
//   marge(arr, s, mid, e);
// }

// function printArray(A, size) {
//   for (var i = 0; i < size; i++) {
//     console.log(A[i] + " ");
//   }
// }

// const arr = [38, 27, 43, 3, 9, 82, 10];
// var arr_size = arr.length;

// console.log("Given array is <br>");
// printArray(arr, arr_size);

// mergeSort(arr, 0, arr_size - 1);
// console.log("Sorted array is <br>");
// printArray(arr, arr_size);
