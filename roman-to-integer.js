const t = "MCMXCIV";
function ro(t) {
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
