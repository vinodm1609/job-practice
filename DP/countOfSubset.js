const arr = [2, 3, 5, 6, 8, 10]
const sum = 10
const n = arr.length

function count(arr, sum, n) {
    let K = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
        K[i] = new Array(sum + 1)
        for (let j = 0; j <= sum; j++) {
            if (i == 0 || j == 0) {
                K[i][j] = 0
            }
            else if (arr[i - 1] <= j) {
                K[i][j] = K[i - 1][j - arr[i - 1]] + K[i - 1][j]
            } else {
                K[i][j] = K[i - 1][j]
            }
        }
    }
    return K[n][sum]
}

console.log(count(arr, sum, n));