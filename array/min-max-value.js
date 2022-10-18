const arr = [3, 2, 1, 56, 10000, 167]

// function minMax(arr) {
//     let n = arr.length
//     let max = arr[0]
//     let min = arr[0]

//     for (let i = 0; i < n; i++) {
//         if (arr[i] > max) max = arr[i]
//     }
//     for (let j = 0; j < n; j++) {
//         if (arr[j] < min) min = arr[j]
//     }
//     console.log(max, min);
// }

// function minMax(arr) {

//     for (let i = 0; i < n; i++) {
//         if (arr[i] > Q) Q = arr[i]
//     }
//     for (let j = 0; j < n; j++) {
//         if (arr[j] < P) P = arr[j]
//     }
//     console.log(Q, P);
// }

// minMax(arr)

// function miniMaxSum(arr) {
//     let min = 0;
//     let max = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         min += arr[i];
//     }
//     for (let j = 1; j < arr.length; j++) {
//         max += arr[j];
//     }
//     console.log(min, max);
// }
// miniMaxSum(arr);

// function vino(arr) {
//     let n = arr.length
//     let max = arr[0]
//     let min = arr[0]
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         if (arr[i] < min) min = arr[i]
//         if (arr[i] > max) max = arr[i]
//         sum += arr[i]
//     }
//     let l = sum - min;
//     let j = sum - max;
//     console.log(l, j);
// }



function anu(arr) {
    let n = arr.length
    let max = arr[0]
    let min = arr[0]

    for (let i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i]
    }
    for (let j = 0; j < n; j++) {
        if (arr[j] < min) min = arr[j]
    }
    console.log(max, min);
}
anu(arr)