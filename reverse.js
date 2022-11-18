



function arrey(arr) {
    let temp = []
    let arr1 = []
    let merge = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= 0) {
            temp.push(arr[i])
        } else {
            arr1.push(arr[i])
        }
        merge = [...arr1, ...temp]
    }
    return merge;
}
// console.log(arrey(arr));




const arr = [0, -5, 10, 1, 20, 90, -3, 0, 40, -4, -100, 500]


function array1(arr) {
    let arr1 = []
    let arr2 = []
    let marge = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= 0) {
            arr1.push(arr[i])
        } else {
            arr2.push(arr[i])
        }
        marge = [...arr2, ...arr1]
    }
    return marge
}

function maximinV(arr) {
    let min = []
    let max = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > max) max = arr[j]
    }
    // console.log(min, max);
}
// maximinV(arr)


function sum(arr) {
    let min = [0];
    let max = [0]
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i]
        sum += arr[i]
    }
    console.log(`min ${sum - min} max${sum - max}`);
}

sum(arr)



function to(arr) {
    let sum = 0;
    let maxi = arr[0]

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        maxi = Math.max(maxi, sum)
        if(sum <0) sum = 0
    }
}