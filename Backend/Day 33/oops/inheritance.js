// inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`My name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age) //  parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age) //  parent class constructor is being called
        this.subject = subject;
    }
}

let st1 = new Student("Zirwa", 19, 344);
let teach1 = new Teacher("Eco", 30, "Computer");

// another example of inheritance
class Mammals {
    constructor(name) {
        this.name = name;
        this.type = "warm blooded";
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}

class Cat extends Mammals {
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("Meeooow....")
    }
}

class Dog extends Mammals {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Wooohhh....")
    }
}
let c1 = new Cat("kitty")