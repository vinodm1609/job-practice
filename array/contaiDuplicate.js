const arr = [1, 2, 3, 4]


function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true
        }

    }
    return false
}






function arrays(arr) {
    let unique = new Set(arr)
    if (unique.size !== arr.length) return true
    return false
}
console.log(arrays(arr));