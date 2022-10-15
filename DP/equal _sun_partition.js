const arr = [1, 5, 3]
let n = arr.length

function isSubset(arr, n, sum) {
    if (sum == 0) {
        return true
    }
    if (n == 0 && sum != 0) {
        return false
    }

    if (arr[n - 1] > sum) {
        return isSubset(arr, n - 1, sum)
    } else {
        return isSubset(arr, n - 1, sum - arr[n - 1]) ||
            isSubset(arr, n - 1, sum)
    }
}


function findPartition(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }
    if (sum % 2 == 0) return true
    return isSub(arr, n, Math.floor(sum / 2))
}

// function isSub(arr, sum, n) {
//     let K = new Array(n + 1)
//     for (let i = 0; i < n; i++) {
//         K[i] = new Array(sum + 1)
//         for (let j = 0; j < sum; j++) {
//             if (j == 0) return true
//             if (i == 0 && j != 0) return false
//             else if (arr[i - 1] <= j) {
//                 K[i][j] = K[i, j - arr[i - 1], i - 1] || K[i][i - 1][j]
//             } else {
//                 K[i][j] = K[i][i - 1][j]
//             }
//         }
//     }
//     return [n][sum]
// }


console.log(findPartition(arr, n));