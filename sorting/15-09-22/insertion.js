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

const arr = [11, 17, 5, 28, 3, 6, 15];
console.log(insertionSort(arr));
