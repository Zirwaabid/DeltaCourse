let password = prompt("Enter your password");
let newPassword = password.trim();
console.log(newPassword);

let str = ("ILoveCoding");
console.log(str.indexOf("Love"));

let name = ("  Zirwa");
console.log(name);
let newName = name.trim().toUpperCase();
console.log(newName);

let fruit = ("ApnaCollege");
console.log(fruit.slice(4, fruit.length));
console.log(fruit.slice(4));
console.log(fruit.slice(-7));

let word = ("I Love Coding");
let newWord = word.replace("Love", "Do");
console.log(newWord);
console.log(newWord.repeat(2));
