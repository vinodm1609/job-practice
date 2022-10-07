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

// console.log(insertion(arr));

function count(arr, min, max) {
  let n = arr.length;
  let temp = 0;
  let count = [];
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let j = 0; j < n; j++) {
    count[arr[j]]++;
  }
  for (let k = min; k <= max; k++) {
    while (count[k]-- > 0) {
      arr[temp++] = k;
    }
  }
  return arr;
}

// console.log(count(arr, 0, arr.length));

const ar = [8, 7, 6, 5, 4, 3, 2];

const s = "MCMXCIV";

function ronn(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let dd = map[arr[i]];
    let ee = map[arr[i + 1]];
    sum += dd < ee ? -dd : ee;
  }
  return sum;
}
