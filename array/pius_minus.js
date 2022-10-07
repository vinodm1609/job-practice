const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let n = arr.length;
  let po = 0,
    no = 0,
    zero = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      po++;
    }
    if (arr[i] < 0) {
      no++;
    }
    if (arr[i] == 0) {
      zero++;
    }
  }
  let v = (po / n).toFixed(6);
  let a = (no / n).toFixed(6);
  let z = (zero / n).toFixed(6);
  console.log(v);
  console.log(a);
  console.log(z);
  return v, a, z;
}

plusMinus(arr);

function findMedian(arr) {
  let n = arr.length;
  // ager sort arr d
  arr.sort((a, b) => a - b);
  return arr[(n - 1) / 2];
}
