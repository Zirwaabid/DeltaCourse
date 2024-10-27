// this in javascript
const student = {
    name: "Zirwa",
    age: 19,
    math: 96,
    phy: 97,
    eng: 99,
    getAvg() {
        // console.log(this);
        let avg = (this.math + this.phy + this.eng) / 3;
        console.log(`The average marks of ${this.name} is ${avg}`)
    }
}
console.log(student.getAvg())

// try and catch
console.log("hello")
console.log("hello")
try{
    console.log(a)
}catch{
    console.log("a is not defined")
}
console.log("hello2")
console.log("hello2")

// arrow functions 
const cube=(n)=>{
    console.log(n*n*n);
}
cube(4);

const pow = (a, b) => {
    return a ** b;
}
console.log(pow(7, 9))

// settimeout function 
console.log("Hi Tourist")
setTimeout(()=>{
    console.log("To Pakistan")
},4000);
console.log("Welcome");

// set interval function
let id=setInterval(() => {
    console.log("Zirwa")
}, 2000);

clearInterval(id) // to stop