const arr = [2, 3, 4, 5, 6, 7, 8, 18];
let k = 16;

let n = arr.length;

function binary(arr, s, e, k) {
  if (s > e) {
    // base case
    return false;
  }
  let mid = s + parseInt((e - s) / 2);

  if (arr[mid] == k) {
    return true;
  } else if (arr[mid] < k) {
    return binary(arr, mid + 1, e, k);
  } else {
    return binary(arr, s, mid - 1, k);
  }
}

// console.log(binary(arr,0,n,k));

function binart(arr, s, e, k) {
  if (s > e) {
    return false;
  }
  const mide = s + parseInt((e - s) / 2);

  if(arr[mide]== k){
    return true
  }

  else if(arr[mid] < k){
    return binart(arr,mide+1,e,k)
  }
  else{
    return binart(arr,s,mide-1,k )
  }
}
