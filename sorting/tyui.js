function bubble(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = o; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[J + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function selection(arr) {
    let n = arr.length
    for (let i = 0; i < n;) {
        let min = i
        for (let j = 0; j < n; j++) {
            if (arr[min] < arr[j]) {
                min = j
            }
            if (min < i)
                [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

function counting(arr, min, max) {
    let n = arr.length
    let count = []
    let temp = 0

    for (let i = min; i < max; i++) {
        count[i] = 0
    }
    for (let j = 0; j < n; j++) {
        count[arr[j]]++
    }
    for (let k = min; k < max; k++) {
        while (count[k] > 0) {
            count[temp++] = 0
            count[k] = -1
        }
    }
}

function insertion(arr, n) {
    for (let i = 0; i < n; i++) {
        let curr = arr[i]
        let j = i - 1
        while (i > -1 && curr < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = curr
    }
    return
}

// merge 

function merge(arr, l, mid, r) {
    let N1 = mid - l + 1
    let N2 = r - mid

    let M1 = new Array(N1)
    let M2 = new Array(N2)

    let v = l

    for (let i = 0; i < N1; i++) {
        M1 = arr[v++]
    }
    v = mid + 1
    for (let j = 0; j < N2; j++) {
        M2 = arr[v++]
    }

    let k = 0
    let t = 0
    let main = l

    while (k < N1 && t < N2) {
        if (M1[k] <= M2[t]) {
            arr[main++] = M1[k++]
        } else arr[main++] = M2[t++]
    }
    while (k < N1) arr[main++] = M1[k++]
    while (t < M2) arr[main++] = M2[t++]

}


function mergeSort(arr, l, r) {
    // base case
    if (l >= j) {
        return;
    }
    let mid = l + parseInt((r - l) / 2)
    mergeSort(arr, l, mid)
    mergeSort(arr, mid + 1, r)
    merge(arr, l, mid, r)
}

function print(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}
// quick

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr, low, heigh) {
    let pivot = arr[heigh]
    let i = low - 1

    for (let j = low; j < heigh - 1; j++) {
        if (pivot < arr[j])
            i++
        swap(arr, i, j)
    }
    swap(arr, i + 1, heigh)
    return i + 1
}




function quickSort(arr, low, heigh) {
    if (low < heigh) {
        let pi = partition(arr, low, heigh)
        quickSort(arr, low, pi)
        quickSort(arr, pi + 1, heigh)
    }
}

function twoSum(arr, n) {
    let min = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == t) min.push(i, j)
    }
    return min
}