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