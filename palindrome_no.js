let x = 121;

function palindrome(x) {
  let str = x + "";
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(palindrome(x));

function palindrome(x) {
  let str = x + "";
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
