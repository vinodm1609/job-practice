const arr = [1, 2, 3, 4, 3, 2, 1, 3, 5, 3];
let n = arr.length
function max(arr, n) {
    if (n > 0) {
        let i = 0;
        for (let j = 0; i < n; j++) {
            if (arr[i] != arr[j]) {
                i++
                arr[i] = arr[j]
            }
        }
        return i + 1
    }

}
console.log(max(arr));

