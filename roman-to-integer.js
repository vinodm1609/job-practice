const t = "MCMXCIV";
function ro(t) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < t.length; i++) {
    const curr = map[t[i]];
    const next = map[t[i + 1]];
    sum += curr < next ? -curr : curr;
  }
  return sum;
}
console.log(ro(t));

let s = "III";
function roman(x) {
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
    if (map[s[i] < map[s[i + 1]]]) {
      sum -= map[s[i]];
    } else {
      sum += map[s[i]];
    }
  }
  return sum;
}

const x = "MCMXCIV";

function romanNumber(x) {
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
    if (map[x[i]] < map[x[i + 1]]) {
      sum -= map[x[i]];
    } else {
      sum += map[x[i]];
    }
  }
  return sum;
}

// 
function convertToRoman(num) {
  //Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.
  //get the digits
  const numStr = num.toString();
  const len = numStr.length;
  let Thousands = 0, Hundreds = 0, Tens = 0;
  if (len >= 2) { Tens = parseInt(numStr[len - 1 - 1]); }
  if (len >= 3) { Hundreds = parseInt(numStr[len - 1 - 2]); }
  if (len == 4) { Thousands = parseInt(numStr[0]); }
  const Ones = num % 10;
  const lookup = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]];
  return lookup[3][Thousands] + lookup[2][Hundreds] +
    lookup[1][Tens] + lookup[0][Ones];
}

convertToRoman(36)