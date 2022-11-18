// const arr = [4, 5, 6, 7, 0, 1, 2]
// const target = 0

function Student() {
    this.title = "Mr.";
    this.name = "Steve";
    this.gender = "Male";
    this.sayHi = function () {
        alert('Hi');
    }
}
var student1 = new Student();

console.log(Object.keys(student1));
