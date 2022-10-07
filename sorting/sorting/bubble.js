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

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

const arr = [4, 57, 7, 3, 933];
let n = arr.length;

// console.log(bubble(arr));
function selection(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
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

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let L = new Array(n1);
  let M = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }

  for (let j = 0; j < n2; j++) {
    M[j] = arr[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= M[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = M[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = M[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let mid = left + parseInt((right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function print(A, size) {
  for (let i = 0; i < size; i++) {
    console.log(A[i]);
  }
}

mergeSort(arr, 0, n - 1);
print(arr, n);
