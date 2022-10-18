const arr = [31415926535897932384626433832795n, 1, 3, 10, 3, 5];

// function insertion(arr) {
//   let n = arr.length;
//   let s = "";
//   for (let i = 1; i < n; i++) {
//     let curr = arr[i];
//     let j = i - 1;
//     while (j > -1 && curr < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = curr;
//     for (let k = 0; k < n; k++) {
//       s += `${arr[k]} `;
//     }
//     console.log(s);
//     s = "";
//   }
//   return arr;
// }

// insertion(arr);

function insertion(arr) {
  let n = arr.length;
  let s = "";
  let count = 0;
  for (let i = 0; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j > -1 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
      count++;
    }
    arr[j + 1] = curr;
    for (let k = 0; k < n; k++) {
      s += `${arr[k]}`;
    }
    console.log(s);
    s = "";
  }

  return count;
}

// insertion(arr);

function bubble(arr) {
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
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "");
  }
  return arr;
}

bubble(arr);
