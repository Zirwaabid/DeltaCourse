// Question # 01
let msg = ("help!");
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// Question # 02
let name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
let newName = name.slice(4).replace(("l"), ("t"));
console.log(newName.replace(("l"), ("t")));

let students = ["Anas", "Zirwa", "Azra", "Abid"];
console.log(students.length);
console.log(students[0]);
console.log(students[1].length);
console.log(students[1][0]);

let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

// Question # 03
let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);
