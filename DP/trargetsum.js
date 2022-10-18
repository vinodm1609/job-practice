let arr = [1, 1, 1, 1, 1];
let k = 3


// function find(arr, n, k) {
//     if (k == 0 && n == arr.length) return 1

//     if (n >= arr.length) return 0

//     return find(arr, n + 1, k) +
//         find(arr, n + 1, k - arr[n]) +
//         find(arr, n + 1, k + arr[n])
// }

// console.log(find(arr, 0, k));

var findTargetSumWays = function (arr, target) {
    let s = 0;
    for (let v of arr) {
        s += v;
    }
    if (s < target || (s - target) % 2 != 0) {
        return 0;
    }
    const m = arr.length;
    const n = (s - target) / 2;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= m; ++i) {
        for (let j = n; j >= arr[i - 1]; --j) {
            dp[j] += dp[j - arr[i - 1]];
        }
    }
    return dp[n];
};
