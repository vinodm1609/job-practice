const arr = [0, -5, 10, 1, 20, 90, -3, 0, 40, -4]



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
console.log(arrey(arr));
