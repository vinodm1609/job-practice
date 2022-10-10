const arr = [5, 3, 2, 5, 67, - 2, -5]
const n = arr.length

// this is brute force
function subarray(arr) {
    for (let i = 0; i < n; i++) {
        sum = arr[i]
        for (let j = 0; j < n; j++) {
            sum += arr[j]
        }
    }
    return sum;
}
// console.log(subarray(arr));

let sum = 0
let maxi = arr[0]
function subarray1(arr) {
    for (let i = 0; i < n; i++) {
        sum += arr[i]

        maxi = (maxi, sum)
    }
    return maxi
}

console.log(subarray1(arr));