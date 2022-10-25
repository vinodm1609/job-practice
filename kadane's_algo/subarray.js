const arr = [-1, 9, 10, -1, -15, 40, 1, 10, 2, 4, 5, 90, -60, 30, -2, 20]


function kadar(arr) {
    let sum = 0;
    let maximum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        maximum = Math.max(maximum, sum)
        if (sum < 0) sum = 0
    }
    return maximum;
}
