const arr = [3, 2, 1]

function nextPermutations(arr) {
    let i = arr.length - 2
    while (arr[i] >= arr[i + 1]) {--i}

    if (i >= 0) {
        let j = arr.length - 1
        while (arr[i] >= arr[j]) { --j }
        [arr[i], arr[j]] = [arr[j], arr[i]]

    }
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[left], arr[right]]
        left++;
        right--
    }
    return arr
}

console.log(nextPermutations(arr));
