function bubble(nums) {
  for (var k = nums.length - 1; k >= 1; k--) {
    for (var i = 0; i < k; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1);
      }
    }
  }
  function swap(i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return nums;
}

const nums = [2, 1, 3, 5, 78, 54, 23, 56, 90];
let res = bubble(nums);
console.log(res);
const arr = [12, 11, 13, 5, 6];

function bubble(arr) {
  for (let k = arr.length - 1; k >= 1; k--) {
    for (let i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1);
      }
    }
  }
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

// Bubble sort
function bubble(arr) {
  //Length of the array
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      //Swap the numbers
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
console.log(bubble(arr));

function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubble(arr));
