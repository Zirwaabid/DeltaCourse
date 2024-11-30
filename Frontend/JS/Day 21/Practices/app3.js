//default values
function sum(a, b = 3) {
    return a + b
}
console.log(sum(2));
const divide = (a, b = 4) => {
    return a / b
}
console.log(divide(10))

//spread
let arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr))
let str = "ZirwaAbid";
console.log(...str)

let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];
let newArr = [...odd, ...even]
console.log(newArr)

let data = {
    email: "ironman@gmail.com",
    password: "abc"
}
let newData = { ...data, id: "ironMan" }
console.log(newData)

//rest
function min(msg, ...args) {
    console.log(msg)
    return args.reduce((min, res) => {
        if (min < res) {
            return min
        } else {
            return res
        }
    })
}
console.log(min("mminimum number is", 1, 2, 3, 4, 0, 6))

//destructuring
let names = ["Zirwa", "Anas", "Ayesha", "Arsam", "Eman"];
let [winner, runnerUp, ...others] = names
console.log(winner)
console.log(runnerUp)
console.log(others)

let student = {
    name: "Zirwa",
    age: 19,
    marks: 60,
    subject: ["english", "math", "science"],
    username: "Zirwa@123",
    password: "avd"
}
let { username: user, password, city: place = "Jahanian" } = student;
console.log(user)
console.log(password)
console.log(place)