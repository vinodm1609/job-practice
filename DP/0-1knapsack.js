// // A utility function that returns

const e = require("express");

// // maximum of two integers
function max(a, b) {
    return (a > b) ? a : b;
}

// // Returns the maximum value that can
// // be put in a knapsack of capacity W
function knapSack(W, wt, val, n) {

    //     // Base Case
    if (n == 0 || W == 0)
        return 0;

    //     // If weight of the nth item is  more than Knapsack capacity W,then this item cannot be
    //     // included in the optimal solution
    if (wt[n - 1] > W)
        return knapSack(W, wt, val, n - 1);

    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    else
        return max(val[n - 1] +
            knapSack(W - wt[n - 1], wt, val, n - 1),
            knapSack(W, wt, val, n - 1));
}



let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;

// function max(a, b) {
//     return (a > b) ? a : b
// }

// function Knapsack(W, wt, val, n) {
//     // base case 
//     if (n == 0 || n == 1) {
//         return 0
//     }

//     if (wt[n - 1] > W) {
//         return Knapsack(W, wt, val, n - 1);
//     } else {
//         return max(val[n - 1] +
//             Knapsack(W - wt[n - 1], wt, val, n - 1),
//             Knapsack(W, wt, val, n - 1));
//     }
// };


function max(a, b) {
    return a > b ? a : b
}

function knapSack(W, wt, val, n) {
    if (n == 0 || W == 1) {
        return 0
    }
    if (wt[n - 1] > W) {
        return knapSack(W, wt, val, n - 1)
    } else {
        return max(val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
            knapSack(W, wt, val, n - 1))
    }
}
// console.log(knapSack(W, wt, val, n));




function max(a, b) {
    return a > b ? a : b
}

function knapSackV(W, wt, val, n) {
    if (n == 0 || W == 0) {
        return 0
    }
    if (wt[n - 1] > W) {
        knapSack(W, wt, val, n - 1)
    }
    else {
        return max(val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
            knapSack(W, wt, val, n - 1))
    }
}


function subset(arr, sum, n) {
    if (sum == 0) return true
    if (n == 0) return false

    if (arr[n - 1] > sum) {
        return subset(arr, sum, n - 1)
    } else {
        return subset(arr, sum - arr[n - 1], n - 1 || subset(arr, sum.n - 1))
    }
}

const t = arr.length
function anuj(arr, sum, t) {
    if (wt[n - 1] > W) {
        return anuj(arr, sum, n - 1)
    } else {
        return max(arr[t - 1] + anuj(arr, sum - arr[t - 1], t - 1),
            anuj(arr, sun, t - 1))
    }
}