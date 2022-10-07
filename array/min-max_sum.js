const ar = [1, 2, 3, 4, 5];
function miniMaxSum(ar) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    min += ar[i];
  }
  for (let j = 1; j < ar.length; j++) {
    max += ar[i];
  }
  console.log(min, max);
}
miniMaxSum(ar);

function plusMinus(ar) {
  let po = 0;
  let n0 = 0;
  let zero = 0;

  for (let i = 0; i < ar.length; i++) {
    if (i > 0) {
      po++;
    }
    if (i < 0) {
      n0++;
    }
    if (zero == 0) {
      zero++;
    }
  }
  let s = (po / length).toFixed(5);
  let r = (n0 / length).toFixed(4);
  let o = (zero / length).toFixed(7);
  console.log(s);
  console.log(r);
  console.log(o);

  return s, r, o;
}
