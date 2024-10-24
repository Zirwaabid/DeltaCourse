// Function examples 
function printName() {
    console.log("Zirwa Abid");
    console.log("Anas Rafiq");
}

function print1to5() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age = 19;
    if (age >= 1) {
        console.log("Adult")
    } else {
        console.log("not adult")
    }
}
isAdult()
print1to5()
printName()

function printPoem() {
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
}
printPoem()

function diceRoll() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random)
}
diceRoll()

// functions with arguments 
function personInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
personInfo("Zirwa", 19);

function sum(a, b) {
    console.log(a + b)
}
sum(3, 5);
sum(333, 545);
sum(65, 99);