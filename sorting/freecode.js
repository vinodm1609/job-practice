function bubbleSort(array) {
    let n = array.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    // Only change code below this line
    return array;
    // Only change code above this line
}


// console.log(bubbleSort(array));

function selectionSort(array) {
    let n = array.length
    for (let i = 0; i < n; i++) {
        let max = i
        for (let j = 0; j < n; j++) {
            if (array[max] < array[j]) {
                max = j
            }
            if (max < i) {
                [array[i], array[max]] = [array[max], array[i]]
            }
        }
    }
    // Only change code below this line
    return array;
    // Only change code above this line
}

// console.log(selectionSort(array))


function insertionSort(array) {
    let n = array.length
    for (let i = 0; i < n; i++) {
        let curr = array[i]
        let j = i - 1
        while (j > -1 && curr < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = curr
    }
    // Only change code below this line
    return array;
    // Only change code above this line
}

// console.log(insertionSort(array))

function quickSort(array, low, high) {
    if (low < high) {
        let pi = partition(array, low, high)
        quickSort(array, low, pi - 1)
        quickSort(array, pi + 1, high)
    }
}


function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function partition(array, low, high) {
    let pivot = array[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (pivot > array[j]) {
            i++
            swap(array, i, j)
        }
    }
    swap(array, i + 1, high)
    return i + 1
}
function print(array, size) {
    for (let i = 0; i < size; i++) {
        console.log(array[i]);
    }
}

// quickSort(array, 0, n - 1);
// print(array, n);



function merge(array, l, mid, r) {
    let N1 = mid - l + 1;
    let N2 = r - mid;

    let M1 = new Array(N1);
    let M2 = new Array(N2);

    let v = l
    for (let i = 0; i < N1; i++) {
        M1[i] = array[v++]
    }
    v = mid + 1
    for (let j = 0; j < N2; j++) {
        M2[j] = array[v++]
    }
    let a = 0
    let b = 0
    let main = l

    while (a < N1 && b < N2) {
        if (M1[a] <= M2[b]) {
            array[main] = M1[a]
            a++
        } else {
            array[main] = M2[b]
            b++
        }
        main++
    }
    while (a < N1) {
        array[main++] = M1[a++]
    }
    while (b < N2) {
        array[main++] = M2[b++]
    }
}



function mergeSort(array, l, r) {
    if (l >= r) {
        return;
    }
    let mid = l + Math.floor((r - l) / 2)
    mergeSort(array, l, mid)
    mergeSort(array, mid + 1, r)
    merge(array, l, mid, r)
}

function print(array, size) {
    for (let i = 0; i < size; i++) {
        console.log(array[i]);
    }
}

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
let n = array.length

mergeSort(array, 0, n - 1);
print(array, n);
