const { set } = require("mongoose");

const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 4;
// sliding window
function maxsum(arr) {
  const n = arr.length;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// console.log(maxsum(arr));

// Initialize left = 0 and right = 0.
// Initialize a HashSet to store the characters of the current window.
// Slide the index right  toward N and if it is not present in the current HashSet, slide it further.
// Till this point, we have the maximum non repeating substring length.
// If a character is  found, which is present in the current window,
// remove the character from the current window and slide further.

const s = "asvkugfiugsalddlasguifgukvsa";

function alternate(s) {
  if (s.length == 0) {
    return 0;
  }
  const ss = new Set();
  let i = 0;
  let ans = 0;
  for (let j = 0; j < s.length; ++j) {
    while (ss.has(s[j])) {
      ss.delete(s[i++]);
    }
    ss.add(s[j]);
    ans = Math.max(ans, j - i + 2);
  }
  return ans;
}

console.log(alternate(s));
