const arr = [2, 3, 7, 8, 10]
const sum = 11
const n = arr.length
// function subset(arr, sum) {
//     let p = new Array(n + 1)
//     for (let i = 0; i < n; i++) {
//         p[i] = new Array(sum + 1)
//         for (let j = 0; j < sum; j++) {
//             if (i == 0) {
//                 p[i][j] = false;
//             }
//             else if (j == 0) {
//                 p[i][j] = true
//             }
//             else if (arr[i - 1] <= j) {
//                 p[i][j] = p[i][j - arr[i - 1]] || p[i - 1][j]
//             } else {
//                 p[i][j] = p[i - 1][j]

//             }
//         }
//     }
//   return p[n][sum]
// }


function subsett(arr, sum, n) {
    if (sum === 0) return true
    if (n === 0) return false

    if (arr[n - 1] > sum) {
        return subsett(arr, n - 1, sum)
    } else {
        return subsett(arr, sum - arr[n - 1], n - 1 || subsett(arr, sum.n - 1))
    }
}
console.log(subsett(arr, sum));


function set(arr, sum, n) {
    if (sum == 0) return true
    if (n == 0) return false

    if (arr[n - 1] > sum) {
        return set(arr, sum, n - 1)
    } else {
        return max(arr[n - 1] + set(arr, sum - arr[n - 1], n - 1),
            max(arr, sum, n - 1))
    }
}

function sub(arr, sum, n) {
    let K = new Array(n + 1)
    for (let i = 0; i < n; i++) {
        K[i] = new Array(sum + 1) {
            for (let j = 0; j < sum; j++) {
                if (i == 0) return false
                if (j == 0) return true

                else if (arr[i - 1] <= j) {
                    K[i][j] = K[i][j - arr[i - 1]] || K[i - 1][j]
                } else K[i][j] = K[i - 1][j]
            }
        }
    }
    return p[n][sum]
}