
let na = "vinod";
let n = na.length



function reverse(str, n) {
  
  if (n ==0) {
    return;
  }
  return str[n-1]+reverse(str ,--n)
}

console.log(reverse(na,n-1));