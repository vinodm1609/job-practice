

function register(cb) {
    setTimeout(() => {
        console.log('register');
        cb();
    }, 2000)


}

function sendEmail(cb) {
    setTimeout(() => {
        console.log('send Email');
        cb()
    }, 3000)

}

function login(cb) {
    setTimeout(() => {
        console.log('login');
        cb()
    }, 2000)

}

function getUserData(cb) {
    setTimeout(() => {
        console.log('get');
        cb()
    }, 6000)

}

function display() {
    setTimeout(() => {
        console.log('display');
    }, 1000)
}




register(() => {
    sendEmail(() => {
        login(() => {
            getUserData(() =>{
                 display()
            })
           
        });

    });

});
 
console.log('other work');
