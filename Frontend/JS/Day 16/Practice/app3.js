// question 01
let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july", "june");
console.log(months)

// question 02
let languages = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(languages.reverse().indexOf("javascript"))

// question 03
let tic = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
tic[0][1] = "O";
console.log(tic)