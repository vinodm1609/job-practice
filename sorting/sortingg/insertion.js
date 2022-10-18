function insertion(arr) {
  let n = arr.length;
  for (let i = 1; i < n - 1; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j > -1 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
//selection
function selection(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
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
// bubble
function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// merge

function merge(arr, l, mid, r) {
  let l1 = mid - l + 1;
  let l2 = r - mid;

  let X = new Array(l1);
  let Y = new Array(l2);

  let t = l;
  for (let i = 0; i < l1; i++) {
    X[i] = arr[t++];
  }
  t = mid + 1;
  for (let j = 0; j < l2; j++) {
    Y[j] = arr[t++];
  }

  let h = 0;
  let p = 0;
  let main = l;
  while (h < l1 && p < l2) {
    if (X[h] < Y[p]) {
      arr[main] = X[h];
    } else {
      arr[main] = Y[p];
    }
  }
  while (h < l1) {
    arr[main] = X[h];
  }
  while (p < l2) {
    arr[main] = Y[p];
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let mid = l + parseInt((r - l) / 2);

  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function print(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}

//quick

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
