// bubble sorting
const arr = [12, 4, 5, 2, 5, -1, 0, 4, 100, 56, -3, -4];
let n = arr.length;

function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(bubble(arr));
// selection

function selection(arr) {
  let n = arr.length;
  let min = 0;
  for (let i = 0; i < n; i++) {
    min = i;
    for (let j = 0; j < n; j++) {
      if (arr[min] < arr[j]) {
        min = j;
      }
      if (min < i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }
  return arr;
}

// console.log(selection(arr));

function insertion(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j > -1 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

// console.log(insertion(arr));

// marge

function merge(arr, l, mid, r) {
  let n1 = mid - l + 1;
  let n2 = r - mid;

  let L = new Array(n1);
  let M = new Array(n2);

  let y = l;
  for (let i = 0; i < n1; i++) {
    L[i] = arr[y++];
  }

  y = mid + 1;

  for (let j = 0; j < n2; j++) {
    M[j] = arr[y++];
  }

  let o = 0;
  let p = 0;
  let main = l;

  while (o < n1 && p < n2) {
    if (L[o] <= M[p]) {
      arr[main] = L[o];
      o++;
    } else {
      arr[main] = M[p];
      p++;
    }
    main++;
  }
  while (o < n1) {
    arr[main++] = L[o++];
  }
  while (p < n2) {
    arr[main++] = M[p++];
  }
}

function mergeSort(arr, l, r) {
  // base case
  if (l >= r) {
    return;
  }
  // find mid index of arr
  let mid = l + parseInt((r - l) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

// function print(arr, size) {
//   for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
//   }
// }

// mergeSort(arr, 0, n - 1);

// print(arr, n);

// queck
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
function print(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}
