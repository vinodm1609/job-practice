const arr = [38, 27, 43, 3, 9, -1, 0.0, 0.9, 82, 10];
let n = arr.length;

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

function print(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}

mergeSort(arr, 0, n - 1);

print(arr, n);
