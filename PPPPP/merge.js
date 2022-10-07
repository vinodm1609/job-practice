const arr = [8, 7, 6, 5, 4, 3, 2];
let n = arr.length;

function merge(arr, l, mid, r) {
  const n1 = mid - l + 1;
  const n2 = r - mid;

  const M1 = new Array(n1);
  const M2 = new Array(n2);

  let v = l;
  for (let i = 0; i < n1; i++) {
    M1[i] = arr[v++];
  }

  v = mid + 1;
  for (let j = 0; j < n2; j++) {
    M2[j] = arr[v++];
  }

  let a = 0;
  let b = 0;
  let main = l;

  while (a < n1 && b < n2) {
    if (M1[a] <= M2[b]) {
      arr[main] = M1[a];
      a++;
    } else {
      arr[main] = M2[b];
      b++;
    }
    main++;
  }
  while (a < n1) {
    arr[main++] = M1[a++];
  }
  while (b < n2) {
    arr[main++] = M2[b++];
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
  for (let k = 0; k < size; k++) {
    console.log(arr[k]);
  }
}

mergeSort(arr, 0, n - 1);
print(arr, n);
