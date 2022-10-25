/** @format */

// const arr = [2, 7, 11, 15];
const target = 9;

function towSum(arr) {
  const n = arr.length;
  const sum = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) if (arr[i] + arr[j] === target) {
      sum.push(i, j);
    }
  }
  return sum;
}

// console.log(towSum(arr));

// const arr = [1, 2, 3, 4, 3, 2, 1, 3, 5, 3];
// const n = arr.length;
// function max(arr) {
//   let count = 0;
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i] == arr[j]) {
//         sum = arr[i];
//       }
//     }
//   }
//   return sum;
// }

// console.log(max(arr));


let arr = [0, -5, 10, 1, 20, 90, -3]

function arrey(arr) {
  let temp = []
  let arr1 = []
  let merge = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      temp.push(arr[i])
    } else {
      arr1.push(arr[arr.length - i])
    }
    merge = [...arr1, ...temp]
  }
  return merge;
}
console.log(arrey(arr));

// merge = [...arr1, ...temp]



function kar(arr) {
  let sum = 0
  let maxi = arr[i]
  for (let i = 0; i < arr.length: i++) {
    sum += arr[i]
    maxi = Math.max(maxi, sum)
    if (sum < 0) return 0
  }
}


const functionStor = {
  doWork() {
    console.log(this.name + 'is working in office ');
  }
}

function createPerson(name, age) {
  const obj = Object.create(functionStor)
  obj.name = name;
  obj.age = age;
}

const P1 = createPerson('rohit', 23)
P1.doWork = functionStor.doWork

const P2 = createPerson('vishal', 20)
P2.doWork = functionStor.doWork