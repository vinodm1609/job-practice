function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register");
            resolve();
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log("send Email");
            resolve();
        }, 1000);
    })

}

function login() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log("login");
            resolve();
        }, 1000);
    })

}

function getUserData() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log("get");
            resolve();
        }, 1000);
    })

}

function display() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log("display");
            resolve();
        }, 1000);
    })

}

register()
    .then(sendEmail)
    .then(login)
    .then(getUserData) 
    .then(display)

console.log("other work");


const product ={
    name:"nob",
    price:500
}



const start = [1, 3, 4, 5]
const end = [6, 7, 8, 9]

const marge = [...start, ...end]
console.log(marge);
