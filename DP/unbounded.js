function unbounded(W, wt, val, n) {
    let P = new Array(n + 1)
    for (let i = 0; i < n; i++) {
        P[i] = new Array(W + 1)
        for (let j = 0; j < W; j++) {
            if (j == 0 || i == 0) {
                P[i][j] = 0
            }
            else if (wt[i - 1] <= j) {
                P[i][j] = max(val[i - 1] + P[i][j - wt[i - 1]],
                    P[i - 1][j])
            } else {
                P[i][j] = P[i - 1][j]
            }
        }
    }
}



function unboundedR(W, wt, val, n) {
    if (n == 0 || W == 0) return 0
    if (wt[n - 1] > W) {
        return unboundedR(W, wt, val, n - 1)
    } else {
        return max(val[n] + unboundedR(W - wt[n - 1], wt, val, n - 1),
            unboundedR(W, wt, val, n - 1))
    }
}