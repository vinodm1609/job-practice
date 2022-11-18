const arr = [12, 4, 7, 9, 2, 23, 25];

let m = 5;
let n = arr.length;

function findMinDiff(arr, n, m) {
    if (m == 0 || n == 0) return 0;

    arr.sort(function (a, b) {
        return a - b;
    });

    if (n < m) return -1;

    let min_diff = Number.MAX_VALUE;
    for (let i = 0; i + m - 1 < n; i++) {
        let diff = arr[i + m - 1] - arr[i];

        if (diff < min_diff) min_diff = diff;
    }
    return min_diff;
}
console.log(findMinDiff(arr, n, m));

function tt(arr, n, m) {
    if (n == 0 || m == 0) return 0;

    arr.sort(function (a, b) {
        return a - b;
    });
    if (n < m) return -1;

    let min = Number.MAX_VALUE;
    for (let i = 0; i + m - 1 < n; i++) {
        let diff = arr[i + m - 1] - arr[i]
        if (diff < min) min = diff
    }
    return min;
}


function rr(arr, n, m) {
    if (m == 0 || n == 0) return
    arr.sort(function (a, b) {
        return a - b
    })
    if (n < m) return -1
    let min = Number.MAX_VALUE
    for (let i = 0; i + m - 1 < n; i++) {
        let diff = arr[i + m - 1] - arr[i]
        if (diff < min) min = diff
    }
    return min
}