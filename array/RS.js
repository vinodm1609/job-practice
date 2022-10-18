const arr = ["h", "e", "l", "l", "o"]

// function rs(arr) {
//     let n = arr.length
//     let temp = []
//     for (let i = n - 1; i >= 0; i--) {
//         temp.push(arr[i])

//     }
//     return temp
// }
// console.log(rs(arr));



// function er(arr) {
//     let n = arr.length
//     let temp = []
//     for (let i = 0; i < n; i++) {
//         temp[i] = arr[arr.length - i - 1]
//     }
//     return temp
// }
// console.log(er(arr));


function er(arr) {
    let n = arr.length
    let temp = []
    for (let i = 0; i < n; i++) {
        temp[i] = arr[arr.length - i - 1]
    }
    return temp;
}
console.log(er(arr));