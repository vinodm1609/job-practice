const arr = [1, 2, 3, 4, 3, 2, 1,3,5,3];
let n = arr.length
function max(arr) {
    let count = 0
    let sum = 0
    let sum1 =0
    for(let i =0; i<n; i++){
         sum = arr[i]
        }
    for(let j = 0; j<n; j++){
        sum1= arr[j]
    }
    if(sum == sum1){
        count++
    }
    return count 

}

console.log(max(arr));