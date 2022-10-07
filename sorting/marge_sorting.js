// function merge(arr, si, mid, ei) {
//   mid = Math.floor(si + (ei - si) / 2);

//   let n1 = mid - si + 1;
//   let n2 = ei - mid;

//   let m1 = new Array(n1);
//   let m2 = new Array(n2);

//   for (let i = 0; i < n1; i++) {
//     m1[i] = arr[si + 1];
//   }
//   for (let j = 0; j < n2; j++) {
//     m2[j] = arr[mid + ei + 1];
//   }

//   let i1 = 0;
//   let i2 = 0;
//   let mainI = si;

//   while (i1 <= n1 && i2 <= n2) {
//     if (m1[i1] < m2[i2]) {
//       arr[mainI++] = m1[i1++];
//     } else {
//       arr[mainI++] = m2[i2++];
//     }
//   }
//   while (i1 < n1) {
//     arr[mainI++] = m1[i1++];
//   }
//   while (i2 < n2) {
//     arr[mainI++] = m2[i2++];
//   }
// }

// function mergeSort(arr, si, ei) {
//   // base case
//   if (si >= ei) {
//     return;
//   }

//   let mid = Math.floor(si + (ei - si) / 2);
//   mergeSort(arr, si, mid);
//   mergeSort(arr, mid + 1, ei);
//   merge(arr, si, mid, ei);
// }

// function print(arr, size) {
//   for (let i = 0; i < size; i++) {
//     console.log(arr[i] + "  ");
//   }
// }
// const arr = [38, 27, 43, 3, 9, 82, 10];
// let n = arr.length;

// mergeSort(arr, 0, n - 1);
// print(arr, n);

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  console.log(results);
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
}

function print(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i] + "  ");
  }
}
const arr = [38, 27, 43, 3, 9, 82, 10];
let n = arr.length;

mergeSort(arr, 0, n - 1);
print(arr, n);
