const arr = [1, 1, 2]
const n = arr.length

function remove(arr) {
    let temp = 0
    for (let i = 0; i < n; i++) {
        if (arr[n - 1] !== arr[i]) {
            arr[temp] = arr[i]
            temp++
        }
    }
    return temp
}