let val = [1, 2, 3];
let wt = [4, 5, 1];
let W = 4;
let n = val.length;




// // Returns the maximum value that can
// // be put in a knapsack of capacity W
function Sack(W, wt, val, n) {

    let K = new Array(n + 1);

    // Build table K[][] in bottom up manner
    for (let i = 0; i <= n; i++) {
        K[i] = new Array(W + 1);
        for (let w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w]
                    = max(val[i - 1]
                        + K[i - 1][w - wt[i - 1]],
                        K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }

    return K[n][W];
}



function knap(W, wt, val, n) {
    let K = new Array(n + 1)

    for (let i = 0; i <= n; i++) {
        K[i] = new Array(W + 1)
        for (let j = 0; j <= W; j++) {
            if (i == 0 || j == 0) {
                K[i][j] = 0
            }
            else if (wt[i - 1] <= j) {
                K[i][j] = max(val[i - 1] + K[i - 1][j - wt[i - 1]],
                    K[i - 1][j])
            } else {
                K[i][i] = K[i - 1][j]
            }
        }
    }
    return K[n][W]
}
console.log(knap(W, wt, val, n))




function knaSack(W, wt, val, n) {
    let t = new Array(n + 1)
    for (let i = 0; i < n; i++) {
        t[i] = new Array(W + 1)
        for (let j = 0; j < W; j++) {
            if (i == 0 || j == 0) {
                t[i][j] = 0
            }
            else if (wt[i - 1] <= j) {
                t[i][j] = max(val[i - 1] + t[i - 1][j - wt[i - 1]],
                    t[i - 1][j])
            } else {
                t[i][j] = t[i - 1][j]
            }
        }
    }
    return t[n][W]
}

console.log(knaSack(W, wt, val, n));

function max(a, b) {
    return (a > b) ? a : b;
}

function knapSack(W, wt, val, n) {
    let y = new Array(n + 1)

    for (let i = 0; i <= n; i++) {
        y[i] = new Array(W + 1)
        for (let j = 0; j <= W; j++) {
            if (i == 0 || j == 0) {
                y[i][j] = 0
            }
            else if (wt[i - 1] <= j) {
                y[i][j] = max(val[i - 1] + y[i - 1][j - wt[i - 1]],
                    y[i - 1][j])
            } else {
                y[i][j] = y[i - 1][j]
            }
        }
    }
    return y[n][W]
}
// console.log(knapSack(W, wt, val, n));

function manner(arr, sum, n) {
    let E = new Array(n + 1)
    for (let i = 0; i < n; i++) {
        E[i] = new Array(sum + 1)
        for (let j = 0; j < sum; j++) {
            if (i == 0) {
                return false
            }
            if (j == 0) return true
            else if (arr[n - 1] <= sum) {
                E[i][j] = E[i, j - arr[i - 1]] || E[i - 1][j]
            } else {
                E[i][j] = E[i - 1][j]
            }
        }
    }
    return E[n][sum]
}

const f =

    function vishal(W, wt, val, f) {
        let O = new Array(t + 1)
        for (let i = 0; i < n; i++) {
            O[i] = new Array(W + 1)
            for (let j = 0; j < W; j++) {
                if (i == 0 || j == 0) {
                    O[i][j] = 0
                }
                else if (wt[n - 1] <= W) {
                    O[i][j] = max(val[i - 1] + O[j - wt[i - 1]][i - 1],
                        O[i - 1[j]])
                } else {
                    O[i][j] = O[i - 1][j]
                }
            }
        }
        return O[t][W]
    }
