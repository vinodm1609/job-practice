/** @format */

const arr = [-1];


function Kadar(arr) {

    let maxSum = 0;
    let currSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        if (currSum > maxSum) maxSum = currSum
        if (currSum < 0) currSum = 0
    }
    return maxSum;
}
// console.log(array(arr));

function KadarQ(arr) {
    let sum = 0;
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        max = Math.max(max, sum)
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}

function KadarT(arr) {
    let currSum = 0;
    let maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        if (currSum > maxSum) maxSum = currSum;
        if (currSum < 0) currSum = 0
    }
    return maxSum
}

function KadarA(arr) {
    let maxi = arr[0]
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        maxi = Math.max(maxi, sum)
        if (sum < 0) sum = 0
    }
    return maxi
}

function KadarC(arr) {
    let currSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        if (currSum > maxSum) maxSum = currSum;
        if (currSum < 0) currSum = 0
    }
    return maxSum
}

function KadarU(arr) {
    let sum = 0
    let maximum = arr[0]

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        maximum = Math.max(maximum, sum)
        if (sum < 0) sum = 0
    }
    return maximum
}


function KadarR(arr) {
    let arr1 = []
    let arr2 = []
    let marge = []
    for (let i = arr.length - 1; i >= 0; i++) {
        if (arr[i] <= 0) {
            arr1.push(arr[i])
        } else {
            arr2.push(arr[i])
        }
        marge = [...arr2, ...arr1]
    }
    return marge;
}