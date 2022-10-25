let fees = {}

fees.vinod = 100;
fees.anuj = 150;
// console.log(fees.vinod);

fees.vishal = function () {
    return (100 + 200 + 300)
}

// console.log(fees.vishal());

const foodFare = {
    mongo: 50,
    banana: 30,
    apple: 80,
    "apple kvi": 100
}

console.log(foodFare["apple kvi"]);

let arr = [1, 4, 5, 7, -2, 3, -6, 7]
function r(arr) {
    let a = []
    let b = []
    let marge = []

    for (let i = arr.length - 1; i >= 0; i++) {
        if (arr[i] < 0) a.push(arr[i])
        else {
            b.push(arr[i])
        }
        marge = [...b, ...a]
    }
}