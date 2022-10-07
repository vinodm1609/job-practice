let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function partition(arr, low, high) {
//   // pivot
//   let pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j <= high - 1; j++) {
//     // if current element is samller
//     // than the pivot
//     if (arr[j] < pivot) {
//       // increment index of
//       //   smaller element
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     let pi = partition(arr, low, high);

//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
// }

// function print(arr, size) {
//   for (let i = 0; i < size; i++) {
//     console.log(arr[i] + "  ");
//   }
// }

// quickSort(arr, 0, n - 1);

// print(arr, n);

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

quickSort(arr, 0, n - 1);

print(arr, n);
