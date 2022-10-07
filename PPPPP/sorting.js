const arr = [8, 7, 6, 5, 4, 3, 2];

function bubble(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selection(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = 0; j < n; j++) {
      if (arr[min] < arr[j]) {
        min = j;
      }
      if (min != i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }
  return arr;
}

function insertion(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
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

console.log(insertion(arr));
