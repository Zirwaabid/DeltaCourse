// new operators and constructors

//constrctors:starts with capital letter and and does not return anything
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`)
}

let p1 = new Person("Zirwa", 19);  //instance


//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi my name is ${this.name}`)
    }
}
let p2 = new Person("Anas", 22)