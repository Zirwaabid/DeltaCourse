let day = 9;
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Not a day number")
        break;
}

console.error("something is wrong");
console.warn("Dont try again");
let firstName = prompt("Enter Your FirstName");
let lastName = prompt("Enter Your lastName");
console.log("Welcome", firstName, lastName, "!")
let msg = ("Welcome " + firstName + " " + lastName + "!")
alert(msg);