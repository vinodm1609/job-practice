let arr = [666, -1, 63, -3, 23, -6, 880, 672, 0];

function re(arr) {
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result += `${arr[i]} `;
    // if only revers than result.push()
  }
  console.log(result.trim());
}
// console.log(re(arr));

function tt(arr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    max += arr[j];
  }
  //   console.log(min, max);
  let yy = min + max;
  console.log(yy);
}

// tt(arr);

function plus(arr) {
  let p = 0;
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      p += arr[i];
    }
    if (arr[i] < 0) {
      n += arr[i];
    }
  }
  let v = (p / arr.length).toFixed(3); //string ma decmila ka bade
  let a = (n / arr.length).toFixed(3);
  console.log(v);
  console.log(a);
}

// console.log(plus(arr));

const trr = "C";
function roman(trr) {
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
  for (let i = 0; i < trr.length; i++) {
    const curr = map[trr[i]];
    const pre = map[trr[i + 1]];
    sum += curr < pre ? -curr : curr;
  }
  return sum;
}
// console.log(roman(trr));

let t = "aba";

function pali(t) {
  let o = t + "";
  let left = 0;
  let right = t.length - 1;
  while (left < right) {
    if (o[left] !== o[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(pali(t));
