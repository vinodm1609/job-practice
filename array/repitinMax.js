const arr = [1, 4, 2, 9, 9, 4, 4, 9, 4, 4]

function count(arr) {
    let n = arr.length
    let count = 0
    let max = 0
    let index_max = 0

    for (let i = 0; i < n; i++) {
        count = 0
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) count++
        }
        if (count > max) {
            max = count
        }

    }
    return arr[max]
}



console.log(count(arr));