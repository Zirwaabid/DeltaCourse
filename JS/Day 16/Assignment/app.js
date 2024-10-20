// question 01
let num = [7, 9, 0, -2];
let n = 3;
let ans = num.slice(0, n)
console.log(ans)

// question 02
let num2 = [7, 9, 0, -2];
let n2 = 4;
let ans2 = num2.slice(1, n2)
console.log(ans2)

// question 03
let str = prompt("Enter string");
if (str.length === 0) {
    console.log("Your string is an empty")
} else {
    console.log("Your string is not an empty")
}

// question 04
let charac = "apnACollege";
let idx = 3;
if (charac[idx] == charac[idx].toLowerCase()) {
    console.log("lowercase")
} else {
    console.log("not lowercase")
}

// question 05
let word = prompt("Enter your string");
console.log(`original string: ${word}`)
console.log(`string after trim:${word.trim()}`)

// question 06
let arr = ["a", "b", "c", "d"];
let item = "a";
if (arr.indexOf(item) != -1) {
    console.log("This is the part of arr")
} else {
    console.log("This is not the part of arr")
}