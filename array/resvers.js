let arr = [6676, 3216, 4063, 8373, 423, 586, 8850, 6762];

function revers(arr) {
  let s = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    s += `${arr[i]}`;
    console.log(s);
    s = "";
  }
  return s;
}
// revers(arr);

function processData(arr) {
  //   const numbers = arr[1].trim().split(" ");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result += `${arr[i]} `;
  }
  console.log(result.trim());
}
// processData(arr);
