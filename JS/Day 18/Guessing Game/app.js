let userNum = prompt("Enter any number")
let random = Math.floor(Math.random() * userNum) + 1;

let guess = prompt("Guess the number");
while (true) {
    if (guess == "quit") {
        console.log("quitting a game");
        break
    }

    else if (guess == random) {
        console.log("Congratulations you are right , random number is ", random)
        break
    }
    else if (guess < random) {
        guess = prompt("hint: your answer is too small,please try again")
    }

    else if (guess > random) {
        guess = prompt("hint: your answer is too large,please try again")
    }

}

