let arr = [3221, 1, 10, 577, 9420, 7, 4793, 2030, 3138, 82, 2599, 743];
//bubble sort
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

console.log(bubble(arr));

// selection
function selection(arr) {
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
  return arr;
}
console.log(selection(arr));

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort(arr));

//quick sort
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort(arr));

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
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
let n = arr.length;
quickSort(arr, 0, n - 1);

print(arr, n);

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
    } else {
      results.push(arr2[j]);
    }
  }
  while (i < arr1.length) {
    results.push(arr[i]);
  }
  while (j < arr2.length) {
    results.push(arr[j]);
  }

  return results;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array; // return once we hit an array with a single item
  }
  const middle = Math.floor(array.length / 2); // get the middle item of the array rounded down
  const left = array.slice(0, middle); // items on the left side
  const right = array.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// function print(arr, size) {
//   for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
//   }
// }
// let n = arr.length;

console.log(mergeSort(arr, 0));
// print(arr, n - 1);

function counting(arr, min, max) {
  let count = [];
  let z = 0;
  let n = arr.length;

  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let j = 0; j < n; j++) {
    count[arr[j]]++;
  }

  for (let k = min; k <= max; k++) {
    while (count[k]-- > 0) {
      arr[z++] = k;
    }
  }
}
