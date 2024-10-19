// Question # 01
let num = 40;
if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("bad");
}

// Question # 02
let userName = prompt("Enter your name:");
let age = prompt("Enter your age:");
alert(`${userName} is ${age} years old`);

// Question # 03
let Qaurter = 5;
switch (Qaurter) {
    case 1:
        console.log("January,February,March")
        break;
    case 2:
        console.log("April,May,June")
        break;
    case 3:
        console.log("July,August,September")
        break;
    case 4:
        console.log("October,November,December")
        break;
    default:
        console.log("Not a quarter")
        break;
}
// Question # 04
let str = "Aeroplane";
if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
    console.log("Golden String");
} else {
    console.log("Bad String");
}
// Question # 05
let a = 15;
let b = 13;
let c = 19;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
};
// Question # 06
let num1 = 32;
let num2 = 47852;
if ((num1 % 10) == (num2 % 10)) {
    console.log("Both have same last digit");
} else {
    console.log("not same");
};