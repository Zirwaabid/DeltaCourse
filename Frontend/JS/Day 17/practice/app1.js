// print odd numbers
for (let index = 1; index <= 15; index = index + 2) {
    console.log(index);
};
//print odd numbers in reverse
for (let index = 15; index >= 1; index = index - 2) {
    console.log(index);
};

//print even numbers
for (let index = 2; index <= 10; index = index + 2) {
    console.log(index);
}
//print even numbers in reverse
for (let index = 10; index >= 2; index = index - 2) {
    console.log(index);
}

//print table of 5
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i)
}

//Ask user to print table
let n = prompt("Write any number");
n = parseInt(n)
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
};

//Nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//Guess favourite Movie
let favMovie = "avatar";
let guess = prompt("Guess the movie");

while (guess != favMovie) {
    if (guess == "quit") {
        (console.log("you quit"))
    }
    guess = prompt("Wrong! please Try Again");
}
if (guess == favMovie) {
    console.log("you won");
}

